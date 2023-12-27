import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import HomePage from "./pages/homepage/HomePage";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Blog from "./pages/blog/Blog";
import Career from "./pages/career/Career";
import { useEffect, useState } from "react";
import Consumercomplaint from "./pages/consumercomplaint/Consumercomplaint";
import PrivateLimitedCompany from "./pages/PrivateLimitedCompany/PrivateLimitedCompany";
// import { Footer } from 'antd/es/layout/layout';

function App() {

  const [visible, setVisible] = useState(false) //For to Scroll To Top
  const [sticky, setSticky] = useState(false);

  // Toggle To Top

  const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
          setVisible(true)
      }
      else if (scrolled <= 300) {
          setVisible(false)
      }
  };

  window.addEventListener('scroll', toggleVisible);


  // on render, set listener Check To header to become Sticky or fixed
  useEffect(() => {
      window.addEventListener("scroll", isSticky);
      return () => {
          window.removeEventListener("scroll", isSticky);
      };
  }, []);

  const isSticky = () => {
      const scrollTop = window.scrollY;
      const stickyClass = scrollTop >= 60 ? true : false;
      setSticky(stickyClass);
  };


  const scrollToTop = () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  };

  return (
    <div className="">
      <Header sticky={sticky} />
      {/* <HomePage/> */}

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/career" element={<Career />}></Route>
        <Route path="/consumercomplaint" element={<Consumercomplaint />}></Route>
        <Route path="/privatelimitedcompany" element={<PrivateLimitedCompany />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
