from sqlalchemy import func
from .db import db

class Review(db.Model):
    __tablename__ = "reviews"
    id = db.Column(db.Integer, primary_key=True)
    productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)
    userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    stars = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(500), nullable=False)

    created_at = db.Column("created_at", db.DateTime, default=func.now())
    updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

    product = db.relationship("Product", back_populates='reviews', foreign_keys=[productId])
    user = db.relationship('User', back_populates='reviews', foreign_keys=[userId])
    # purchase = db.relationship("Purchase", back_populates="reviews")

    def to_dict(self):
        return {
            "id": self.id,
            "productId": self.productId,
            "userId": self.userId,
            # "product": self.product,
            "user": self.user.to_dict(),
            "stars": self.stars,
            "description": self.description,
            "created_at": self.created_at,
        }
