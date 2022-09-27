from flask import Blueprint, request, jsonify
from app.models import db, Cart
from ..forms.cart_form import CartForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

cart_routes = Blueprint("carts", __name__, url_prefix="/carts")

#Create New Cart
@cart_routes.route('/', methods=['POST'])
@login_required
def create_cart():
    form = CartForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_cart = Cart(
                        productId=form.productId.data,
                        userId=form.userId.data,
                        quantity=form.quantity.data,
                        total=form.total.data,
                        )
        db.session.add(new_cart)
        db.session.commit()
        return jsonify(new_cart.to_dict()), 200
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

