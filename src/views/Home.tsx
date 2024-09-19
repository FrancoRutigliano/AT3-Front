import { AtomicInfo } from "../components/AtomicInfo"
import { Faq } from "../components/Faq"
import { Header } from "../components/Header"
import { Invest } from "../components/Invest"
// import MenuAppBar from "../components/Navbar"
import { Staking } from "../components/Staking"
import { VideoSection } from "../components/VideoSection"

export const Home = () => {
  return (
<>
    {/* <MenuAppBar/> */}
    <Header/>
    <AtomicInfo/>
    <VideoSection/>
    <Invest/>
    <Staking/>
    <Faq/>

</>

)
}
