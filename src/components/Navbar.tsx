import { Link } from 'react-router-dom';
import atomicLogo from '../assets/atomicLogo.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import eng from '../assets/lang/eng.png'
import esp from '../assets/lang/esp.png'

export const Navbar = () => {
  const [t, i18n] = useTranslation("global")
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado
  const [isOpenDropdown, setIsOpenDropdown] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    console.log('hola')
    setIsOpen(false)
  }

  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  const toggleDropdown = () => {
    setIsOpenDropdown(prev => !prev);
  };

  return (
    <header className="fixed sticky absolute top-0 left-0 w-full bg-dark-light text-white z-50 lg:py-3  ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link className="block text-teal-600 dark:text-teal-300 hover:cursor-pointer" to={'/'}>
              <span className="sr-only ">Inicio</span>
              <img src={atomicLogo} alt="logo" className="w-28 lg:w-60" />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* Menú en pantallas grandes */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6  lg:text-md">
                <li >
                  <Link
                    className="text-white transition hover:text-celeste dark:text-white "
                    to={'/nosotros'}
                  >
                    {t("navbar.nosotros")}
                  </Link>
                </li>
                {/* DROPDWON */}
                <div className="relative"
                  onMouseLeave={() => setIsOpenDropdown(false)}>
                  <div
                    className="inline-flex items-center overflow-hidden rounded-md  text-white"
                  >

                    <button
                      className="h-full flex items-center p-2 text-white  dark:text-gray-300 hover:text-blue-500 "
                      onMouseEnter={() => setIsOpenDropdown(true)}

                    >
                      <a
                        href="#"
                        className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                      >
                        Como Invertir
                      </a>
                      <span className="sr-only">Menu</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="size-4 "
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>

                  {
                    isOpenDropdown &&
                    <div
                      className="absolute end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                      role="menu"
                    >
                      <div className="p-2">
                        <Link
                          to={'/staking'}
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                        >
                          Staking
                        </Link>

                        <a
                          href="https://dapp-at-3.vercel.app/stakingplus"
                          target='_blank'
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                        >
                          {t("navbar.feliz primavera")}
                        </a>

                        {/* <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        role="menuitem"
      >
        Como hacer P2P
      </a> */}

                        {/* <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        role="menuitem"
      >
        Done estamos tokenizando
      </a> */}


                      </div>
                    </div>
                  }
                </div>
                {/* FIN DROPDWON */}

                <li>
                  <Link
                    className="text-white transition hover:text-celeste dark:text-white "
                    to={'/legal'}
                  >
                    {t("navbar.legal")}
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-white transition hover:text-celeste dark:text-white "
                    to={"/faq"}
                  >
                    {t("navbar.preguntas frecuentes")}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white transition hover:text-celeste dark:text-white "
                    to={"/press"}
                  >
                    {t("navbar.noticias")}
                  </Link>
                </li>
                <li>
                  <a
                    className="text-white transition hover:text-celeste dark:text-white hover:cursor-pointer"
                    // href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      const element = document.getElementById('contact');
                      if (element) { // Verificamos si el elemento no es null
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                      closeMenu();
                    }}
                  >

                    {t("navbar.contacto")}
                  </a>
                </li>
                <li>
                  <button onClick={() => handleChangeLanguage("en")}>
                    <img src={eng} className='w-[1rem] lg:w-[2rem] ml-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500  hover:scale-105  rounded-full' alt="english" />
                  </button>
                  <button onClick={() => handleChangeLanguage("es")}>
                    <img src={esp} className='w-[1rem] lg:w-[2rem] ml-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500  hover:scale-105  rounded-full' alt="español" />

                  </button>
                </li>


              </ul>
            </nav>

            {/* Menú hamburguesa */}
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white "
                  onClick={toggleMenu} // Controlar el click en el botón
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menú desplegable en pantallas pequeñas */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <nav aria-label="Global">
            <ul className="flex flex-col items-start gap-4 p-4 text-sm">
              <li>
                <Link
                  className="text-white transition hover:text-celeste dark:text-white "
                  to={'/nosotros'}
                  onClick={closeMenu}
                >
                  {t("navbar.nosotros")}
                </Link>
              </li>
              {/* DROPDWON */}
              <div className="relative"
                >
                <div
                  className="inline-flex items-center overflow-hidden rounded-md  text-white"
                >

                  <button
                    className="h-full flex items-center text-white  dark:text-gray-300 hover:text-blue-500 "
                    onClick={()=>toggleDropdown()}

                  >
                    <button
                      className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                    >
                      Como Invertir
                    </button>
                    <span className="sr-only">Menu</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4 "
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {
                  isOpenDropdown &&
                  <div
                    className="absolute left-10 end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg dark:border-gray-800 dark:bg-gray-900"
                    role="menu"
                  >
                    <div className="p-2">
                      <Link
                        to={'/staking'}
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={()=>{   toggleDropdown(); closeMenu(); }}

                      >
                        Staking
                      </Link>

                      <a
                        href="https://dapp-at-3.vercel.app/stakingplus"
                        target='_blank'
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={()=>{   toggleDropdown(); closeMenu(); }}

                      >
                        {t("navbar.feliz primavera")}
                      </a>

                      {/* <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        role="menuitem"
      >
        Como hacer P2P
      </a> */}

                      {/* <a
        href="#"
        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
        role="menuitem"
      >
        Done estamos tokenizando
      </a> */}


                    </div>
                  </div>
                }
              </div>
              {/* FIN DROPDWON */}
              <li>
                <Link
                  className="text-white transition hover:text-celeste dark:text-white "
                  to={'/legal'}
                  onClick={closeMenu}
                >
                  Legal
                </Link>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-celeste dark:text-white "
                  href="/#faq"
                  onClick={closeMenu}
                >
                  {t("navbar.preguntas frecuentes")}

                </a>
              </li>
              <li>
                <a
                  className="text-white transition hover:text-celeste dark:text-white hover:cursor-pointer"
                  // href="#contact"  
                  onClick={(e) => {
                    e.preventDefault();
                    const element = document.getElementById('contact');
                    if (element) { // Verificamos si el elemento no es null
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                    closeMenu();
                  }}
                >
                  {t("navbar.contacto")}
                </a>
              </li>
              <li>
                <button onClick={() => handleChangeLanguage("en")}>
                  <img src={eng} className='w-[1.5rem] lg:w-[2rem]  transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500  hover:scale-105  rounded-full' alt="english" />
                </button>
                <button onClick={() => handleChangeLanguage("es")}>
                  <img src={esp} className='w-[1.5rem] lg:w-[2rem] ml-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500  hover:scale-105  rounded-full' alt="español" />

                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
