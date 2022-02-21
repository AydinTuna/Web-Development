from flask import Blueprint, render_template, url_for, redirect, request, flash, abort
from flask_login import current_user
from .models import Movie, Comment, User
from flask_pymongo import ObjectId
from random import randint
from .auth import login, signup, update_password, update_username

error = Blueprint("error", __name__)
movie = Blueprint("movie", __name__)
user = Blueprint("user", __name__)
main = Blueprint("main", __name__)

def check_modals():
    if ("lemail" in request.form): #Giriş yap
        email = request.form.get("lemail")
        password = request.form.get("lpassword")
        login(email, password)
        return redirect(url_for("main.home"))
    elif ("semail" in request.form): #Kayıt ol
        name = request.form.get("sname")
        email = request.form.get("semail")
        password1 = request.form.get("spword")
        password2 = request.form.get("spword2")
        signup(email, password1, password2, name)
    elif ("mname" in request.form): #Tavsiyeler
        name = request.form.get("mname")
        year = request.form.get("myear")
        with open("Tavsiyeler.txt", "a+") as write_file:
            write_file.write(f"Film İsmi: {name!r}, Film Yılı: {year!r}\n")
            write_file.close()
        flash("Tavsiyeniz alınmıştır.")

@error.app_errorhandler(403)
def error_403(error):
    return render_template("errors/403.html")

@error.app_errorhandler(404)
def error_404(error):
    return render_template("errors/404.html")

@error.app_errorhandler(500)
def error_500(error):
    return render_template("errors/500.html")

@main.route("/")
def root():
    return redirect(url_for("main.home"))

@main.route("/home/", methods=["GET", "POST"])
def home():
    if (request.method == "POST"):
        check_modals()

    movies = Movie.get_random_movies(20)

    rm = Movie.get_random_movies(1)[0]
    return render_template("views/home.html", movies=movies, rm=rm)

@main.route("/search/", methods=["GET", "POST"])
def search_movies():
    if (request.method == "POST"):
        check_modals()

    text = request.args.get("search")
    if (text):
        movies = Movie.search(text)
        if (movies):
            flash(f"{text!r} için arama sonuçları gösteriliyor.")

            rm = Movie.get_random_movies(1)[0]
            return render_template("views/search.html", movies=movies, rm=rm)
    else:
        flash(f"{text!r} ile ilgili bir sonuç bulunamadı.")
        return redirect(url_for("main.home"))

@movie.route("/genres/<genre>", methods=["GET", "POST"])
def movie_genre(genre):
    if (request.method == "POST"):
        check_modals()
        
    movie_count = 20
    movies = Movie.get_random_movies_by_genre(movie_count, genre)
    flash(f"{movie_count} tane {genre!r} türü film")

    rm = Movie.get_random_movies(1)[0]
    return render_template("views/genre.html", movies=movies, rm=rm)

@movie.route("/genres/", methods=["GET", "POST"])
def movie_genres():
    if (request.method == "POST"):
        check_modals()
        
    genres = ["Kısa", "Batı", "Drama", "Fantezi", "Animasyon",
        "Komedi", "Polisiye", "Tarih", "Aksiyon", "Romantik",
        "Biyografi", "Macera", "Aile", "Gizem", "Savaş",
        "Belgesel", "Korku", "Gerilim", "Spor", "Bilim-Kurgu",
        "Müzik", "Müzikal", "Kara-Film", "Talk-Show", "Haber"]
    colors = [f"#{randint(0, 0xFFFFFF):06x}" for x in range(len(genres))]

    rm = Movie.get_random_movies(1)[0]
    return render_template("views/genres.html", genres=genres, colors=colors, rm=rm)

@movie.route("/id/<movie_id>/", methods=["GET", "POST"])
def movie_info(movie_id):
    if (request.method == "POST"):
        check_modals()
        if ("comment" in request.form):
            if (current_user.is_authenticated):
                text = request.form.get("comment")
                name = current_user.name
                email = current_user.email
                Comment.add_comment(movie_id, name, email, text)
                flash("Yorumunuz eklendi.")
            else:
                flash("Lütfen giriş yapınız.")
                return redirect(url_for("auth.log_in"))
    
    if (request.method == "GET"):
        if ("comment_id" in request.args):
            if (current_user.is_authenticated):
                comment_id = request.args.get("comment_id")
                comment = Comment(comment_id)
                if (current_user.email == comment.info["email"]):
                    Comment.delete_comment(comment_id)
                    flash("Yorumunuz silindi.")
            else:
                flash("Lütfen giriş yapınız.")
                return redirect(url_for("auth.log_in"))

    movie = Movie(movie_id)
    comments = Comment.get_all_comments_from_movie_id(movie_id)

    users = []
    for comment in comments:
        user_id = User.get_id_from_email(comment.info["email"])
        users.append(user_id)

    random_movie = Movie.get_random_movies(1)

    rm = Movie.get_random_movies(1)[0]
    return render_template("views/movie.html", movie=movie, random_movie=random_movie[0], comments=comments, users=users, rm=rm)
    
@user.route("/id/<user_id>/", methods=["GET", "POST"])
def profile_page(user_id):
    user = User.get_info_from_id(user_id)

    if (request.method == "POST"):
        check_modals()
        if (current_user.is_authenticated):
            if ("newname" in request.form): # Kullanıcı ismi değiştir
                password = request.form.get("password")
                new_name = request.form.get("newname")
                update_username(user, password, new_name)
            elif ("username" in request.form): # Şifre değiştir
                user_name = request.form.get("username")
                password1 = request.form.get("newpw1")
                password2 = request.form.get("newpw2")
                update_password(user, user_name, password1, password2)

    self_profile = False
    
    if (current_user.is_authenticated):
        if (current_user._id == ObjectId(user_id)):
            self_profile = True
    
    rm = Movie.get_random_movies(1)[0]
    return render_template("views/profile.html", self_profile=self_profile, user=user, rm=rm)
