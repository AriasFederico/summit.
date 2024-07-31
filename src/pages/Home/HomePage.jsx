import { Hero } from "./components/Hero/Hero.jsx"
import { Banner } from "./components/Banners.jsx/Banner.jsx"
import { Functionalities } from "./components/Functionalities/Functionalities.jsx"
import { LastParagraph } from "./components/LastParagraph/LastParagraph.jsx"
import { Footer } from "../../components/Footer/Footer.jsx"

export const HomePage = () => {
  return (
    <>
      <Hero/>
      <Banner/>
      <Functionalities/>
      <LastParagraph/>
      <Footer/>
    </>
  )
}


// "Con Summit, lleva el control de tus precios, optimiza tus márgenes de ganancia y simplifica la gestión de tu negocio. Disfruta de una plataforma fácil de usar, diseñada para adaptarse a tus necesidades y ayudarte a alcanzar tus objetivos."