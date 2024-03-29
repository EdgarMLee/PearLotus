from app.models import db, Image

def seed_images():
  images=[
    Image( 
      userId=1, productId=1, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Peptide_Pro_Firming_Moisturizer_2.jpg?v=1661448384"
    ),
    Image(
      userId=1, productId=2, url="https://media.allure.com/photos/61254662c806bdb6be9d8bbe/1:1/.jpg"
    ),
    Image(
      userId=1, productId=3, url="https://media1.popsugar-assets.com/files/thumbor/A-_3Y7_iz24Nphpnqb2ecumFisw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/07/15/698/n/1922153/49c43b485f0f2491010297.52752343_/i/peach-lily-glass-skin-discovery-kit-review.jpg"
    ),
    Image(
      userId=1, productId=4, url="https://media.ulta.com/i/ulta/2592879?w=720&h=720&fmt=webp"
    ),
    Image(
      userId=2, productId=5, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Power_Calm_Hydrating_Gel_Cleanser.jpg"
    ),
    Image(
      userId=2, productId=6, url="https://cdn.shopify.com/s/files/1/0791/2083/products/Peach___Lily_Wild_Dew_Treatment_Essence_100mL_PNL116001_V2b_555117a6-d0c6-4999-bd76-be9b0b665410.jpg"
    ),
    Image(
      userId=2, productId=7, url="https://media.ulta.com/i/ulta/2532651?w=720&h=720&fmt=webp"
    ),
    Image(
      userId=2, productId=8, url="https://media.ulta.com/i/ulta/2589292?w=720&h=720&fmt=webp"
    ),
    Image(
      userId=3, productId=9, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_Cleanser_PDP_1000x1140_eefd2881-ef9b-496b-8c81-c2020e893ef1.jpg"
    ),
    Image(
      userId=3, productId=10, url="https://media.ulta.com/i/ulta/2597525?w=720&h=720&fmt=webp"
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
      userId=4, productId=16, url="https://cdn.shopify.com/s/files/1/0791/2083/products/RednessRelief_Cleanser_PDP_1000x1140_38b94206-0f4d-48f6-899e-13240c4c211d.jpg?v=1657635552"
    ),
    Image(
      userId=5, productId=17, url="https://media1.popsugar-assets.com/files/thumbor/A-_3Y7_iz24Nphpnqb2ecumFisw/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/07/15/698/n/1922153/49c43b485f0f2491010297.52752343_/i/peach-lily-glass-skin-discovery-kit-review.jpg"
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
      userId=6, productId=23, url="https://cdn.shopify.com/s/files/1/0071/4653/7026/products/PeachandLilyGlassSkinDiscoveryKit_4Pcs_800x.jpg"
    ),
    Image(
      userId=6, productId=24, url="https://cdn.shopify.com/s/files/1/0791/2083/products/KoreanSkincareRegimenNormalSkin.jpg"
    ),
    Image(
      userId=7, productId=25, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Acne_Spot_Dots_60ct_front.jpg?v=1666206954"
    ),
    Image(
      userId=7, productId=26, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Deep_Blemish_Microdarts_front.jpg"
    ),
    Image(
      userId=7, productId=27, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Dark_Spot_Microdarts_front.jpg"
    ),
    Image(
      userId=7, productId=28, url="https://media.ulta.com/i/ulta/2568436?w=720&h=720&fmt=webp"
    ),
    Image(
      userId=8, productId=29, url="https://media.ulta.com/i/ulta/2592879?w=720&h=720&fmt=webp"
    ),
    Image(
      userId=8, productId=30, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Power_Calm_Hydrating_Gel_Cleanser.jpg"
    ),
    Image(
      userId=8, productId=31, url="https://cdn.shopify.com/s/files/1/0791/2083/products/Peach___Lily_Wild_Dew_Treatment_Essence_100mL_PNL116001_V2b_555117a6-d0c6-4999-bd76-be9b0b665410.jpg"
    ),
    Image(
      userId=8, productId=32, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Glass_Skin_Refining_Serum_2.jpg"
    ),
    Image(
      userId=9, productId=33, url="https://cdn.shopify.com/s/files/1/0791/2083/products/SnailRescue_Mask_PDP_1000x1140_0892fa1e-cf6c-474b-b683-cb39fe5ebf9c.jpg"
    ),
    Image(
      userId=9, productId=34, url="https://media.allure.com/photos/61254662c806bdb6be9d8bbe/1:1/.jpg"
    ),
    Image(
      userId=9, productId=35, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Super_Reboot_Resurfacing_Mask.jpg"
    ),
    Image(
      userId=9, productId=36, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_Transparen-C_Pro_Spot_Treatment.jpg"
    ),
    Image(
      userId=10, productId=37, url="https://media.ulta.com/i/ulta/2572404?w=720&h=720&fmt=webp"
    ),
    Image(
      userId=10, productId=38, url="https://media.ulta.com/i/ulta/2532635?w=720&h=720&fmt=webp"
    ),
    Image(
      userId=10, productId=39, url="https://cdn.shopify.com/s/files/1/0791/2083/products/PDP_LazyDayAll-In_OneMoisturePadsSatchet.jpg"
    ),
    Image(
      userId=10, productId=40, url="https://cdn.shopify.com/s/files/1/0791/2083/products/May_Coop_Raw_Sauce_150mL_MAY116001_V1.jpg"
    )
  ]
  for image in images:
    db.session.add(image)
  db.session.commit()

def undo_images():
  db.session.execute('TRUNCATE businesses RESTART IDENTITY CASCADE;')
  db.session.commit()
