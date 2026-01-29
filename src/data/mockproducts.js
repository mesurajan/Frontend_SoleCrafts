import shoe01 from '../assets/images/shoe.jpg';
import shoe02 from '../assets/images/shoe02.jpg';
import shoe03 from '../assets/images/shoe03.jpg';
import bankqr from '../assets/images/qr.jpg';

const mockProducts = [
  {
    category: "Women",
    products: [
      { _id: 1, title: "Women Sneakers", price: 120, image: bankqr },
      { _id: 2, title: "Running Shoes", price: 150, image: shoe02 },
      { _id: 3, title: "Stylish Boots", price: 180, image: shoe03 },
      { _id: 4, title: "Casual Walkers", price: 110, image: shoe01 },
   
    ],
  },
  {
    category: "Men",
    products: [
      { _id: 7, title: "Men Sneakers", price: 130, image: shoe01 },
      { _id: 8, title: "Leather Boots", price: 220, image: shoe02 },
      { _id: 9, title: "Sport Runners", price: 160, image: shoe03 },
      { _id: 10, title: "Street Shoes", price: 125, image: shoe01 },
  
    ],
  },
  {
    category: "Unisex",
    products: [
      { _id: 13, title: "Unisex Sneakers", price: 140, image: shoe01 },
      { _id: 14, title: "High Tops", price: 155, image: shoe02 },
      { _id: 15, title: "Casual Trainers", price: 135, image: shoe03 },
      { _id: 16, title: "Urban Sneakers", price: 150, image: shoe01 },

    ],
  },
  {
    category: "Casual",
    products: [
      { _id: 19, title: "Casual Slip-ons", price: 95, image: shoe01 },
      { _id: 20, title: "Comfort Shoes", price: 100, image: shoe02 },
      { _id: 21, title: "Daily Sneakers", price: 110, image: shoe03 },
      { _id: 22, title: "Canvas Shoes", price: 105, image: shoe01 },

    ],
  },
];

export default mockProducts;



