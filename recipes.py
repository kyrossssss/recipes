from flask import Blueprint, request, jsonify
from recipe import Recipe

recipes_blueprint = Blueprint('recipes', __name__)

@recipes_blueprint.route('/api/recipes', methods=['GET'])
def get_recipes():
    recipes = Recipe.get_all_recipes()
    return jsonify(recipes)

@recipes_blueprint.route('/api/recipes', methods=['POST'])
def add_recipe():
    data = request.json
    Recipe.add_recipe(data)
    return jsonify({"message": "Recipe added successfully!"}), 201
