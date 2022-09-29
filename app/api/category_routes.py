from flask import Blueprint, jsonify
from app.models import db, Product, Review, Category, User

category_routes = Blueprint("categories", __name__, url_prefix="/categories")

# GET ALL Categories
@category_routes.route("/")
def all_categories():
  categories = Category.query.all()
  category = [category.to_dict() for category in categories]
  return jsonify(category), 200

# @category_routes.route("/<category_title>")
# def category_selection(category_title):
