import { useEffect, useRef } from "react"
import { AtomicInfo } from "../components/AtomicInfo"
import { Faq } from "../components/Faq"
import { Header } from "../components/Header"
import { Invest } from "../components/Invest"
// import MenuAppBar from "../components/Navbar"
import { Staking } from "../components/Staking"
import { VideoSection } from "../components/VideoSection"

export const Home = () => {
  const faqRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.location.hash ==  '#faq') {
      faqRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

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
