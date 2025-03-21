import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Features from "./components/Features";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
import Faq from "./components/Faq";
// import Contact from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
        <Header />
          <Home /><Footer />
        </>
      ),
    },
    {
      path: "/features",
      element: (
        <>
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
        <Header />
          <Testimonials/>
          <Footer />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
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
