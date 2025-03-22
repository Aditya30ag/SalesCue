import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Faq from "./components/Faq";
// import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import TestimonialSlider from "./components/TestimonialSlider";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <ScrollToTop/>
        <Header />
          <Home /><Footer />
        </>
      ),
    },
    {
      path: "/features",
      element: (
        <>
        <ScrollToTop/>
        <Header />
          <Features />
          <Footer />
        </>
      ),
    },
    {
      path: "/pricing",
      element: (
        <>
        <ScrollToTop/>
        <Header />
          <Pricing />
          <Footer />
        </>
      ),
    },
    {
      path: "/testimonials",
      element: (
        <>
        <ScrollToTop/>
        <Header />
          <TestimonialSlider/>
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
        <ScrollToTop/>
        <Header />
          <About/>
          <Footer />
        </>
      ),
    },
    {
      path: "/faq",
      element: (
        <>
        <ScrollToTop/>
        <Header />
          <Faq/>
          <Footer />
        </>
      ),
    // {
    //   path: "/contact",
    //   element: (
    //     <>
    //       <Contact/>
    //     </>
    //   ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
