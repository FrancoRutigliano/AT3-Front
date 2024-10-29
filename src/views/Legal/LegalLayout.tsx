import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";

export const LegalLayout = () => {
  const location = useLocation(); // Obtiene la ubicación actual
  const [t] = useTranslation("global");

  return (
    <>
      <nav className="mt-20">
        {/* <ul className="flex sm:justify-center md:w-2/3  md:mx-auto md:space-x-6"> */}
        <ul className="grid grid-cols-1 sm:grid-cols-4 sm:w-4/5 sm:mx-auto ">

          <li className={`flex  justify-center items-center p-5 lg:text-2xl ${location.pathname === '/legal/privacy' ? 'sm:border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center' : ' text-center sm:border-b-4 border-transparent'}`}>
            <Link to={'privacy'} className="text-base md:text-lg text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in">
             {t("privacyPolicy.politica de privacidad")}
            </Link>
          </li>
          <li className={`flex justify-center items-center p-5 lg:text-2xl ${location.pathname === '/legal/terms' ? 'sm:border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center ' : ' text-center sm:border-b-4 border-transparent'}`}>
            <Link to={'terms'} className="text-base md:text-lg text text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in">
            {t("termsAndConditions.terminos y condiciones")}

            </Link>
          </li>
          <li className={` flex justify-center items-center p-5 lg:text-2xl ${location.pathname === '/legal/faqForlaw' ? 'sm:border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center ' : ' text-center sm:border-b-4 border-transparent'}`}>
            <Link to={'faqForLaw'} className="text-base md:text-lg max-w-[270px] text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in w-full">
            {t("faqForLaw.faqForLaw")}
            </Link>
          </li>
          <li className={`flex justify-center items-center p-5 lg:text-2xl ${location.pathname === '/legal/cookiesPolicy' ? 'sm:border-b-4 border-blue-500 transition duration-150 ease-out hover:ease-in text-center ' : ' text-center sm:border-b-4 border-transparent'}`}>
            <Link to={'cookiesPolicy'} className="text-base md:text-lg max-w-[270px] text-white hover:text-blue-500 transition duration-150 ease-out hover:ease-in w-full">
            {t("cookiesPolicy.cookiesPolicy")}
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
