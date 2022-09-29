from sqlalchemy import func
from .db import db

class Image(db.Model):
  __tablename__ = "images"

  id = db.Column("id", db.Integer, primary_key=True)
  quantity = db.Column("quantity", db.Integer, nullable=False)
  total = db.Column("total", db.Float, nullable=False)

  created_at = db.Column("created_at", db.DateTime, default=func.now())
  updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

  product_id = db.Column("product_id", db.Integer, db.ForeignKey("products.id"))

  product = db.relationship("Product", back_populates='images')
  user = db.relationship("User", back_populates="images")
  cart = db.relationship("Cart", back_populates="images")

  def to_dict(self):
    return {
      "id": self.id,
      "quantity": self.quantity,
      "total": self.total,
      "created_at": self.created_at,
      "updated_at": self.updated_at
    }
