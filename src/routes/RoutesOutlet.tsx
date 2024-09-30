import { HashRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../views/MainLayout"
import { Home } from "../views/Home"
import { Terms } from "../views/Terms"
import { ComoInvertir } from "../views/ComoInvertir"
import ScrollToTop from "../components/ScrollToTop"
import { Press } from "../views/Press"
import { Nosotros } from "../views/Nosotros"

export const RoutesOutlet = () => {
    return (
        <HashRouter>
              <ScrollToTop />
            <Routes>
                <Route path="/" element={<MainLayout/>}>

                <Route index element={<Home/>} />
                <Route path="legal" element={<Terms/>}/>
                <Route path="comoInvertir" element={<ComoInvertir/>}/>
                <Route path="faq" element={<Home />} /> 
                <Route path="press" element={<Press/>}/>
                <Route path="nosotros" element={<Nosotros/>}/>

                </Route>

            </Routes>
        </HashRouter>
    )
}
