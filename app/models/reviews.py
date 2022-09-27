from .db import db
from sqlalchemy import func


class Review(db.Model):
    __tablename__ = "reviews"
    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(255), nullable=False)

    created_at = db.Column("created_at", db.DateTime, default=func.now())
    updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())


    product = db.relationship("Product", back_populates='reviews')
    user = db.relationship('User', back_populates='reviews')

    def to_dict(self):
        return {
            "id": self.id,
            "productId": self.productId,
            "userId": self.userId,
            "user": self.user.to_dict(),
            "stars": self.stars,
            "description": self.description,
            "created_at": self.created_at,
        }
