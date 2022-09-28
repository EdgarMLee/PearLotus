from sqlalchemy import func
from .db import db

class Purchase(db.Model):
  __tablename__ = "purchases"

  id = db.Column("id", db.Integer, primary_key=True)
  quantity = db.Column("quantity", db.Integer, nullable=False)
  total = db.Column("total", db.Float, nullable=False)
  userId = db.Column("userId", db.Integer, db.ForeignKey("users.id"))
  productId = db.Column("productId", db.Integer, db.ForeignKey("products.id"))

  created_at = db.Column("created_at", db.DateTime, default=func.now())
  updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

  product = db.relationship("Product", back_populates='purchases')
  user = db.relationship("User", back_populates="purchases")
  cart = db.relationship("Cart", back_populates="purchases")

  def to_dict(self):
    return {
      "id": self.id,
      "quantity": self.quantity,
      "total": self.total,
      "userId": self.userId,
      "productId": self.productId,
      "created_at": self.created_at,
      "updated_at": self.updated_at
    }
