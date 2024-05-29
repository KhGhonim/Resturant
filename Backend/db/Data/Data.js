const foodItems = [
  {
    id: "1",
    name: "Classic Burger",
    category: "Dinner",
    dishType: "Burger",
    city: "Ankara",
    Price: 321,
    imageLink:
      "https://www.seriouseats.com/thmb/e16lLOoVEix_JZTv7iNyAuWkPn8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2014__09__20140918-jamie-olivers-comfort-food-insanity-burger-david-loftus-f7d9042bdc2a468fbbd50b10d467dafd.jpg",
  },
  {
    id: "2",
    name: "Ribeye Steak",
    category: "Dinner",
    dishType: "Steak",
    city: "NYC",
    imageLink:
      "https://hips.hearstapps.com/hmg-prod/images/ribeye-steak-horizontal-1675097147.jpg?crop=1xw:0.84375xh;center,top",
    Price: 125,
  },
  {
    id: "3",
    name: "Golden Fried Chicken",
    category: "Dinner",
    dishType: "Golden Meat",
    city: "Dubai",
    Price: 368,
    imageLink:
      "https://img.freepik.com/premium-photo/fried-chicken-with-cheese-isolated-white_881307-353.jpg",
  },
  {
    id: "4",
    name: "Grilled Chicken Burger",
    category: "Lunch",
    dishType: "Burger",
    city: "NYC",
    Price: 987,
    imageLink:
      "https://img.taste.com.au/RmJcf6EW/taste/2017/12/spicy-smoky-bbq-chicken-burger-taste_1980x1320-133719-1.jpg",
  },
  {
    id: "5",
    name: "Filet Mignon",
    category: "Dinner",
    dishType: "Steak",
    city: "Ankara",
    Price: 788,
    imageLink:
      "https://www.allrecipes.com/thmb/OhLyxKb_DktnD5zCqkRnPSBD20o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-8539032-perfect-pan-seared-filet-mignon-VAT-hero-4x3-f2c6d83fe8214f99995e397336fd9267.jpg",
  },
  {
    id: "6",
    name: "Golden Crusted Lamb Chops",
    category: "Dinner",
    dishType: "Golden Meat",
    city: "Dubai",
    Price: 254,
    imageLink:
      "https://coleycooks.com/wp-content/uploads/2023/02/dijon-herb-crusted-rack-of-lamb-3.jpg",
  },
  {
    id: "7",
    name: "Avocado Toast",
    category: "Brunch",
    dishType: "Burger",
    city: "NYC",
    Price: 697,
    imageLink:
      "https://www.spendwithpennies.com/wp-content/uploads/2022/09/Avocado-Toast-SpendWithPennies-4.jpg",
  },
  {
    id: "8",
    name: "Porterhouse Steak",
    category: "Dinner",
    dishType: "Steak",
    city: "Ankara",
    Price: 148,
    imageLink:
      "https://assets.bonappetit.com/photos/57acf2bc53e63daf11a4dbcc/master/pass/slow-cooked-twice-fried-porterhouse-2.jpg",
  },
  {
    id: "9",
    name: "Golden BBQ Ribs",
    category: "Dinner",
    dishType: "Golden Meat",
    city: "Dubai",
    Price: 951,
    imageLink:
      "https://tradewindsorientalshop.co.uk/cdn/shop/articles/Lyles_Golden_Syrup_BBQ_Sticky_Ribs_img_2_1200x1104.jpg?v=1688984999",
  },
  {
    id: "10",
    name: "Shrimp Scampi",
    category: "Dinner",
    Price: 637,
    dishType: "Seafood",
    city: "NYC",
    imageLink:
      "https://recipes.net/wp-content/uploads/2021/09/shrimp-scampi-olive-garden-recipe-copycat-1024x683.jpg",
  },
  {
    id: "11",
    name: "Chicken Caesar Salad",
    category: "Lunch",
    Price: 279,
    dishType: "Salad",
    city: "Ankara",
    imageLink:
      "https://www.jessicagavin.com/wp-content/uploads/2022/06/chicken-caesar-salad-28-1200.jpg",
  },
  {
    id: "12",
    name: "Eggs Benedict",
    category: "Brunch",
    dishType: "Eggs",
    city: "Dubai",
    Price: 279,

    imageLink:
      "https://img.taste.com.au/T4dTNyNk/w720-h480-cfill-q80/taste/2016/11/eggs-benedict-94165-1.jpeg",
  },
  {
    id: "13",
    name: "Grilled Salmon",
    category: "Dinner",
    dishType: "Seafood",
    Price: 974,
    city: "NYC",
    imageLink:
      "https://www.eatingwell.com/thmb/brHFTvx40kZq844uGiitI4hWQKo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/grilled-salmon-and-vegetables-with-charred-lemon-vinaigrette-a4d5a04715bf427d86fdbadea6272679.jpg",
  },
  {
    id: "14",
    name: "Caprese Sandwich",
    category: "Lunch",
    dishType: "Sandwich",
    city: "Ankara",
    Price: 628,
    imageLink:
      "https://www.acouplecooks.com/wp-content/uploads/2022/07/Caprese-Sandwich-008.jpg",
  },
  {
    id: "15",
    name: "French Toast",
    category: "Brunch",
    dishType: "Bread",
    city: "Dubai",
    Price: 317,
    imageLink:
      "https://www.simplyrecipes.com/thmb/b48moNCTtaUYEc1Qyxhe9V66XKc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Simply-Recipes-French-Toast-Lead-Shot-3b-c3a68a576a9548f5bd43cce3d2d7f4b7.jpg",
  },
  {
    id: "16",
    name: "Lobster Tail",
    category: "Dinner",
    dishType: "Seafood",
    Price: 397,
    city: "NYC",
    imageLink:
      "https://www.kingsford.com/wp-content/uploads/2023/05/Grilled-Lobster-Tails-71_cc1_00000000_desktop2x.jpg",
  },
  {
    id: "17",
    name: "Vegetable Stir Fry",
    category: "Lunch",
    dishType: "Vegetarian",
    city: "Ankara",
    Price: 132,
    imageLink:
      "https://www.inspiredtaste.net/wp-content/uploads/2022/04/Veggie-Stir-Fry-Recipe-3-1200-1200x800.jpg",
  },
  {
    id: "18",
    name: "Acai Bowl",
    category: "Brunch",
    dishType: "Smoothie Bowl",
    city: "Dubai",
    Price: 39,
    imageLink:
      "https://www.wholesomeyum.com/wp-content/uploads/2023/06/wholesomeyum-Acai-Bowl-Recipe.jpg",
  },
  {
    id: "19",
    name: "Pasta Carbonara",
    category: "Dinner",
    dishType: "Pasta",
    city: "Ankara",
    Price: 78,
    imageLink:
      "https://upload.wikimedia.org/wikipedia/commons/3/33/Espaguetis_carbonara.jpg",
  },
  {
    id: "20",
    name: "Club Sandwich",
    category: "Lunch",
    Price: 957,
    dishType: "Sandwich",
    city: "NYC",
    imageLink:
      "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/06/club-sandwich.jpg",
  },
  {
    id: "21",

    name: "Fruit Salad",
    category: "Brunch",
    dishType: "Salad",
    Price: 674,
    city: "Dubai",
    imageLink:
      "https://www.californiastrawberries.com/wp-content/uploads/2021/05/Rainbow-Fruit-Salad-1024-500x500.jpg",
  },
  {
    id: "22",

    name: "Beef Wellington",
    category: "Dinner",
    dishType: "Beef",
    Price: 555,
    city: "Ankara",
    imageLink:
      "https://www.foodandwine.com/thmb/2k2Kq24_fMvHCyLMPRSNrpg5QdE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/beef-wellington-FT-RECIPE0321-c9a63fccde3b45889ad78fdad078153f.jpg",
  },
  {
    id: "23",

    name: "Falafel Wrap",
    Price: 978,
    category: "Lunch",
    dishType: "Wrap",
    city: "NYC",
    imageLink:
      "https://pixel.parall.ax/parallax-agency/image/upload/expose/cauldron-2018/site-images/20180517104049_lavash-wrap-v2.jpg",
  },
  {
    id: "24",

    name: "Pancakes",
    category: "Brunch",
    Price: 362,
    dishType: "Breakfast",
    city: "Dubai",
    imageLink:
      "https://www.marthastewart.com/thmb/9SwNGFbxZv2ttLQ3uvZe_McJChk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/easy-basic-pancakes-horiz-1022_0-f13ba897aba6423db7901ca826595244.jpgitokXQMZkp_j",
  },
  {
    id: "25",

    name: "Sushi Platter",
    category: "Dinner",
    Price: 396,
    dishType: "Sushi",
    city: "Ankara",
    imageLink:
      "https://sushi.fishfactory.com.au/cdn/shop/products/A35I4614_1024x1024.jpg?v=1631079272",
  },
  {
    id: "26",

    name: "Quinoa Salad",
    category: "Lunch",
    dishType: "Salad",
    Price: 258,
    city: "NYC",
    imageLink:
      "https://cookingwithayeh.com/wp-content/uploads/2021/09/Quinoa-Salad-0.jpg",
  },
  {
    id: "27",

    name: "Smoothie Bowl",
    category: "Brunch",
    dishType: "Smoothie",
    Price: 852,
    city: "Dubai",
    imageLink:
      "https://images.immediate.co.uk/production/volatile/sites/30/2022/12/Smoothie-bowl-16df176.jpg?resize=768,574",
  },
];

export default foodItems;
