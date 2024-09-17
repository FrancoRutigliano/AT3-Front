import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainLayout } from "../views/MainLayout"
import { Home } from "../views/Home"

export const RoutesOutlet = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout/>}/>
                <Route index element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}
