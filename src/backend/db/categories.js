import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Organic Fruits",
    imgSrc: "assets/product-categories/fruit.png"
  },
  {
    _id: uuid(),
    categoryName: "Organic Dairy Products",
    imgSrc: "assets/product-categories/cow.png"
  },
  {
    _id: uuid(),
    categoryName: "Wood Pressed Oils",
    imgSrc: "assets/product-categories/sunflower-oil.png"
  },
  {
    _id: uuid(),
    categoryName: "Organic Spices",
    imgSrc: "assets/product-categories/chilli.png"
  },
  {
    _id: uuid(),
    categoryName: "Organic Vegetables",
    imgSrc: "assets/product-categories/vegetables.png"
  },
  {
    _id: uuid(),
    categoryName: "Organic Groceries",
    imgSrc: "assets/product-categories/rice.png"
  }
];
