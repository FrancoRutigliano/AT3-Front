import { useEffect, useRef } from "react"
import { AtomicInfo } from "../components/AtomicInfo"
import { Faq } from "../components/Faq"
import { Header } from "../components/Header"
import { Invest } from "../components/Invest"
// import MenuAppBar from "../components/Navbar"
import { Staking } from "../components/Staking"
import { VideoSection } from "../components/VideoSection"
import { useLocation } from "react-router-dom"
// import { Modal } from "../components/Modal"

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
    {/* <MenuAppBar/> */}
    <Header/>
    
    <AtomicInfo/>
    <VideoSection/>
    <Invest/>
    <Staking/>
    <Faq ref={faqRef} />

</>

)
}
