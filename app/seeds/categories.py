from app.models import db, Category

def seed_categories():
  categories=[
    Category(name="Worry Free"),
    Category(name="Pear Slices"),
    Category(name="Skincare Kits"),
    Category(name="Bestsellers"),
    Category(name="Best of Kbeauty"),
  ]

  for category in categories:
    db.session.add(category)
  db.session.commit()

def undo_categories():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
