from flask_pymongo import PyMongo

mongo = PyMongo()

class Recipe:
    @staticmethod
    def get_all_recipes():
        return list(mongo.db.recipes.find())

    @staticmethod
    def add_recipe(data):
        mongo.db.recipes.insert_one(data)
