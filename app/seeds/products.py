from app.models import db, Product

def seed_products():
  products=[
    Product(
      owner_id=1, name="Peptide Pro Firming Moisturizer", category="worry free", price=43, description='Transform your skin with our action-packed, luxurious and lighweight next-generation wrinkle cream.'
    ),
    Product(
      owner_id=1, name="Glass Skin Refining Serum", category="worry free", price=39, description='Achieve your healthiest, smoothest, clearest and most luminous skin yet.'
    ),
    Product(
      owner_id=1, name="Glass Skin Discovery Kit", category="worry free", price=39  , description='Your definitive Glass Skin routine – in four easy steps'
    ),
    Product(
      owner_id=1, name="Ginger Melt Oil Cleanser", category="worry free", price=32, description='A modern oil cleanser that melts and removes all with zero residue, zero breakouts.'
    ),
    Product(
      owner_id=2, name="Power Calm Hydrating Gel Cleanser", category="worry free", price=28, description="The Power Calm cleanser is uniquely formulated to respect the skin's natural ecosystem while cleansing deeply and thoroughly. The result? Pure, clean skin that's hydrated and deeply calmed."
    ),
    Product(
      owner_id=2, name="Wild Dew Treatment Essence", category="worry free", price=39, description='Think of our Wild Dew Treatment Essence as a perfect skincare addition for those seeking just “a bit more” for their daily routine.'
    ),
    Product(
      owner_id=2, name="Matcha Pudding Antioxidant Cream", category="worry free", price=40, description="This cream addresses real life head-on. If you've ever wondered why you might be seeing premature and rapid signs of aging, you're not alone. Our skin bears increasing stress from heightened pollution, fast-paced stressful lives, excess sun exposure and lack of sleep leading to more free radical damage."
    ),
    Product(
      owner_id=2, name="Power Cocktail Lactic Acid Repair Serum", category="worry free", price=49, description="10 percent lactic acid and 12 natural extracts actively resurface and repair"
    ),
    Product(
      owner_id=3, name="Snail Rescue Purifying Cleanser", category="pear slices", price=14.99, description="Deep clean, refresh, and purify skin with snail mucin and pine bark extract."
    ),
    Product(
      owner_id=3, name="Snail Rescue Intensive Serum", category="pear slices", price=17.99, description="Concentrated snail mucin, cica, and pine bark in a deep-absorbing formula."
    ),
    Product(
      owner_id=3, name="Snail Rescue All-In-One Deep Moisture Cream", category="pear slices", price=16.99, description="Snail mucin, squalane, and cica rescue dry, dull skin. Dry, dull, dehydrated skin becomes supple, soft, and deeply hydrated."
    ),
    Product(
      owner_id=3, name="Snail Rescue Oil Free Moisturizer", category="pear slices", price=16.99, description="Quench thirsty skin and achieve a clear, shine-free glow. This weightless moisturizer helps quench thirsty skin, zap zits, and minimize shine thanks to 95 percent snail mucin and cica."
    ),
    Product(
      owner_id=4, name="Snail Rescue Blemish Busting Toner", category="pear slices", price=13.99, description="Clear pores & zap zits fast. This fast-absorbing toner is your fast track to hydrated, blemish-free skin and an even glow with 95 percent snail mucin and cica."
    ),
    Product(
      owner_id=4, name="Snail Rescue Intensive Wash-Off Mask", category="pear slices", price=16.99, description="Targets blemishes, dark spots, pores and dullness - fast"
    ),
    Product(
      owner_id=4, name="Snail Rescue Trio", category="pear slices", price=47, description="Featuring a blend of two superstar ingredients, Snail Mucin and Cica, the Snail Rescue trio does it all: hydrates, exfoliates, fights blemishes, targets dark spots — all without clogging pores."
    ),
    Product(
      owner_id=4, name="Redness Relief Soothing Cleanser", category="pear slices", price=16.99, description="Deep cleans sensitive skin without stripping or causing irritation."
    ),
    Product(
      owner_id=5, name="Glass Skin Discovery Kit", category="skincare kits", price=39, description="Your definitive Glass Skin routine – in four easy steps"
    ),
    Product(
      owner_id=5, name="Original Glow Sheet Mask Set", category="skincare kits", price=79, description="Well rested, happy, and ultra hydrated skin in the palm of your hands"
    ),
    Product(
      owner_id=5, name="Lagom Mini Travel Kit", category="skincare kits", price=29, description="Give the gift of perfectly hydrated skin. Featuring the bestsellers from Lagom's line-up of skincare basics, this kit is too good to resist."
    ),
    Product(
      owner_id=5, name="Glass Skin Routine Kit", category="skincare kits", price=175, description="An easy routine to help you achieve the glass skin of your dreams. Glass skin is healthy, hydrated skin that’s calm, plumped, and free of inflammation, skin that looks poreless, luminous, and translucent."
    ),
    Product(
      owner_id=6, name="Korean Skincare Regimen: Oily / Acne-Prone Skin", category="skincare kits", price=296, description="This routine was hand-selected by our estheticians keeping in mind all the many struggles that come with having oily skin. These products are star products on their own, but were selected as they also work very well together. Meet your ultimate Korean routine kit for oily or acne-prone skin!"
    ),
    Product(
      owner_id=6, name="Korean Skincare Regimen: Combination Skin", category="skincare kits", price=324, description="Manage a variety of skincare issues from acne to dry flakes to shine."
    ),
    Product(
      owner_id=6, name="Korean Skincare Regimen: Dry Skin", category="skincare kits", price=320, description="This skincare regimen is appropriate for those who lack sufficient sebum production and generally also lack hydration because dry, brittle skin barriers often lead to a whole lot of moisture leaving the skin."
    ),
    Product(
      owner_id=6, name="Korean Skincare Regimen: Normal Skin", category="skincare kits", price=340, description="This kit is focused on giving your skin all the comprehensive care it needs to stay radiant, hydrated, and firmed up. Even if you have normal skin, without proper care, normal skin also experiences breakouts, accelerated signs of aging, and irritation."
    ),
    Product(
      owner_id=7, name="Acne Spot Dots - 60 Count", category="bestsellers", price=8.99, description="Help blemishes disappear quickly and effectively with our #1 bestselling blemish solution!*"
    ),
    Product(
      owner_id=7, name="Deep Blemish Microdarts", category="bestsellers", price=8.99, description="Microdart patches for emerging and underground blemishes. Fast-acting Microdart patches help rapidly diminish and calm zits."
    ),
    Product(
      owner_id=7, name="Dark Spot Microdarts", category="bestsellers", price=8.99, description="Microdart patches for dark spots and hyperpigmentation. Fast-acting Microdart patches help rapidly improve the appearance of discolored spots."
    ),
    Product(
      owner_id=7, name="Transparen-C Pro Spot Treatment", category="bestsellers", price=43, description="This powerful 20% Vitamin C spot treatment leaves dark spots, hyperpigmentation and scarring looking brighter, more even-toned and more transparent. Our professional-grade formula sinks deep into skin for dramatic, visible results."
    ),
    Product(
      owner_id=8, name="Ginger Melt Oil Cleanser", category="bestsellers", price=32, description="A modern oil cleanser that melts and removes all with zero residue, zero breakouts. Melt and remove all makeup, SPF, excess oil and impurities – within seconds. Oil cleansing can be accompanied by leftover-mascara, breakouts or a waxy residue."
    ),
    Product(
      owner_id=8, name="Power Calm Hydrating Gel Cleanser", category="bestsellers", price=28, description="The Power Calm cleanser is uniquely formulated to respect the skin's natural ecosystem while cleansing deeply and thoroughly. The result? Pure, clean skin that's hydrated and deeply calmed."
    ),
    Product(
      owner_id=8, name="Wild Dew Treatment Essence", category="bestsellers", price=39, description="An essence may just be the missing step in your routine. Both potent and hydrating, essences not only help fight breakouts, improve skin’s radiance and impart long-lasting hydration, but they are also formulated to sink deep and fast into skin."
    ),
    Product(
      owner_id=8, name="Glass Skin Refining Serum", category="bestsellers", price=39, description="Glassy, smooth, luminous, translucent-looking skin is achieved when skin is well hydrated and without inflammation and free radical damage. A revolutionary cocktail of peach extract, niacinamide, East Asian mountain yam, madecassoside, peptides, and hyaluronic acid help to visibly hydrate, calm, brighten and firm skin. Crystal-clear glass skin is yours."
    ),
    Product(
      owner_id=9, name="Snail Rescue Intensive Wash-Off Mask", category="best of kbeauty", price=16.99, description="Targets blemishes, dark spots, pores and dullness - fast. Jelly isn't just for your toast. Our unique 'snail jelly' mask feels instantly refreshing and calming as it's applied onto skin. This intensive treatment clears skin and targets dark spots, blemishes, pores, and dullness."
    ),
    Product(
      owner_id=9, name="Glass Skin Refining Serum", category="best of kbeauty", price=39, description="The Power Calm cleanser is uniquely formulated to respect the skin's natural ecosystem while cleansing deeply and thoroughly. The result? Pure, clean skin that's hydrated and deeply calmed."
    ),
    Product(
      owner_id=9, name="Super Reboot Resurfacing Mask", category="best of kbeauty", price=42, description="Gently exfoliates, resurfaces and retexturizes skin. This is a pro-level wash-off mask that effectively and gently exfoliates, resurfaces and retexturizes skin. Consider this a unique deep-cleansing, purifying, and resurfacing facial where dead skin cells are unglued, impurities deep within pores are 'de-gunked' and fresh skin is revealed."
    ),
    Product(
      owner_id=9, name="Transparen-C Pro Spot Treatment", category="best of kbeauty", price=43, description="This powerful 20% Vitamin C spot treatment leaves dark spots, hyperpigmentation and scarring looking brighter, more even-toned and more transparent. Our professional-grade formula sinks deep into skin for dramatic, visible results."
    ),
    Product(
      owner_id=10, name="Glass Skin Water-Gel Moisturizer", category="best of kbeauty", price=40, description="The perfect end to your skincare routine, our Glass Skin Water-Gel Moisturizer provides instant and long-lasting hydration for a Glass Skin glow. This breakthrough formula delivers a proprietary vegan prebiotic and probiotic complex that strengthens your skin’s unique microbiome – the environment in which your skin functions – to strengthen skin and curb breakouts. "
    ),
    Product(
      owner_id=10, name="Lazy Day All-In-One Moisture Pads", category="best of kbeauty", price=39, description="Perfect for lazy – or super busy – days. We’ve all been there: already in bed and too tired to get up or heading straight from the gym to a night out. Because skincare doesn’t have to be all or nothing, here’s a beauty hack you can use in place of almost every step in your daily routine."
    ),
    Product(
      owner_id=10, name="Lazy Day All-In-One Moisture Pads 6-ct Sample Pack", category="best of kbeauty", price=5, description="The perfect trial sized answer to lazy days. We've all been there: already in bed and too tired to get up or heading straight from the gym to a night out. Because skincare doesn't have to be all or nothing, here's a beauty hack you can use in place of almost every step in your daily routine."
    ),
    Product(
      owner_id=10, name="Raw Sauce", category="best of kbeauty", price=43, description="Raw Sauce is a gentle toner, emulsion and essence in one that intensively hydrates and nourishes the skin. What makes Raw Sauce special is that it is made with 79% maple tree sap, skin-nourishing fructan powder (eco-cert certified), and Asian herbal and fruit extracts to achieve the appearance of more hydrated and dewier skin. Perfect for all skin types."
    ),
  ]
  for product in products:
    db.session.add(product)
  db.session.commit()

def undo_products():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
