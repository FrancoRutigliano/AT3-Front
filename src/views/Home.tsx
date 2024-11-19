import { useEffect, useRef } from "react"
import { AtomicInfo } from "../components/AtomicInfo"
import { Faq } from "../components/Faq"
// import { Header } from "../components/Header"
import { Invest } from "../components/Invest"
import { Invertir } from "../components/Invertir"
import { VideoSection } from "../components/VideoSection"
import { useLocation } from "react-router-dom"
import './Home.css'
import { Header } from "../components/Header"
export const Home = () => {
  const faqRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  useEffect(() => {
    // Desplazarse si hay un hash específico en la URL
    if (location.pathname === '/faq') {
      faqRef.current?.scrollIntoView({ behavior: "smooth" });
    }
   
  }, [location]);

  
  return (

<>
{/* <div className="background">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
 </div> */}
    {/* <MenuAppBar/> */}
    <Header/>
    {/* <HeaderPrueba/> */}
    <AtomicInfo/>
    <VideoSection/>
    <Invest/>
    <Invertir/>
    <Faq ref={faqRef} />

</>

)
}
