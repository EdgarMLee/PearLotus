from app.models import db, Review

def seed_reviews():
  reviews=[
    Review(
      userId=10, productId=1, stars=5, description="Such a good product I had to buy it TWICE!!"
    ),
    Review(
      userId=10, productId=2, stars=4, description="Me likey likey! Makes my skin sparkle like OOH-AHH!!"
    ),
    Review(
      userId=9, productId=3, stars=5, description="Makes my skin so smooth I wouldn't want it any other way honestly!"
    ),
    Review(
      userId=9, productId=4, stars=4, description="People ask me how I'm doing and I just tell them I'm doing great because of this product!"
    ),
    Review(
      userId=8, productId=5, stars=4, description="After using this product it makes me feel XOXO ^^"
    ),
    Review(
      userId=8, productId=6, stars=5, description="Such a good product for my skin, what are you waiting for? :)"
    ),
    Review(
      userId=7, productId=7, stars=5, description="This product is so amazing it makes my skin smooth like butter!"
    ),
    Review(
      userId=7, productId=8, stars=3, description="Not too sure about this product, I'd light this one up with a dynamite"
    ),
    Review(
      userId=6, productId=9, stars=4, description="This product is pretty dope, it makes me feel at paradise :)"
    ),
    Review(
      userId=6, productId=10, stars=4, description="This product is pretty dope, it makes me feel at paradise :)"
    ),
    Review(
      userId=5, productId=11, stars=5, description="Definitely would recommend this product again, blows my mind how amazing it is"
    ),
    Review(
      userId=5, productId=12, stars=4, description="100 ways of using skincare products, but this one makes me say pretty please :)"
    ),
    Review(
      userId=4, productId=13, stars=5, description="I need to know what they put in these skincare products, makes me feel like Aquaman"
    ),
    Review(
      userId=4, productId=14, stars=4, description="Skin feels so smooth, all I wanna do is go all the way up with IU"
    ),
    Review(
      userId=3, productId=15, stars=5, description="Pretty good, gives me jam and butterfly vibes when applying"
    ),
    Review(
      userId=3, productId=16, stars=4, description="I don't know about yall, but I'm keeping all these products to myself. DPR we gang gang"
    ),
    Review(
      userId=2, productId=17, stars=5, description="This may be 2 soon but I feel like this product makes me feel xoxosos when I use it :)"
    ),
    Review(
      userId=2, productId=18, stars=4, description="Not bad, using this on my good days and feel like an angel in heaven again"
    ),
    Review(
      userId=1, productId=19, stars=4, description="I like it! Makes my skin smooth and gleaming!"
    ),
    Review(
      userId=1, productId=20, stars=5, description="This has been so helpful for my friends that has been struggling to find a good product!"
    ),
    Review(
      userId=11, productId=21, stars=5, description="Pretty good product! Makes me go boombayah!!"
    ),
    Review(
      userId=11, productId=22, stars=4, description="Skin looking so smooth and radiant makes wanna scream ice cream"
    ),
    Review(
      userId=2, productId=23, stars=2, description="Didn't like this one, made me look like a drunk skeleton"
    ),
    Review(
      userId=2, productId=24, stars=3, description="Not bad, but definitely a bit pricy for what they have!"
    ),
    Review(
      userId=3, productId=25, stars=5, description="Very good especially for a 60 count. Can finally have cheese & wine without worrying about acne :)"
    ),
    Review(
      userId=3, productId=26, stars=2, description="Did not like this one as much, couldve been better."
    ),
    Review(
      userId=4, productId=27, stars=5, description="I am definitely gona stay Sexy 4 Eva with this product!"
    ),
    Review(
      userId=4, productId=28, stars=3, description="This one was okay, might be my last time buying this product tho, kinda dank."
    ),
    Review(
      userId=5, productId=29, stars=5, description="This oil cleanser was the reason I can look so good in Dawn of us :)"
    ),
    Review(
      userId=5, productId=30, stars=4, description="Hydrating gel cleanser was pretty smooth and clean, can feel the dopamine from using it."
    ),
    Review(
      userId=6, productId=31, stars=5, description="This product is why I can look so amazing in Life Goes On, go check it out :)"
    ),
    Review(
      userId=6, productId=32, stars=4, description="Using this serum was definitely NOT a bad decision!"
    ),
    Review(
      userId=7, productId=33, stars=5, description="This wash off mask makes both the left and right side of my face feel amazing!"
    ),
    Review(
      userId=7, productId=34, stars=4, description="Such a good texture and sensation on my skin...*MIC DROP*"
    ),
    Review(
      userId=8, productId=35, stars=5, description="This mask made my skin gleaming and smooth! What are you waiting for?"
    ),
    Review(
      userId=8, productId=36, stars=2, description="Maybe I got used to it, but I don't like this product anymore...Doesn't feel the same on my skin :("
    ),
    Review(
      userId=9, productId=37, stars=5, description="This moisturizer was so good, it made me feel sexy"
    ),
    Review(
      userId=9, productId=38, stars=2, description="Not sure about this product, everything sucks..."
    ),
    Review(
      userId=10, productId=39, stars=5, description="These are so fancy I love it! Definitely made me feel special!! :)"
    ),
    Review(
      userId=10, productId=40, stars=2, description="After using this product I have to celebrate because of how amazing this toner is!"
    ),
    Review(
      userId=4, productId=1, stars=5, description="Perfect for when I make the MV for SUMMERIDE"
    ),
    Review(
      userId=5, productId=1, stars=5, description="100 different products, but this one makes me say pretty please:)"
    ),
    Review(
      userId=7, productId=2, stars=5, description="This glass skin serum is fire, pretty dope!:)"
    ),
    Review(
      userId=3, productId=2, stars=5, description="This is so good, DPR we gang gang!"
    ),
    Review(
      userId=11, productId=3, stars=5, description="This glass kit making me feel like pink venom:)"
    ),
    Review(
      userId=8, productId=3, stars=3, description="This glass skin kit was okay-ish"
    ),
    Review(
      userId=2, productId=4, stars=3, description="Not bad, but I don't like how the ginger smell feels on my skin tbh"
    ),
    Review(
      userId=4, productId=4, stars=5, description="This oil cleanser is gona make me stay Sexy4Eva:)"
    ),
  ]

  for review in reviews:
    db.session.add(review)
  db.session.commit()

def undo_reviews():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
