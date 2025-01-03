import React from "react";

const About = () => {
    return (
        <section
            className="about min-h-screen flex items-center justify-center bg-cover bg-center text-white px-4 sm:px-6 lg:px-10"
            style={{ backgroundImage: "url('image/about-us-bg.jpg')" }}
        >
            <div className="bg-black bg-opacity-60 p-6 sm:p-8 rounded-md max-w-full sm:max-w-md md:max-w-lg">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-serif mb-4">
                    About Us
                </h2>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                    Welcome to Our Foodies, where culinary artistry meets heartfelt hospitality.
                    Nestled in the heart of Karachi, we take pride in serving dishes crafted with
                    the freshest ingredients and inspired by flavors from around the world. Our
                    mission is to create memorable dining experiences for our guests by blending
                    exceptional food, a warm ambiance, and impeccable service. Whether you are here
                    for a casual meal, a family gathering, or a special celebration, our team is
                    dedicated to making every visit unforgettable.
                </p>
            </div>
        </section>
    );
};

export default About;
