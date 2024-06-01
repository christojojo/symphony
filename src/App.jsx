import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
import EventDesign from "./components/EventDesign/EventDesign";
import GetInTouch from "./components/GetInTouch/GetInTouch";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import Blogs from "./components/Blogs/Blogs";
import Honours from "./components/Honours/Honours";
import WeddingDecorations from "./components/WeddingDecorations/WeddingDecorations";
import WeddingPlanning from "./components/WeddingPlanning/WeddingPlanning";
import EventPlanning from "./components/EventPlanning/EventPlanning";
import OurHightlights from "./components/OurHighlights/OurHightlights";
import Testimonials from "./components/Testimonials/Testimonials";
import OurWorks from "./components/OurWorks/OurWorks";
import OurServices from "./components/OurServices/OurServices";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <EventDesign></EventDesign>
      <OurServices></OurServices>
      <OurWorks></OurWorks>
      <OurHightlights></OurHightlights>
      <Testimonials></Testimonials>
      <Honours></Honours>
      <Blogs></Blogs>
      <SocialMedia></SocialMedia>
      <GetInTouch></GetInTouch>
      <Footer></Footer>
    </>
  );
}

export default App;
