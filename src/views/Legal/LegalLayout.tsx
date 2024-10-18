import { Link, Outlet, useLocation } from "react-router-dom";

export const LegalLayout = () => {
  const location = useLocation(); // Obtiene la ubicación actual

  return (
    <>
      <nav className="mt-20">
        <ul className="flex justify-center w-2/3  mx-auto space-x-6">
          <li className={`p-5 lg:text-2xl ${location.pathname === '/legal/privacy' ? 'border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center' : ' text-center border-b-4 border-transparent'}`}>
            <Link to={'privacy'} className=" text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in">
              Privacy Policy
            </Link>
          </li>
          <li className={`p-5 lg:text-2xl ${location.pathname === '/legal/terms' ? 'border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center ' : ' text-center border-b-4 border-transparent'}`}>
            <Link to={'terms'} className=" text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in">
              Terms and conditions
            </Link>
          </li>
          {/* <li className={`p-5 lg:text-2xl ${location.pathname === '/legal/cookies' ? 'border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center ' : 'text-center  border-b-2 border-transparent'}`}>
            <Link to={'cookies'} className=" text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in">
              Cookies policy
            </Link>
          </li> */}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
