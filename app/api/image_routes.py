from flask import Blueprint, request, jsonify
from app.models import db, Image, Product
from ..forms.image_form import ImageForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

image_routes = Blueprint("images", __name__, url_prefix="/images")

# Add Image
@image_routes.route("/", methods=["POST"])
@login_required
def add_image():
  form = ImageForm()
  form['csrf_token'].data = request.cookies['csrf_token']
  if form.validate_on_submit():
    new_image = Image(
      userId = form.userId.data,
      productId = form.productId.data,
      url = form.url.data
    )
    db.session.add(new_image)
    db.session.commit()
    return jsonify(new_image.to_dict()), 200
  else:
    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

# Get Image based on Product
@image_routes.route("")
def get_image():
  images = Image.query.filter(Image.productId == Product.id).all()
  return { "images": [image.to_dict() for image in images] }

# Get Image by User
@image_routes.route("")
@login_required
def get_imageUser():
  images = Image.query.filter(Image.productId == current_user.id).all()
  return { "images": [image.to_dict() for image in images] }
