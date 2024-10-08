import { Link } from 'react-router-dom';
import atomicLogo from '../assets/atomicLogo.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import eng from '../assets/lang/eng.png'
import esp from '../assets/lang/esp.png'
import { Form } from './Form';

export const Navbar = () => {
  const [t, i18n] = useTranslation("global")
  const [isOpen, setIsOpen] = useState(false); 
  const [isOpenDropdown, setIsOpenDropdown] = useState(false); 
  const [isOpenDropdownHelp, setIsOpenDropdownHelp] = useState(false); 
  const [isOpenDropdownLang, setIsOpenDropdownLang] = useState(false); 
  const [isOpenDropdownAboutUs, setIsOpenDropdownAboutUs] = useState(false); 
  const [isOpenDropdownLegal, setIsOpenDropdownLegal] = useState(false); 
  const [isOpenDropdownProyectos, setIsOpenDropdownProyectos] = useState(false); 

  // const [isOpenDropdownWork, setIsOpenDropdownWork] = useState(false); 
  const [showingForm, setShowingForm] = useState(false)


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

  }; const toggleDropdownHelp = () => {
    setIsOpenDropdownHelp(prev => !prev);
  };
  const toggleDropdownAboutUs = () => {
    setIsOpenDropdownAboutUs(prev => !prev);
  }
  const toggleDropdownLegal = () => {
    setIsOpenDropdownLegal(prev => !prev);
  }

  const toggleDropdownProyectos = () => {
    setIsOpenDropdownProyectos(prev => !prev);
  }

  const showForm = (isVisible: boolean) =>{
         setShowingForm(isVisible)
  }
  
  // if(showingForm) return(
  //   <Form documentType='brochure' showForm={showForm}/>
  // )
  return (
    <>
    
    <nav className="fixed sticky absolute top-0 left-0 w-full bg-dark-light text-white z-50 lg:py-3  ">
      <div className="mx-auto max-w-screen-xl px-1 sm:px-1 lg:px-1 ">
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
                    {/* DROPDONW PROYECTO */}
                     <div className="relative"
                    onMouseLeave={() => setIsOpenDropdownProyectos(false)}>
                    <div
                      className="inline-flex items-center overflow-hidden rounded-md  text-white"
                    >

                      <button
                        className="h-full flex items-center p-2 text-white   hover:text-blue-500 "
                        onMouseEnter={() => setIsOpenDropdownProyectos(true)}

                      >
                        <a
                          className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 leading-[20px] "
                        >
                            {t("navbar.proyectos de")} <br />
                           {t("navbar.tokenizacion")}
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
                      isOpenDropdownProyectos &&
                      <div
                        className="absolute end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                        role="menu"
                      >
                        <div className="p-2">
                          <a

                            className=" block rounded-lg px-4 py-2 text-sm text-white "
                              role="menuitem"
                            // onClick={()=>{toggleDropdownAboutUs(); showForm(true)}}
                          >
                          {t("navbar.nuestros proyectos")}

                          </a>
                          
                        </div>
                      </div>
                    }
                  </div>
                  {/* FIN DROPDWON PROYECTO*/}
                </li>

                <li >
                  {/* DROPDWON NOSOTROS*/}
                  <div className="relative"
                    onMouseLeave={() => setIsOpenDropdownAboutUs(false)}>
                    <div
                      className="inline-flex items-center overflow-hidden rounded-md  text-white"
                    >

                      <button
                        className="h-full flex items-center p-2 text-white   hover:text-blue-500 "
                        onMouseEnter={() => setIsOpenDropdownAboutUs(true)}

                      >
                        <a
                          className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                        >
                          {t("navbar.nosotros")}
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
                      isOpenDropdownAboutUs &&
                      <div
                        className="absolute end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                        role="menu"
                      >
                        <div className="p-2">
                          <a
