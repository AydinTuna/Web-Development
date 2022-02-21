from flask import Flask
from flask_cors import CORS
from flask_login import LoginManager

def createApp():
    STATIC_FOLDER = "UI/static"
    TEMPLATE_FOLDER = "UI/templates"

    app = Flask(__name__, static_folder=STATIC_FOLDER, template_folder=TEMPLATE_FOLDER)

    CORS(app)

    from .auth import auth
    from .views import user, movie, main, error

    app.register_blueprint(auth, url_prefix="/")
    app.register_blueprint(user, url_prefix="/user")
    app.register_blueprint(movie, url_prefix="/movie")
    app.register_blueprint(error)
    app.register_blueprint(main, url_prefix="/")

    login_manager = LoginManager()
    login_manager.login_view = "auth.log_in"
    login_manager.init_app(app)

    from .models import User, db

    @login_manager.user_loader
    def load_user(email):
        u = db.users.find_one({"email": email})
        if not u:
            return None
        return User(email=u['email'], _id=u['_id'], name=u['name'], hashedPassword=u['password'])
    
    @app.template_test("none")
    def is_none(obj):
        return obj is None

    return app