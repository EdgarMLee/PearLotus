from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password')
    keshi = User(
        username='keshi', email='keshi@aa.io', password='password')
    dpr = User(
        username='DPR Live', email='dprl@aa.io', password='password')
    jay = User(
        username='Jay Park', email='jaypk@aa.io', password='password')
    jack = User(
        username='Jackson Wang', email='jackw@aa.io', password='password')
    jimin = User(
        username='Jimin', email='jimin@aa.io', password='password')
    jung = User(
        username='Jungkookie', email='jungk@aa.io', password='password')
    jeon = User(
        username='Jeon Somi', email='jeons@aa.io', password='password')
    eric = User(
        username='Eric Nam', email='ericn@aa.io', password='password')
    dahyun = User(
        username='Dahyun', email='dahyun@aa.io', password='password')
    lisa = User(
        username='Lisa', email='lisa@aa.io', password='password')
    db.session.add(demo)
    db.session.add(keshi)
    db.session.add(dpr)
    db.session.add(jay)
    db.session.add(jack)
    db.session.add(jimin)
    db.session.add(jung)
    db.session.add(jeon)
    db.session.add(eric)
    db.session.add(dahyun)
    db.session.add(lisa)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
