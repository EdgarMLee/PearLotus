from flask import Blueprint, request, jsonify
from app.models import db, Product, Category, Image
from ..forms.product_form import ProductForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

product_routes = Blueprint("products", __name__, url_prefix="/products")

# Get all Products
@product_routes.route("")
def all_products():
    products = Product.query.all()
    productarr = []
    if products is not None:
        for product in products:
            productId = product.to_dict()["id"]
            image = db.session.query(Image).filter(Image.productId == productId).first()
            # print('!!!!!!!!!!!!!!', image.to_dict())
            product = product.to_dict()
            if image:
                product['image'] = image.to_dict()
            productarr.append(product)
    return {"products": productarr}

# Get Product by ID
@product_routes.route("/<int:id>")
def get_product(id):
    product = Product.query.get(id)
    productarr = []
    if product is not None:
        productId = product.to_dict()["id"]
        image = db.session.query(Image).filter(Image.productId == productId).first()
        # image = db.session.query(Image).filter(Image.productId == productId).[1]
        # ^ Input that once you added seeder data to image for 2nd image
        product = product.to_dict()
        if image:
            product["image"] = image.to_dict()
        productarr.append(product)
    return product

# Create Product
@product_routes.route("/", methods=["POST"])
@login_required
def create_product():
    form = ProductForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    categories = Category.query.all()
    form.category.choices=[(category.to_category(), category.to_categoryname() )for category in categories]
    if form.validate_on_submit():
        new_product = Product(
            owner_id=current_user.id,
            name=form.name.data,
            category=form.category.data,
            price=form.price.data,
            shortdescript=form.shortdescript.data,
            description=form.description.data,
        )
        db.session.add(new_product)
        db.session.commit()
        return jsonify(new_product.to_dict()), 200
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Edit Product
@product_routes.route("/<int:product_id>", methods=["PUT"])
@login_required
def edit_product(product_id):
    form = ProductForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    categories = Category.query.all()
    form.category.choices=[(category.to_category(), category.to_categoryname())for category in categories]
    if form.validate_on_submit():
        product = Product.query.get(product_id)
        if product.owner_id == current_user.id:
            product.name = form.name.data
            product.category = form.category.data
            product.price = form.price.data
            product.shortdescript = form.shortdescript.data
            product.description = form.description.data

            db.session.commit()
            return jsonify(product.to_dict()), 200
        else:
            return {"errors": "Unauthorized"}, 401
    else:
        return {"errors": validation_errors_to_error_messages(form.errors)}, 401


# Delete Product
@product_routes.route("/<int:product_id>", methods=["DELETE"])
@login_required
def delete_product(product_id):
    product = Product.query.filter(Product.id == product_id).first()
    if product.owner_id == current_user.id:
        db.session.delete(product)
        db.session.commit()
        return (
            jsonify({"message": "Product successfully deleted", "status-code": 200}),
            200,
        )
    else:
        return {"errors": "Unauthorized"}, 401
