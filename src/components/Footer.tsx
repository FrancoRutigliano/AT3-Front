import atomicLogo from '../assets/atomicLogo.png'
import facebook from '../assets/social_networks/facebook.png'
import instagram from '../assets/social_networks/instagram.png'
import linkedin from '../assets/social_networks/linkedin.png'
import telegram from '../assets/social_networks/telegram.png'
import tiktok from '../assets/social_networks/tiktok.png'
import youtube from '../assets/social_networks/youtube.png'
import twitter from '../assets/social_networks/twitter.png'
import phone from '../assets/contact_icons/phone.png'
import mail from '../assets/contact_icons/correo.png'
import location from '../assets/contact_icons/location.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
// import { Link } from 'react-router-dom'

export const Footer = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <footer className="" id='contact'>
        <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="text-teal-600">
              <img src={atomicLogo} alt="" className='w-60 mx-auto lg:mx-0' />
            </div>

          </div>

          <div
            className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16"
          >
            <div>
              <p className="font-medium text-celeste">{t("footer.redes sociales")}</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li className='flex items-center '>
                  <img src={facebook} alt="facebook" className='w-4 lg:w-5 mr-2' />
                  <a href="https://www.facebook.com/profile.php?id=61565306192045&mibextid=ZbWKwL" className="text-white transition hover:text-blue-500 hover:underline" target='_blanck'> Facebook</a>
                </li>

                <li className='flex items-center' >
                  <img src={instagram} alt="insta" className='w-4 lg:w-5 mr-2' />
                  <a href="#" className="text-white transition hover:text-blue-500 hover:underline"> Instagram </a>
                </li>

                <li className='flex items-center' >
                  <img src={telegram} alt="telegram" className='w-4 lg:w-5 mr-2' />
                  <a href="#" className="text-white transition hover:text-blue-500 hover:underline"> Telegram </a>
                </li>

                <li className='flex items-center' >
                  <img src={twitter} alt="twitter" className='w-4 lg:w-5 mr-2' />
                  <a href="https://x.com/Atomico3oficial?t=x7LBcGkemJSaTbmVD1q2Hw&s=09" className="text-white transition hover:text-blue-500 hover:underline"> X</a>
                </li>

                <li className='flex items-center' >
                  <img src={tiktok} alt="tiktok" className='w-4 lg:w-5 mr-2' />
                  <a href="https://www.tiktok.com/@atomico3oficial?_t=8oPdJMeOgH0&_r=1" className="text-white transition hover:text-blue-500 hover:underline">Tiktok </a>
                </li>
                <li className='flex items-center' >
                  <img src={linkedin} alt="linkedin" className='w-4 lg:w-5 mr-2' />
                  <a href="https://www.linkedin.com/company/atomico-3-sa/posts/" className="text-white transition hover:text-blue-500 hover:underline">Linkedin </a>
                </li>
                <li className='flex items-center' >
                  <img src={youtube} alt="youtube" className='w-4 lg:w-5 mr-2' />
                  <a href="https://www.youtube.com/@atomico3oficial" className="text-white transition hover:text-blue-500 hover:underline">Youtube </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-celeste">{t("footer.contacto")}</p>

              <ul className="mt-4 space-y-4 text-sm">
                <li className='flex items-center'>
                  <img src={phone} alt="phone" className='w-6 lg:w-8 lg:mr-2 mr-1' />
                  <a href="#" className="text-white transition hover:cursor-default">+595 992 544500 </a>
                </li>

                <li className='flex items-center'>
                  <img src={mail} alt="mail" className='w-4 lg:w-5 ml-2 lg:mr-4 mr-3' />
                  <a href="mailto:info@atomico3.io" className="text-white transition hover:text-blue-500 hover:underline">
                    Info@atomico3.io
                  </a>
                </li>

                <li className='flex items-center'>
                <img src={location} alt="location" className='w-4 lg:w-5 ml-2 lg:mr-4 mr-3' />

                  <span className="text-white transition ">Av. Santa Teresa y Coronel Escurra - Ycua Sati. Asunción Paraguay </span>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-celeste">{t("footer.links utiles")}</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a href="https://dapp-at-3.vercel.app/" className="text-white transition hover:text-blue-500 hover:underline"> {t("footer.Comprar Atómico3")}</a>
                </li>

                <li>
                  <a href="https://dapp-at-3.vercel.app/" className="text-white transition hover:text-blue-500 hover:underline"> Staking </a>
                </li>

                <li>
                  <a href="#faq" className="text-white transition hover:text-blue-500 hover:underline"> {t("footer.Preguntas Frecuentes")}</a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-medium text-celeste">Legal</p>

              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <Link to={"/legal"} className="text-white transition hover:text-blue-500 hover:underline"> {t("footer.Términos y Condiciones")} </Link>
                </li>

                {/* <li>
                  <a href="#" className="text-white transition hover:opacity-75">{t("footer.Política de privacidad")} </a>
                </li> */}

              </ul>
            </div>
          </div>

          <p className="text-xs text-white">&copy; 2024. Atómico3. {t("footer.todos los derechos reservados")}</p>
        </div>
      </footer>
    </>
  )
}
