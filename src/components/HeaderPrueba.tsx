import { useTranslation } from 'react-i18next'
import nave from '../assets/nave-cardano.jpeg'
export const HeaderPrueba = () => {
  const [t] = useTranslation("global")

  return (
    <header className="h-screen bg-dark-light flex">
        {/* contenedor imagen */}
        
        <div className='bg-dark-blue w-2/3'>
        <div className=" b   text-center md:text-left   px-2  bg--20 g-sky-200  ">
              <h1 className=' font-bold text-shadow-bl text-5xl md:text-6xl lg:text-7xl mt-4 '>{t("header.bienvenido")}</h1>

              <p className='my-5 text-sm md:text-base lg:text-md text-shadow w-1/2'>
                {t("header.criptoactivo")}
              </p>
              {/* BOTONES */}
              <div className='flex w-full bg-sky-2 py-3' >
                {/* <a className=' hover:cursor-pointer bg-white text- hidden md:block  max-w-[200px] border-2 border-[#6D6D6D] text-[#6D6D6D]  py-2 lg:py-3 rounded-md w-full lg:mb-3  px-6 text-center  hover:font-bold'>{t("navbar.iniciar sesion")}</a>

                <a className='ml-2 hover:cursor-pointer bg-white text- hidden md:block  max-w-[200px] border-2 border-[#6D6D6D] text-[#6D6D6D]  py-2 lg:py-3 rounded-md w-full lg:mb-3  px-6 text-center  hover:font-bold'>
                  {t("navbar.registrarse")}
                </a> */}
              </div>

              <div className=' flex flex-col items-center md:items-start justify-between w-full lg:pr-36 space-y-3 lg:mt-3'>

              </div>
            </div>
        </div>
        <div className=' h-full'>
    <img src={nave} alt="" className='h-full w-full object-cover' />
        </div>
    </header>
  )
}
