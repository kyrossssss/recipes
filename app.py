from flask import Flask
from flask_pymongo import PyMongo
from recipes import recipes_blueprint
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)

# Настройка подключения к MongoDB
app.config["MONGO_URI"] = os.getenv("MONGODB_URI")
mongo = PyMongo(app)

# Регистрация маршрутов
app.register_blueprint(recipes_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
