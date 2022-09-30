from sqlalchemy import func
from .db import db

class Product(db.Model):
  __tablename__ = "products"

  id = db.Column("id", db.Integer, primary_key=True)
  name = db.Column("name", db.String, nullable=False)
  category = db.Column("category", db.String, nullable=False)
  price = db.Column("price", db.Integer, nullable=False)
  description = db.Column("description", db.String, nullable=False)
  owner_id = db.Column("owner_id", db.Integer, db.ForeignKey("users.id"))

  created_at = db.Column("created_at", db.DateTime, default=func.now())
  updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())


  user = db.relationship('User', back_populates='product', foreign_keys=[owner_id])
  reviews = db.relationship("Review", back_populates="product", cascade="all, delete")
  images = db.relationship("Image", back_populates="product", cascade="all, delete")
  cart = db.relationship("Cart", back_populates="product", cascade="all, delete")
  purchases = db.relationship("Purchase", back_populates="product", cascade="all, delete")


  def to_dict(self):
    return {
      "id": self.id,
      "name": self.name,
      "category": self.category,
      "price": self.price,
      "description": self.description,
      "created_at": self.created_at,
      "updated_at": self.updated_at,
      "owner_id": self.owner_id,
      "review_ids": [review.id for review in self.reviews],
      "image_ids": [image.id for image in self.images],
      # "cart_ids": [cart.id for cart in self.cart],
      "avg_rating": (sum([review.stars for review in self.reviews]) / len(self.reviews)) if len(self.reviews) > 0 else 0
    }
