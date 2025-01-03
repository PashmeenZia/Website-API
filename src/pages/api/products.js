

export default function handler(req, res){
    const products = [
        {
            id: 1,
            name: "Biryani",
            price: 250,
            image: "image/7.jpeg",
        },
        {
            id: 2,
            name: "Karahi",
            price: 350,
            image: "image/3.jpg",
        },
        {
            id: 3,
            name: "Handi",
            price: 350,
            image: "image/25.png",
        },
        {
            id: 4,
            name: "Fish",
            price: 550,
            image: "image/29.jpg",
        },
        {
            id: 5,
            name: "Prawn",
            price: 700,
            image: "image/30.jpg",
        },
        {
            id: 6,
            name: "Tikka",
            price: 250,
            image: "image/28.jpg",
        },

    ];

    res.status(200).json(products);
};