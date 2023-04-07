from flask import Blueprint, request, jsonify
from app.models import db, Review, Product
from ..forms.review_form import ReviewForm
from flask_login import current_user, login_required
from .auth_routes import validation_errors_to_error_messages

review_routes = Blueprint("reviews", __name__, url_prefix="/reviews")

#Get all Reviews
@review_routes.route('/')
def all_reviews():
    reviews = Review.query.all()
    review_detail = []
    for review in reviews:
        per_review = review.to_dict()
        product = Product.query.get(review.productId)
        per_review["product"] = product.to_dict()["name"]
        review_detail.append(per_review)
    return {"reviews": (review_detail)}

#Get Review by ID
@review_routes.route('/<int:id>')
def get_single(id):
    review = Review.query.get(id)
    return review.to_dict()

# Get Reviews by current user
@review_routes.route('/current')
@login_required
def get_current():
    reviews = Review.query.filter(Review.userId == current_user.id).all()
    review_detail = []
    for review in reviews:
        per_review = review.to_dict()
        product = Product.query.get(review.productId)
        per_review["product"] = product.to_dict()["name"]
        review_detail.append(per_review)
    return {"reviews": (review_detail)}

#Create Review
@review_routes.route('', methods=['POST'])
@login_required
def create_review():
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_review = Review(
                        productId=form.productId.data,
                        userId=current_user.id,
                        stars=form.stars.data,
                        description=form.description.data,
                        )
        db.session.add(new_review)
        db.session.commit()
        return jsonify(new_review.to_dict()), 200
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#Update Review
@review_routes.route('/<int:id>', methods=['PUT'])
@login_required
def update_review(id):
    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        review = Review.query.get(id)
        if review.userId == current_user.id:
            review.description = form.description.data
            review.stars = form.stars.data
            db.session.commit()
            return jsonify(review.to_dict()), 200
    else:
        return {'errors': 'Unauthorized'}, 403

#Delete Review
@review_routes.route('/<int:id>', methods=['DELETE'])
@login_required
def delete_review(id):
    delete_review = Review.query.filter(Review.id == id).first()
    if delete_review.userId == current_user.id:
        db.session.delete(delete_review)
        db.session.commit()
        return jsonify({
        "message": "Product successfully deleted",
        "status-code": 200
    }), 200
    else:
        return {"errors": "Unauthorized"} , 403
