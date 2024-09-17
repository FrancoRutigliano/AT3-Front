import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../views/MainLayout"
import { Home } from "../views/Home"
import { Terms } from "../views/Terms"

export const RoutesOutlet = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}>

                <Route index element={<Home/>} />
                <Route path="terms" element={<Terms/>}/>
                
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
