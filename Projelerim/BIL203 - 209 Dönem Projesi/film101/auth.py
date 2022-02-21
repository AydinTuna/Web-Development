from flask import Blueprint, render_template, request, redirect, url_for, flash
from flask_login import login_user, login_required, logout_user, current_user
from .models import User, Movie
from werkzeug.security import generate_password_hash, check_password_hash

auth = Blueprint("auth", __name__)

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

def update_password(user, user_name, password1, password2):
    if (current_user.is_authenticated):
        if (user_name == user["name"]):
            if (password1 == password2):
                hashed_password = generate_password_hash(password1, "sha256")
                User.update_info(user["_id"], "password", hashed_password)
                flash("Şifre başarı ile değiştirildi.")
                return redirect(url_for("auth.logout"))
        flash("Lütfen girdiğiniz bilgileri kontrol ediniz.")
        return redirect(url_for("main.home"))

def update_username(user, password, new_name):
    if (current_user.is_authenticated):
        is_password_same = check_password_hash(user["password"], password)
        if (is_password_same):
            User.update_info(user["_id"], "name", new_name)
            flash("Kullanıcı ismi başarı ile değiştirildi.")
            return redirect(url_for("auth.logout"))
        else:
            flash("Lütfen girdiğiniz bilgileri kontrol ediniz.")
            return redirect(url_for("main.home"))

@auth.route("/reset/", methods=["GET", "POST"])
def reset_password():
    if (request.method == "GET"):
        rm = Movie.get_random_movies(1)[0]
        return render_template("auth/reset.html", rm=rm)
    elif (request.method == "POST"):
        check_modals()
        name = request.form.get("name")
        email = request.form.get("email")
        new_password = request.form.get("password")
        new_password_confirm = request.form.get("password2")
        if (User.isEmailInUse(email)):
            if (name == User.get_name_from_email(email)):
                if (new_password == new_password_confirm):
                    hashed_password = generate_password_hash(new_password, "sha256")
                    if (User.change_password_from_email(email=email, hashed_password=hashed_password)):
                        flash("Şifre başarıyla değiştirildi, lütfen giriş yapınız.")
                        if (current_user.is_authenticated):
                            logout_user()
                        return redirect(url_for("auth.log_in"))
                    else:
                        flash("Şifre değiştirilemedi.")
                        return redirect(url_for("main.home"))
            
        flash("Lütfen girdiğiniz bilgileri kontrol ediniz.")
        return redirect(url_for("main.home"))

@auth.route("/signup/", methods=["GET, POST"])
def sign_up():
    if (request.method == "POST"):
        check_modals()
        name = request.form.get("name")
        email = request.form.get("email")
        password1 = request.form.get("password")
        password2 = request.form.get("password2")
        signup(email, password1, password2, name)
    
    rm = Movie.get_random_movies(1)[0]
    return render_template("auth/signup.html", rm=rm)

@auth.route("/login/", methods=["GET", "POST"])
def log_in():
    if (request.method == "POST"):
        check_modals()
        email = request.form.get("email")
        password = request.form.get("password")
        login(email, password)
        return redirect(url_for("main.home"))
    
    rm = Movie.get_random_movies(1)[0]
    return render_template("auth/login.html", rm=rm)

def login(email, password):
    if (current_user.is_authenticated):
        return redirect(url_for("main.home"))
    
    else:
        if (User.isEmailInUse(email)):
            hashedPassword = User.get_hashedPassword_from_email(email)
            isPasswordMatch = check_password_hash(hashedPassword, password)

            if (isPasswordMatch):
                _id = User.get_id_from_email(email)
                name = User.get_name_from_email(email)
                hashedPassword = hashedPassword
                user = User(email=email, _id=_id, name=name, hashedPassword=hashedPassword)
                login_user(user, remember=True)                    
                flash("Başarı ile giriş yaptınız.")
                return redirect(url_for("main.home"))
                
            else:
                flash("Lütfen girdiğiniz şifreyi kontrol ediniz.")
                return redirect(url_for("auth.log_in"))
        else:
            flash("E-posta adresiniz bulunamamıştır, lütfen kayıt olun.")
            return redirect(url_for("auth.sign_up"))

def signup(email, password1, password2, name):
    if (current_user.is_authenticated):
        return redirect(url_for("main.home"))
    
    else:
        if (User.isEmailInUse(email)):
            flash("Girdiğiniz e-posta bir hesaba bağlı, lütfen giriş yapınız.")
            return redirect(url_for("auth.log_in"))
            
        else:
            if (password1 == password2):
                hashedPassword = generate_password_hash(password1, "sha256")

                if (User.addNewUser(name=name, email=email, hashed_password=hashedPassword)):
                    _id = User.get_id_from_email(email)
                    user = User(email=email, name=name, hashedPassword=hashedPassword, _id=_id)
                    user._id = User.get_id_from_email(email)
                    login_user(user, remember=True)
                    flash("Başarı ile üye oldunuz.")
                    return redirect(url_for("main.home"))
        return redirect(url_for("main.home"))

@auth.route("/logout/")
@login_required
def logout():
    logout_user()
    flash("Başarı ile çıkış yaptınız")
    return redirect(url_for("main.home"))
