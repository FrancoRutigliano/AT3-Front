    import { HashRouter, Route, Routes } from "react-router-dom"
    import { MainLayout } from "../views/MainLayout"
    import { Home } from "../views/Home"
    import { ComoInvertir } from "../views/ComoInvertir"
    import ScrollToTop from "../components/ScrollToTop"
    import { Press } from "../views/Press"
    import { Nosotros } from "../views/Nosotros"
    import { Support } from "../views/Support"
    import { LegalLayout } from "../views/Legal/LegalLayout"
    import { Terms } from "../views/Terms"
    import { PrivacyPolicy } from "../views/Legal/PrivacyPolicy"

    export const RoutesOutlet = () => {
        return (
            <HashRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<MainLayout/>}>

                    <Route index element={<Home/>} />
                    <Route path="comoInvertir" element={<ComoInvertir/>}/>
                    <Route path="faq" element={<Home />} /> 
                    <Route path="press" element={<Press/>}/>
                    <Route path="nosotros" element={<Nosotros/>}/>
                    <Route path="soporte" element={<Support/>}/>

                    <Route path="legal" element={<LegalLayout/>}>

                    <Route path="terms" element={<Terms/>}/>
                    <Route path="privacy" element={<PrivacyPolicy/>}/>

                        
                    </Route>


                    </Route>

                </Routes>
            </HashRouter>
        )
    }
