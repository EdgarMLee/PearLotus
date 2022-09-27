from flask import Blueprint, request, jsonify
from app.models import db, Product
from ..forms.product_form import ProductForm
from datetime import time
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

product_routes = Blueprint("products", __name__, url_prefix="/products")

# Get all Products
@product_routes.route("/")
def all_products():
    products = Product.query.all()
    return {"products": [product.to_dict() for product in products]}

# Get Product by ID
@product_routes.route("/<int:id>")
def get_product(id):
    product = Product.query.get(id)
    return product.to_dict()

# Create Product
@product_routes.route("/", methods=["POST"])
@login_required
def create_product():
    form = ProductForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    if form.validate_on_submit():
        new_product = Product(
            owner_id=current_user.id,
            name=form.name.data,
            category=form.category.data,
            price=form.price.data,
            description=form.description.data,
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.to_dict()), 200
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 401

