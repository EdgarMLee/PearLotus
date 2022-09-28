from flask import Blueprint, request, jsonify
from app.models import db, Purchase
from ..forms.purchase_form import PurchaseForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

purchase_routes = Blueprint("purchases", __name__, url_prefix="/purchases")

#Create New Purchase
@purchase_routes.route('/', methods=['POST'])
@login_required
def create_purchase():
    form = PurchaseForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_purchase = Purchase(
                        productId=form.productId.data,
                        userId=form.userId.data,
                        quantity=form.quantity.data,
                        total=form.total.data,
                        )
        db.session.add(new_purchase)
        db.session.commit()
        return jsonify(new_purchase.to_dict()), 200
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#Cancel Purchase
@purchase_routes.route('/<int:purchase_id>', methods=['DELETE'])
@login_required
def delete_purchase(purchase_id):
    delete_purchase = Purchase.query.filter(Purchase.id == purchase_id).first()
    if delete_purchase.userId == current_user.id:
        db.session.delete(delete_purchase)
        db.session.commit()
        return jsonify({
        "message": "Product successfully deleted",
        "status-code": 200
    }), 200
    else:
        return {"errors": "Unauthorized"} , 403
