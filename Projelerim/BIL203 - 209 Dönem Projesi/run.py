from film101.__init__ import createApp
import configparser

config = configparser.ConfigParser()
config.read("configs.ini")

if __name__ == "__main__":
    app = createApp()

    app.config["DEBUG"] = config["APP"]["DEBUG"]
    app.config["MONGO_URI"] = config["DB"]["DB_URI"]
    app.config["SECRET_KEY"] = config["SECRET_KEY"]["SECRET_KEY"]

    app.run()