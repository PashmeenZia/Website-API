import React from "react";

const FloatingImageContentBlock = () => {
    return(
        <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
            <h2 className="text-3xl font-bold mb-4 text-white "> We Serve Healthy & Tasty Food </h2>
            <p className="text-white mb-4">Experience the juiciest dishes in town, made with fresh ingredients and grilled to perfection.</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
             Order Now
            </button>
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white"> Coming Soon: Our New Dishes Launches </h3>
            <ul>
                <li><strong>Cheesy BBQ Burger:</strong>
                 A mouthwatering blend of cheddar cheese, crispy bacon, and BBQ. 
                </li>
                <br/>
                <li><strong>Spicy Jalapeno Pizza:</strong>
                 A fiery delight topped with fresh Jalaperios and zesty chipotle mayo.
                </li>
                <br/>
                <li><strong>Mushroom Soup:</strong>
                A comforting and creamy delight, mushroom soup blends earthy flavors with a velvety texture.
                </li>
                <br/>
                <li><strong>Kurkure Chicken Momos:</strong>
                 A Crispy chicken breast tossed in spicy hot sauce.
                </li>
                <br/>
                <li><strong>Special Haleem:</strong>
                 A Haleem is a rich and flavorful stew made with meat, wheat, and aromatic spices, slow-cooked and comforting dish.
                </li>
                <br/>
                </ul>
                </div>
                <div className="md:w1/2 mt-6 md:mt-0">
                <img
                src="image/wallpaper1.jpg"
                alt="delicious burger"
                className="-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7"/>
                </div>
            
        </section>
    )
}
export default FloatingImageContentBlock;