from sqlalchemy import func
from .db import db

class Cart(db.Model):
  __tablename__ = "carts"

  id = db.Column("id", db.Integer, primary_key=True)
  quantity = db.Column("quantity", db.Integer, nullable=False)
  description = db.Column("description", db.String, nullable=False)

  created_at = db.Column("created_at", db.DateTime, default=func.now())
  updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

  product = db.relationship("Product", back_populates='reviews')
  user = db.relationship("User", back_populates="reviews")
  purchase = db.relationship("Purchase", back_populates="reviews")

  def to_dict(self):
    return {
      "id": self.id,
      "quantity": self.quantity,
      "description": self.description,
      "created_at": self.created_at,
      "updated_at": self.updated_at
    }
