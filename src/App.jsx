import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import HowitsWork from "./pages/howitsWork";
import ContactUs from "./pages/contactUs";
import Story from "./pages/story";
import FAQ from "./pages/faq";
import Products from "./pages/products";
import ShoppingCart from "./pages/cart";
import Checkout from "./pages/checkout";
import MoneyBack from "./pages/MoneyBack";
import MainChatBot from "./pages/MainChatBot";
import { FaWhatsapp } from "react-icons/fa6";

function App() {
  return (
    <>
      <Router>
        <button
          className="fixed bottom-20 right-8 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          onClick={() => {
            const phoneNumber = "1234567890"; 
            const message = "Hello, I would like to chat!";
            const encodedMessage = encodeURIComponent(message);
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
            window.open(whatsappURL, "_blank");
          }}
        >
          <FaWhatsapp className="text-white text-3xl" />
        </button>

        <Navbar />
        <MainChatBot />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowitsWork />} />
          <Route path="/how-it-works/story" element={<Story />} />
          <Route path="/contact us" element={<ContactUs />} />
          <Route path="/product" element={<Products />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/story" element={<Story />} />
          <Route path="/moneyback" element={<MoneyBack />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
