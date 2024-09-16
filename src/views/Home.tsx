import { AtomicInfo } from "../components/AtomicInfo"
import { Header } from "../components/Header"
import { Invest } from "../components/Invest"
import MenuAppBar from "../components/Navbar"
import { VideoSection } from "../components/VideoSection"

export const Home = () => {
  return (
<>
    <MenuAppBar/>
    <Header/>
    <AtomicInfo/>
    <VideoSection/>
    <Invest/>
</>

)
}
