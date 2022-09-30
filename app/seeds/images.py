from app.models import db, Image

def seed_images():
  images=[
    Image(
      userId=1, productId=1, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Peptide_Pro_Firming_Moisturizer_alt03.jpg"
    ),
    Image(
      userId=1, productId=2, url="https://cdn.shopify.com/s/files/1/0791/2083/products/Peach___Lily_Glass_Skin_Refining_Serum_40mL_PNL117001_Texture_006_bottle_V1_f16e01d0-9906-411d-8df2-5caeaf1aa43f.jpg"
    ),
    Image(
      userId=1, productId=3, url="https://cdn.shopify.com/s/files/1/0791/2083/products/02-GlassSkinDiscoveryKit-imagez_ee565748-37c5-4fc3-b8f3-8fe0259d4ef7.jpg"
    ),
    Image(
      userId=1, productId=4, url="https://cdn.shopify.com/s/files/1/0791/2083/products/0208-peach-lily-product5578-resize.jpg"
    ),
    Image(
      userId=2, productId=5, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Power_Calm_Hydrating_Gel_Cleanser.jpg"
    ),
    Image(
      userId=2, productId=6, url="https://cdn.shopify.com/s/files/1/0791/2083/products/Peach___Lily_Wild_Dew_Treatment_Essence_100mL_PNL116001_V2b.jpg"
    ),
    Image(
      userId=2, productId=7, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Matcha_Pudding_Antioxidant_Cream.jpg"
    ),
    Image(
      userId=2, productId=8, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PowerCocktailPDP1.png"
    ),
    Image(
      userId=3, productId=9, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_Cleanser_PDP_1000x1140_eefd2881-ef9b-496b-8c81-c2020e893ef1.jpg"
    ),
    Image(
      userId=3, productId=10, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PeachandLily06-29-220835_1000x1140_3135be49-fbfa-443d-885a-275c6802502e.jpg"
    ),
    Image(
      userId=3, productId=11, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_Cream_PDP_1000x1140_a1c4533d-d58f-4f5d-9b9a-fe7ed5405b6a.jpg"
    ),
    Image(
      userId=3, productId=12, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_OilFreeMoisturizer_PDP_1000x1140_2fa97315-7466-481a-be72-b66397f734d5.jpg"
    ),
    Image(
      userId=4, productId=13, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_Toner_PDP_1000x1140_331de024-dcd8-4758-86d6-8dc62bb341c8.jpg"
    ),
    Image(
      userId=4, productId=14, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_Mask_PDP_1000x1140_0892fa1e-cf6c-474b-b683-cb39fe5ebf9c.jpg"
    ),
    Image(
      userId=4, productId=15, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_Trio_PDP_1000x1140_d0572c2e-aeee-44e8-a108-583a39843288.jpg"
    ),
    Image(
      userId=4, productId=16, url="https://cdn.shopify.com/s/files/1/0791/2083/products/RMSAnniversary20220027_1000x1140_3d5f6582-f5dd-4f4d-80c0-7386743e72ce.jpg"
    ),
    Image(
      userId=5, productId=17, url="https://cdn.shopify.com/s/files/1/0791/2083/products/02-GlassSkinDiscoveryKit-imagez_ee565748-37c5-4fc3-b8f3-8fe0259d4ef7.jpg"
    ),
    Image(
      userId=5, productId=18, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_OriginalGlowSheetMaskSetBox.jpg"
    ),
    Image(
      userId=5, productId=19, url="https://m.media-amazon.com/images/I/71GhzQMd9JL._SX466_.jpg"
    ),
    Image(
      userId=5, productId=20, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_GlassSkinRoutineKit.jpg"
    ),
    Image(
      userId=6, productId=21, url="https://i.pinimg.com/originals/1e/74/f1/1e74f1265cf71cfe3084183254c9ecaa.png"
    ),
    Image(
      userId=6, productId=22, url="https://cdn.shopify.com/s/files/1/0791/2083/products/02_Combination_Skin_kit.jpg"
    ),
    Image(
      userId=6, productId=23, url="https://cdn.shopify.com/s/files/1/0791/2083/products/KoreanSkincareRegimenDrySkin.jpg"
    ),
    Image(
      userId=6, productId=24, url="https://cdn.shopify.com/s/files/1/0791/2083/products/KoreanSkincareRegimenNormalSkin.jpg"
    ),
    Image(
      userId=7, productId=25, url="https://cdn.shopify.com/s/files/1/0791/2083/products/2_AcneSpotDot60Count_PDP_1140px.jpg"
    ),
    Image(
      userId=7, productId=26, url="https://cdn.shopify.com/s/files/1/0791/2083/products/0602-peach-lily0006_1140px_467d3a42-48d6-43cf-959e-b6d1cd91255b.jpg"
    ),
    Image(
      userId=7, productId=27, url="https://cdn.shopify.com/s/files/1/0791/2083/products/2567107_DarkSpotMicrodarts_Alt2.png"
    ),
    Image(
      userId=7, productId=28, url="https://cdn.shopify.com/s/files/1/0791/2083/products/Peach_Lily_3_TransparenC_PDP.jpg"
    ),
    Image(
      userId=8, productId=29, url="https://cdn.shopify.com/s/files/1/0791/2083/products/DoubleCleansingcheatsheet.jpg"
    ),
    Image(
      userId=8, productId=30, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Power_Calm_Hydrating_Gel_Cleanser.jpg"
    ),
    Image(
      userId=8, productId=31, url="https://cdn.shopify.com/s/files/1/0791/2083/products/Peach___Lily_Wild_Dew_Treatment_Essence_100mL_PNL116001_V2b.jpg"
    ),
    Image(
      userId=8, productId=32, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Glass_Skin_Refining_Serum_2.jpg"
    ),
    Image(
      userId=9, productId=33, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_Mask_PDP_1000x1140_0892fa1e-cf6c-474b-b683-cb39fe5ebf9c.jpg"
    ),
    Image(
      userId=9, productId=34, url="https://cdn.shopify.com/s/files/1/0791/2083/products/Peach___Lily_Glass_Skin_Refining_Serum_40mL_PNL117001_Texture_006_bottle_V1_f16e01d0-9906-411d-8df2-5caeaf1aa43f.jpg"
    ),
    Image(
      userId=9, productId=35, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Super_Reboot_Resurfacing_Mask.jpg"
    ),
    Image(
      userId=9, productId=36, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Transparen-C_Pro_Spot_Treatment.jpg"
    ),
    Image(
      userId=10, productId=37, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PL_GS_MS_HP_shiny.jpg"
    ),
    Image(
      userId=10, productId=38, url="https://cdn.shopify.com/s/files/1/0791/2083/products/LazyDayMoisturePads-resize.jpg"
    ),
    Image(
      userId=10, productId=39, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_LazyDayAll-In_OneMoisturePadsSatchet.jpg"
    ),
    Image(
      userId=10, productId=40, url="https://cdn.shopify.com/s/files/1/0791/2083/products/May_Coop_Raw_Sauce_150mL_MAY116001_V1_CLNT_1622b53b-102f-4cca-a32c-2e665e90da12.jpg"
    )
  ]
  for image in images:
    db.session.add(image)
  db.session.commit()

def undo_images():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
