from sqlalchemy import func
from .db import db

class Image(db.Model):
  __tablename__ = "images"

  id = db.Column("id", db.Integer, primary_key=True)
  url = db.Column(db.String, nullable=False)
  userId = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  productId = db.Column(db.Integer, db.ForeignKey('products.id'), nullable=False)


  # created_at = db.Column("created_at", db.DateTime, default=func.now())
  # updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

  product = db.relationship("Product", back_populates='images', foreign_keys=[productId])
  user = db.relationship("User", back_populates="images", foreign_keys=[userId])
  # cart = db.relationship("Cart", back_populates="images")

  def to_dict(self):
    return {
      "id": self.id,
      "url": self.url,
      "userId": self.userId,
      "productId": self.productId
      # "created_at": self.created_at,
      # "updated_at": self.updated_at
    }