//                             href='https://drive.google.com/uc?export=download&id=1GDVfVh34bo7ZvaVWjvwvmqYshgMF3zWf
// // '                         download

                            className="hover:cursor-pointer block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                              role="menuitem"
                            onClick={()=>{toggleDropdownAboutUs(); showForm(true)}}
                          >
                            {t("navbar.descargar brochure")}

                          </a>
                          <Link
                            to={'/nosotros'}
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                            role="menuitem"
                          >
                            {t("navbar.sobre atomico")}

                          </Link>
                          <Link
                            to={'/nosotros#equipo'}
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                            role="menuitem"
                          >
                            {t("navbar.nuestro equipo")}
                          </Link>
                          <a
                            // to={'/nosotros#trabajar'}
                            className="block rounded-lg px-4 py-2 text-sm text-white  "
                            role="menuitem"
                          >
                            {t("navbar.trabaja")}
                          </a>
                        </div>
                      </div>
                    }
                  </div>
                  </li>
                  {/* FIN DROPDWON NOSOTROS*/}
                  
                
                <li>
                {/* DROPDWON */}
                <div className="relative"
                  onMouseLeave={() => setIsOpenDropdown(false)}>
                  <div
                    className="inline-flex items-center overflow-hidden rounded-md  text-white"
                  >

                    <button
                      className="h-full flex items-center p-2 text-white   hover:text-blue-500 "
                      onMouseEnter={() => setIsOpenDropdown(true)}

                    >
                      <a
                        className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                      >
                        {t("navbar.como invertir")}
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
                      className="absolute end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                      role="menu"
                    >
                      <div className="p-2">
                        <Link
                          to={'/comoInvertir#staking'}
                          // href='https://dapp-at-3.vercel.app'
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
                        <a
                          href="https://dapp-at-3.vercel.app/"
                          target='_blank'
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                        >
                          {t("navbar.comprar at3")}
                        </a>
                        {/* <a
                          href="https://dapp-at-3.vercel.app/"
                          target='_blank'
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                        >
                          Peer to Peer
                        </a> */}
                        <Link
                          to={'/comoInvertir#p2p'}
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                        >
                          Peer to Peer
                        </Link>
                        <Link
                          to={'/comoInvertir#tutoriales'}
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                        >
                          {t("navbar.tutoriales")}
                        </Link>

                      </div>
                    </div>
                  }
                </div>
                {/* FIN DROPDWON */}

                  </li>
                <li>
                  {/* <Link
                    className="text-white transition hover:text-celeste  "
                    to={'/legal'}
                  >
                    {t("navbar.legal")}
                  </Link> */}
                  {/* DROPDWON LEGAL*/}
                  <div className="relative"
                    onMouseLeave={() => setIsOpenDropdownLegal(false)}>
                    <div
                      className="inline-flex items-center overflow-hidden rounded-md  text-white"
                    >

                      <button
                        className="h-full flex items-center p-2 text-white   hover:text-blue-500 "
                        onMouseEnter={() => setIsOpenDropdownLegal(true)}

                      >
                        <a
                          className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                        >
                          {t("navbar.legal")}
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
                      isOpenDropdownLegal &&
                      <div
                        className="absolute end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                        role="menu"
                      >
                        <div className="p-2">
                          <Link
                            to={'/legal#terms'}
                            // href='https://dapp-at-3.vercel.app'
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                            role="menuitem"
                          >
                            {t("navbar.terms")}
                          </Link>

                          <Link
                            to={'/legal#privacyPolitic'}
                            className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                            role="menuitem"
                          >
                            {t("navbar.privacy")}
                          </Link>


                        </div>
                      </div>
                    }
                  </div>
                  {/* FIN DROPDWON LEGAL*/}
                </li>
                
                <li className='flex items-center'>
                  <Link
                    className="text-white text-center leading-[20px] transition hover:text-celeste  "
                    to={"/faq"}
                  >

                    {i18n.language === "es" ? (
                      <div className='text-sm'>
                        <span className='block'>Preguntas </span>
                        <span className='block'>Frecuentes</span>
                      </div>
                    ) : (
                      <span className='text-sm'>FAQ</span>
                    )}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-white text-center leading-[20px] transition hover:text-celeste   "
                    to={"/press"}
                  >
                    {/* {t("navbar.noticias")} */}
                    {i18n.language === "es" ? (
                      <div className='text-sm'>
                        <span className='block'>Medios y</span>
                        <span className='block'>Noticias</span>
                      </div>
                    ) : (

                      <div className='text-sm'>
                        <span className='block'>Press </span>
                        <span className='block'>& Media</span>
                      </div>
                    )}
                  </Link>
                </li>

                {/* DROPDWON AYUDA*/}
                <div className="relative"
                  onMouseLeave={() => setIsOpenDropdownHelp(false)}>
                  <div
                    className="inline-flex items-center overflow-hidden rounded-md  text-white"
                  >

                    <button
                      className="h-full flex items-center p-2 text-white   hover:text-blue-500 "
                      onMouseEnter={() => setIsOpenDropdownHelp(true)}

                    >
                      <a
                        className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                      >
                        {t("navbar.ayuda")}
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
                    isOpenDropdownHelp &&
                    <div
                      className="absolute end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                      role="menu"
                    >
                      <div className="p-2">
                        <a
                          // href='#contact'
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
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
                        <Link
                          to={'/soporte'}
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                        >
                          {t("navbar.soporte")}
                        </Link>

                      </div>
                    </div>
                  }
                </div>
                {/* FIN DROPDWON AYUDA*/}

                <li>

                  {/* DROPDWON LANGUAGES*/}
                  <div className="relative"
                    onMouseLeave={() => setIsOpenDropdownLang(false)}>
                    <div
                      className="inline-flex items-center overflow-hidden rounded-md  text-white"
                    >

                      <button
                        className="h-full flex items-center p-2 text-white   hover:text-blue-500 "
                        onMouseEnter={() => setIsOpenDropdownLang(true)}

                      >
                        <a
                          className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                        >
                          {t("navbar.idiomas")}

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
                      isOpenDropdownLang &&
                      <div
                        className="absolute end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                        role="menu"
                      >
                        <div className="lg:ml-auto  sm:flex sm:justify-end p-2 ">
                          <button onClick={() => handleChangeLanguage("en")}>
                            <img src={eng} className='w-[1rem] lg:w-[2rem] ml-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500  hover:scale-105  rounded-full' alt="english" />
                          </button>
                          <button onClick={() => handleChangeLanguage("es")}>
                            <img src={esp} className='w-[1rem] lg:w-[2rem] ml-2 transition-shadow duration-300 hover:shadow-lg hover:shadow-blue-500  hover:scale-105  rounded-full' alt="español" />

                          </button>

                        </div>
                      </div>
                    }
                  </div>
                  {/* FIN DROPDWON LANGUAGES*/}

                </li>


              </ul>
            </nav>

            {/* Menú hamburguesa */}
            <div className="flex items-center gap-4">
              <div className="block md:hidden">
                <button
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75   "
                  onClick={toggleMenu}
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
                 {/* DROPDWON PROYECTOS M.H*/}
              <div className="relative"
              >
                <div
                  className="inline-flex items-center overflow-hidden rounded-md  text-white"
                >

                  <button
                    className="h-full flex items-center text-white   hover:text-blue-500 "
                    onClick={() => toggleDropdownProyectos()}

                  >
                    <button
                      className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                    >
                      {t("navbar.proyectos de tokenizacion")}

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
                  isOpenDropdownProyectos &&
                  <div
                    className="absolute left-20 border border-celeste end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                    role="menu"
                  >
                    <div className="p-2">
                    
                     
                      <a
                        className="block rounded-lg px-4 py-2 text-sm text-white "
                        role="menuitem"
                        // onClick={() => { toggleDropdown(); closeMenu(); }}

                      >
                        {t("navbar.nuestros proyectos")}
                      </a>
                     

                    </div>
                  </div>
                }
              </div>
              
              {/* FIN DROPDWON PROYECTOS*/}
                        </li>





              <li>
                {/* DORPDOWN NOSOTROS */}
                <div className="relative"
                >
                  <div
                    className="inline-flex items-center overflow-hidden rounded-md  text-white"
                  >


                    <button
                      className="h-full flex items-center text-white   hover:text-blue-500 "
                      onClick={() => toggleDropdownAboutUs()}

                    >
                      <button
                        className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                      >
                        {t("navbar.nosotros")}

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
                    isOpenDropdownAboutUs &&
                    <div
                      className="absolute left-20 border border-celeste end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                      role="menu"
                    >
                      <div className="p-2">
                        <a
                      //     href='https://drive.google.com/uc?export=download&id=1GDVfVh34bo7ZvaVWjvwvmqYshgMF3zWf
                      //  '
                      //     download
                      onClick={()=>showForm(true)}
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                        // onClick={() => { toggleDropdownAboutUs(); closeMenu(); }}

                        >
                          {t("navbar.descargar brochure")}

                        </a>
                        <Link
                          to={'/nosotros'}
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                          onClick={() => { toggleDropdownAboutUs(); closeMenu(); }}
                        >
                          {t("navbar.sobre atomico")}

                        </Link>
                        <Link
                          to={'/nosotros#equipo'}
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                          onClick={() => { toggleDropdownAboutUs(); closeMenu(); }}
                        >
                          {t("navbar.nuestro equipo")}

                        </Link>
                        <a
                            // to={'/nosotros#trabajar'}
                            className="block rounded-lg px-4 py-2 text-sm text-white "
                            role="menuitem"
                          >
                            {t("navbar.trabaja")}
                          </a>

                      </div>
                    </div>
                  }
                </div>
                {/* FIN DROPDOWN NOSOTROS */}
              </li>
              <li>

              {/* DROPDWON COMO INVERTIR*/}
              <div className="relative"
              >
                <div
                  className="inline-flex items-center overflow-hidden rounded-md  text-white"
                >

                  <button
                    className="h-full flex items-center text-white   hover:text-blue-500 "
                    onClick={() => toggleDropdown()}

                  >
                    <button
                      className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                    >
                      {t("navbar.como invertir")}

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
                    className="absolute left-20 border border-celeste end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                    role="menu"
                  >
                    <div className="p-2">
                      {/* <a
                        href='https://dapp-at-3.vercel.app'
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdown(); closeMenu(); }}
                        target='_blank'

                        >
                        Staking
                      </a> */}
                      <Link
                        to={'/comoInvertir#staking'}
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdown(); closeMenu(); }}

                        >
                        Staking
                      </Link>
                      <a
                        href="https://dapp-at-3.vercel.app/stakingplus"
                        target='_blank'
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdown(); closeMenu(); }}

                      >
                        {t("navbar.feliz primavera")}
                      </a>
                      <a
                        href="https://dapp-at-3.vercel.app/"
                        target='_blank'
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdown(); closeMenu(); }}
                        >
                        {t("navbar.comprar at3")}
                      </a>
                      {/* <a
                        href="https://dapp-at-3.vercel.app/"
                        target='_blank'
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdown(); closeMenu(); }}
                        >
                        Peer to Peer
                      </a> */}
                      <Link
                        to={'/comoiInvertir#p2p'}
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdown(); closeMenu(); }}
                      >
                        Peer to Peer
                      </Link>
                      <Link
                        to={'/comoInvertir#tutoriales'}
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdown(); closeMenu(); }}
                      >
                        {t("navbar.tutoriales")}
                      </Link>

                    </div>
                  </div>
                }
              </div>
              {/* FIN DROPDWON COMO INVERTIR*/}
                        </li>              

              <li>
              {/* DROPDWON LEGAL */}
              <div className="relative"
              >
                <div
                  className="inline-flex items-center overflow-hidden rounded-md  text-white"
                >

                  <button
                    className="h-full flex items-center text-white   hover:text-blue-500 "
                    onClick={() => toggleDropdownLegal()}

                  >
                    <button
                      className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                    >
                      {t("navbar.legal")}

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
                  isOpenDropdownLegal &&
                  <div
                    className="absolute left-12 border border-celeste end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                    role="menu"
                  >
                    <div className="p-2">
                      {/* <a
                        href='https://dapp-at-3.vercel.app'
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdown(); closeMenu(); }}
                        target='_blank'

                      >
                        Staking
                      </a> */}
                      <Link
                        to={'/legal#terms'}
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdownLegal(); closeMenu(); }}

                      >
                            {t("navbar.terms")}
                      </Link>
                     
                      <Link
                        to={'/legal#terms'}
                        className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                        role="menuitem"
                        onClick={() => { toggleDropdownLegal(); closeMenu(); }}
                      >
                                               {t("navbar.privacy")}

                      </Link>
                    

                    </div>
                  </div>
                }
              </div>
                {/* FIN DROPDWON LEGAL */}
              </li>
              <li>
                <a
                  className="text-white transition hover:text-celeste  "
                  href="/#faq"
                  onClick={closeMenu}
                >
                  {t("navbar.preguntas frecuentes")}

                </a>
              </li>

              <li>

                {/* DORPDOWN AYUDA */}
                {/* DROPDWON */}
                <div className="relative"
                >
                  <div
                    className="inline-flex items-center overflow-hidden rounded-md  text-white"
                  >

                    <button
                      className="h-full flex items-center text-white   hover:text-blue-500 "
                      onClick={() => toggleDropdownHelp()}

                    >
                      <button
                        className=" mr-1  py-2 text-sm/none text-white hover:text-blue-500 "
                      >
                        {t("navbar.ayuda")}

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
                    isOpenDropdownHelp &&
                    <div
                      className="absolute left-20 border border-celeste end-0 z-10 mt-0 w-56 bg-dark-light text-white shadow-lg  "
                      role="menu"
                    >
                      <div className="p-2">


                        <a
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
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

                        <Link
                          to={'/soporte'}
                          className="block rounded-lg px-4 py-2 text-sm text-white hover:bg-gray-50 hover:text-blue-500"
                          role="menuitem"
                          onClick={() => { toggleDropdownHelp(); closeMenu(); }}
                        >
                          {t("navbar.soporte")}

                        </Link>


                      </div>
                    </div>
                  }
                </div>
                {/* FIN DROPDWON */}

                {/* FIN DROPDOWN AYUDA */}


              </li>
              <li >
                <button onClick={() => handleChangeLanguage("en")} >
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
    </nav>
    {
       showingForm && 
        <Form documentType='brochure' showForm={showForm}/>
    }
    </>
  );
};
