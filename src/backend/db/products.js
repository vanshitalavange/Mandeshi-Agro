import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    productName: "Lemon",
    price: "₹10",
    prevPrice: "₹20",
    imgSrc: "assets/products/lemon.png",
    inStock:true,
    bestDeal:true,
    ratingCount:13,
    quantityCount:1
  },
  {
    _id: uuid(),
    productName: "Apple",
    price: "₹25",
    prevPrice: "₹30",
    imgSrc: "assets/products/apple.png",
    inStock:true,
    bestDeal:true,
    ratingCount:15
  },
  {
    _id: uuid(),
    productName: "Chillies",
    price: "₹30",
    prevPrice: "₹35",
    imgSrc: "assets/products/chilli.png",
    inStock:true,
    bestDeal:true,
    ratingCount:11
  },
  {
    _id: uuid(),
    productName: "Beetroot",
    price: "₹15",
    prevPrice: "₹20",
    imgSrc: "assets/products/beetroot.png",
    inStock:true,
    bestDeal:false,
    ratingCount:6
  },
  {
    _id: uuid(),
    productName: "Banana",
    price: "₹30",
    prevPrice: "₹40",
    imgSrc: "assets/products/banana.png",
    inStock:true,
    bestDeal:false,
    ratingCount:8
  },
  {
    _id: uuid(),
    productName: "Danedar Ghee",
    price: "₹620",
    prevPrice: "₹650",
    imgSrc: "assets/products/danedar-ghee.png",
    inStock:true,
    bestDeal:false,
    ratingCount:17
  },
  {
    _id: uuid(),
    productName: "Green peas",
    price: "₹40",
    prevPrice: "₹50",
    imgSrc: "assets/products/green-peas.png",
    inStock:true,
    bestDeal:false,
    ratingCount:15
  },
  {
    _id: uuid(),
    productName: "A2 Pure Desi Ghee",
    price: "₹1575",
    prevPrice: "₹1685",
    imgSrc: "assets/products/A2-ghee.png",
    inStock:true,
    bestDeal:true,
    ratingCount:19
  }
];

