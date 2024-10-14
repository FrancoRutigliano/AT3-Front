import { Link, Outlet } from "react-router-dom"

export const LegalLayout = () => {
  return (
    <>
 <nav className="mt-20">
    <ul className="flex justify-center ">
    <li>
        <Link to={'terms'}>Terms and conditions</Link>
    </li>
    <li>
        <Link to={'privacy'}>Privacy Policy</Link>
    </li>
    <li>
        <Link to={'cookies'}>Cookies policy</Link>
    </li>
 </ul>
 </nav>
        <Outlet/>
    </>
  )
}
