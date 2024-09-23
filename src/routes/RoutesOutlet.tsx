import { HashRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../views/MainLayout"
import { Home } from "../views/Home"
import { Terms } from "../views/Terms"
import { StakingView } from "../views/StakingView"
import ScrollToTop from "../components/ScrollToTop"

export const RoutesOutlet = () => {
    return (
        <HashRouter>
              <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout/>}>

                <Route index element={<Home/>} />
                <Route path="legal" element={<Terms/>}/>
                <Route path="staking" element={<StakingView/>}/>
                
                </Route>

            </Routes>
        </HashRouter>
    )
}
