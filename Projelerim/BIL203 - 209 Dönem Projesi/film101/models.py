from werkzeug.local import LocalProxy
from flask_pymongo import PyMongo, ObjectId
from flask_login import UserMixin
from flask import current_app, g, abort
from bson.son import SON
import re
from datetime import datetime

def getDB():
    db = getattr(g, "_database", None)

    if (db is None):
        db = g._database = PyMongo(current_app).db

    return db

try:
    db = LocalProxy(getDB)
except Exception:
    abort(500)

class User(UserMixin):
    def __init__(self, email, hashedPassword, name, _id):
        self.email = email
        self.hashedPassword = hashedPassword
        self.name = name
        self._id = _id
    
    def getUserPassword(self) -> str:
        try:
            password = db.users.find_one({"email": self.email})["password"]
        except Exception:
            abort(500)
        return password
    
    def get_id(self) -> str:
        return self.email
    
    @staticmethod
    def get_info_from_id(user_id):
        try:
            user = db.users.find_one({"_id": ObjectId(user_id)})
        except Exception:
            abort(500)
        return user
    
    @staticmethod
    def update_info(user_id, field, new_value):
        try:
            db.users.update_one(
                {"_id": ObjectId(user_id)},
                {"$set": {field: new_value}}
            )
        except Exception:
            abort(500)
    
    @staticmethod
    def change_password_from_email(email, hashed_password):
        try:
            _filter = {"email": email}
            new_values = {"$set": {"password": hashed_password}}
            db.users.update_one(_filter, new_values)
            return 1
        except Exception:
            abort(500)
    
    @staticmethod
    def get_name_from_email(email) -> str:
        try:
            name = db.users.find_one({"email": email})["name"]
        except Exception:
            abort(500)
        return name
    
    @staticmethod
    def get_id_from_email(email) -> str:
        try:
            _id = db.users.find_one({"email": email})["_id"]
        except Exception:
            abort(500)
        return _id
    
    @staticmethod
    def get_hashedPassword_from_email(email) -> str:
        try:
            hashedPassword = db.users.find_one({"email": email})["password"]
        except Exception:
            abort(500)
        return hashedPassword
    
    @staticmethod
    def addNewUser(name, email, hashed_password):
        try:
            db.users.insert_one(
            {
                "name": name,
                "email": email,
                "password": hashed_password,
            })
        except Exception:
            abort(500)
        return User.isEmailInUse(email)

    @staticmethod
    def isEmailInUse(email) -> bool:
        try:
            response = db.users.find_one({"email": email})
        except Exception:
            abort(500)
        
        if (response is None):
            return False
        else:
            return True

class Movie:
    def __init__(self, _id):
        try:
            self.info = db.movies.find_one({"_id": ObjectId(_id)})
        except Exception:
            abort(500)

    @staticmethod
    def get_info_from_id(_id, string):
        if (string):
            try:
                movie_info = db.movies.find_one({"_id": ObjectId(_id)})
            except Exception:
                abort(500)
            if "." in string:
                args = string.split(".")
                for arg in args:
                    movie_info = movie_info[arg]
            else:
                movie_info = movie_info[string]
            return movie_info
        else:
            return False
    
    @staticmethod
    def get_random_movies_by_genre(movie_count, genre):
        m = []
        try:
            movies = db.movies.aggregate([
                {"$match": {"genres": {"$in": [re.compile(genre, re.IGNORECASE)]}}},
                {"$sample": {"size": movie_count}}
            ])
        except Exception:
            abort(500)
        for movie in movies:
            movie = Movie(movie["_id"])
            m.append(movie)
        if (not m):
            abort(404)
        return m

    @staticmethod
    def get_random_movies(movie_count):
        m = []
        try:
            movies = db.movies.aggregate([
                {"$match": {"poster": {"$exists": True}}},
                {"$sample": {"size": movie_count}}
            ])
        except Exception:
            abort(500)
        for movie in movies:
            movie = Movie(movie["_id"])
            m.append(movie)
        return m
    
    @staticmethod
    def search(text):
        m = []
        try:
            movies = db.movies.aggregate([
                {"$match": {"title": {"$regex": f"{text}", "$options": "i"}}},
                {"$sort": SON([("imdb.id", -1)])}
            ])
        except Exception:
            abort(500)
        for movie in movies:
            movie = Movie(movie["_id"])
            m.append(movie)
        return m

class Comment:
    def __init__(self, comment_id):
        try:
            self.info = db.comments.find_one({"_id": ObjectId(comment_id)})
        except Exception:
            abort(500)
    
    @staticmethod
    def delete_comment(comment_id):
        try:
            db.comments.delete_one({"_id": ObjectId(comment_id)})
        except Exception:
            abort(500)

    @staticmethod
    def add_comment(movie_id, name, email, text):
        try:
            db.comments.insert_one(
                {
                    "name": name,
                    "email": email,
                    "movie_id": ObjectId(movie_id),
                    "text": text,
                    "date": datetime.now(),
                }
            )
        except Exception:
            abort(500)
    
    @staticmethod
    def get_all_comments_from_movie_id(movie_id):
        c = []
        try:
            comments = db.comments.aggregate([
                {"$match": {"movie_id" : ObjectId(movie_id)}},
                {"$sort": SON([("date", -1)])}
            ])
        except Exception:
            abort(500)
        for comment in comments:
            comment = Comment(comment["_id"])
            c.append(comment)
        return c


