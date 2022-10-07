from app.models import db, User

# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo', email='demo@aa.io', password='password', profileimg="https://res.cloudinary.com/dv3qturtv/image/upload/v1665183325/defaulticon.png")
    keshi = User(
        username='keshi', email='keshi@aa.io', password='password', profileimg="https://sterling-sound.com/wp-content/uploads/keshi.jpg")
    dpr = User(
        username='DPR Live', email='dprl@aa.io', password='password', profileimg="https://koreajoongangdaily.joins.com/jmnet/koreajoongangdaily/_data/photo/2018/03/02213214.jpg")
    jay = User(
        username='Jay Park', email='jaypk@aa.io', password='password', profileimg="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=425,format=auto/sites/default/files/styles/768x768/public/d8/images/methode/2020/08/14/13784018-dcfd-11ea-b1d3-42d340dc91a3_image_hires_150817.jpeg")
    jack = User(
        username='Jackson Wang', email='jackw@aa.io', password='password', profileimg="https://i.mydramalist.com/0nYx4_5f.jpg")
    jimin = User(
        username='Jimin', email='jimin@aa.io', password='password', profileimg="https://www.musicmundial.com/en/wp-content/uploads/2022/09/BTS-Jimin-is-the-only-Korean-on-the-Best-Celebrity-Tattoos-list.-Find-out-its-meaning.jpg")
    jung = User(
        username='Jungkookie', email='jungk@aa.io', password='password', profileimg="https://assets.teenvogue.com/photos/628d0964d78695ef5da24f30/1:1/w_1186,h_1186,c_limit/GettyImages-1389408711.jpg")
    jeon = User(
        username='Jeon Somi', email='jeons@aa.io', password='password', profileimg="https://www.hellokpop.com/wp-content/uploads/2019/10/20191021_Law_of_the_Jungle_Jeon_Somi-e1571669742793.jpg")
    eric = User(
        username='Eric Nam', email='ericn@aa.io', password='password', profileimg="https://lastfm.freetls.fastly.net/i/u/770x0/b02bb88a98f1d5664b0ec819c43c55f6.jpg")
    dahyun = User(
        username='Dahyun', email='dahyun@aa.io', password='password', profileimg="https://i.pinimg.com/originals/37/cc/f7/37ccf7f097cb1d0ec28c6c3150dfff85.png")
    lisa = User(
        username='Lisa', email='lisa@aa.io', password='password', profileimg="https://hips.hearstapps.com/hmg-prod/images/mac-lisa-purple-1636479937.jpg")
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
