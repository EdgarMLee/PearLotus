from sqlalchemy import func
from .db import db

class Product(db.Model):
  __tablename__ = "products"

  id = db.Column("id", db.Integer, primary_key=True)
  name = db.Column("name", db.String, nullable=False)
  category = db.Column("category", db.String, nullable=False)
  price = db.Column("price", db.Integer, nullable=False)
  description = db.Column("description", db.String, nullable=False)

  created_at = db.Column("created_at", db.DateTime, default=func.now())
  updated_at = db.Column("updated_at", db.DateTime, default=func.now(), onupdate=func.now())

  owner_id = db.Column("owner_id", db.Integer, db.ForeignKey("users.id"))

  