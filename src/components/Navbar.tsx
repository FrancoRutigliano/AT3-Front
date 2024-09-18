import { Link } from 'react-router-dom'
import atomicLogo from '../assets/atomicLogo.png'
import { useState } from 'react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar si el menú está abierto o cerrado

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Cambia el estado al hacer clic en el botón del menú hamburguesa
  };
  return (
    <header className="fixed top-0 left-0 w-full bg-dark-light text-white z-50">

  <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div className="flex h-16 items-center justify-between">
      <div className="flex-1 md:flex md:items-center md:gap-12">
        <a className="block text-teal-600 dark:text-teal-300" href="#">
          <span className="sr-only">Home</span>
          <img src={atomicLogo} alt="logo" className='w-28 lg:w-40' />
        </a>
      </div>

      <div className="md:flex md:items-center md:gap-12">
        <nav aria-label="Global" className="hidden md:block">
          <ul className="flex items-center gap-6 text-sm">
            <li>
              <Link
                className="text-white transition hover:text-celeste dark:text-white dark:hover:text-white/75"
                to={'/'}
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-celeste dark:text-white dark:hover:text-white/75"
              to={'/staking'}
              >
                Staking
              </Link>
            </li>

            <li>
              <Link
                className="text-white transition hover:text-celeste dark:text-white dark:hover:text-white/75"
                to={'/terms'}
              >
                Terms and Conditions
              </Link>
            </li>
            <li>
              <a
                className="text-white transition hover:text-celeste dark:text-white dark:hover:text-white/75"
                href='/#faq-id'
              >
                Faqs
              </a>
            </li>
            <li>
              <a
                className="text-white transition hover:text-celeste dark:text-white dark:hover:text-white/75"
                href='#contact'
              >
                Contact
              </a>
            </li>


            {/* <li>
              <a
                className="text-white transition hover:text-celeste dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Projects
              </a>
            </li> */}

            {/* <li>
              <a
                className="text-white transition hover:text-celeste dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Blog
              </a>
            </li> */}
          </ul>
        </nav>

        <div className="flex items-center gap-4 bg-red-200">
          {/* <div className="sm:flex sm:gap-4">
            <a
              className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow dark:hover:bg-teal-500"
              href="#"
            >
              Login
            </a>

            <div className="hidden sm:flex">
              <a
                className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
                href="#"
              >
                Register
              </a>
            </div>
          </div> */}

          <div className="block md:hidden">
            <button
              className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>
  )
}
