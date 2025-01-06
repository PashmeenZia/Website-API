 //pages/api/products.js
export default function handler(req, res) {
    const products = [
      {
        id: 1,
        name: " Veg Beef Boti",
        price: 10,
        image:
          "image/31.jpg",
      },
  
      {
        id: 2,
        name: "Chicken Biryani",
        price: 12,
        image:
          "image/8.jpg",
      },
      {
        id: 3,
        name: "Chiken Tikka",
        price: 8,
        image:
          "image/28.jpg",
      },
      {
        id: 4,
        name: "Chicken Karhai",
        price: 15,
        image:
          "image/4.jpg",
      },
      {
        id: 5,
        name: "Fish Fry",
        price: 13,
        image: "image/29.jpg",
      },
      {
        id: 6,
        name: "Prawn",
        price: 14,
        image:
          "image/30.jpg",
      },
      
    ];
  
    res.status(200).json(products);
  }
  