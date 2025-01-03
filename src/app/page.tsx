
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Progressor from "./components/Progressor";
import Cardsole from "./components/Cardsole";
import Productlist from "./components/Productlist";
import Drink from "./components/Drink";
import Card from "./components/card";
import Reservation from "./components/Reservation";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Menu from "./components/Menu";









export default function Home() {
  return (
    <div className="bg-gradient-to-r from-black to-slate-700 min-h-screen text-white">
    <Navbar/>
    <Cardsole/>
    <Progressor/>
    <Productlist/>
    <Banner/>
    <Drink/>
    <Menu/>
    <Card/>
    <Reservation/>
    <Testimonials/>
    <Footer/>
    </div>
  )
}