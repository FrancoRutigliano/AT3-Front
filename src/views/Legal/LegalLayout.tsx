import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

export const LegalLayout = () => {
  const location = useLocation(); // Obtiene la ubicación actual
  const [t] = useTranslation("global");

  return (
    <>
      <nav className="mt-20">
        <ul className="flex justify-center md:w-2/3  md:mx-auto md:space-x-6">
          <li className={`flex justify-center items-center p-5 lg:text-2xl ${location.pathname === '/legal/privacy' ? 'border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center' : ' text-center border-b-4 border-transparent'}`}>
            <Link to={'privacy'} className="text-xs sm:text-base md:text-lg text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in">
             {t("privacyPolicy.politica de privacidad")}
            </Link>
          </li>
          <li className={`flex justify-center items-center p-5 lg:text-2xl ${location.pathname === '/legal/terms' ? 'border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center ' : ' text-center border-b-4 border-transparent'}`}>
            <Link to={'terms'} className="text-xs sm:text-base md:text-lg text text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in">
            {t("termsAndConditions.terminos y condiciones")}

            </Link>
          </li>
          <li className={`flex justify-center items-center lg:p-5 lg:text-2xl ${location.pathname === '/legal/faqForLaw' ? 'border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center ' : ' text-center border-b-4 border-transparent'}`}>
            <Link to={'faqForLaw'} className="text-xs sm:text-base md:text-lg max-w-[270px] text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in w-full">
            {t("faqForLaw.faqForLaw")}
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
