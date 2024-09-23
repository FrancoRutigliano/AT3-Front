
// import atomico from '../assets/Atomico.png'

// export const Header = () => {
//   return (
//     <header className='flex  bg-red-200'>
//       <div className='bg-lime-200 w-1/2  flex items-center justify-center  h-screen'>

//         <div className="pl-14 mb-20 ">
//           <h1 className='bg-custom-gradient bg-clip-text text-transparent text-8xl'>Welcome to Atómico3</h1>
//           <p className='my-5'>A crypto asset backed by lithium, promoting sustainability by reducing carbon emissions through tokenized incentives.</p>
//           <div className='flex flex-col justify-between w-full pr-36 '>
//             <button className='bg-custom-gradient py-2 rounded-md ' >Staking</button>
//             <button className='relative   py-[1px] rounded-md my-2 px-[0.8px] bg-transparent'>
//               <span className="absolute inset-0 p-px bg-gradient-to-r from-purple-600 to-cyan-400 rounded-md"></span>
//               <span className="relative block bg-dark-blue text-white rounded-md px-6 py-2 text-black ">
//                 Download Wallpaper
//               </span>
//             </button>
//             <button className='bg-custom-gradient py-2 rounded-md ' >Buy Token</button>
//           </div>
//         </div>

//       </div>
//       <div  className='bg-sky-200 w-1/2  flex items-center justify-center'>
//         <img src={atomico} alt="" className='mb-20 w-2/3'/>
//       </div>
//     </header>
//   )
// }
import { useTranslation } from 'react-i18next'
import atomico from '../assets/Atomico.png'
import { useEffect, useState } from 'react';
import './Header.css'
export const Header = () => {
  // const [t, i18n] = useTranslation("global")
  const [t ] = useTranslation("global")
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activar la animación al montar el componente
    setAnimate(true);
    const timer = setTimeout(() => {
      setAnimate(false);
    }, 1000); // Duración de la animación

    return () => clearTimeout(timer);
  }, []);
  return (
    <header className='flex flex-col-reverse md:flex-row '>
      {/* Sección de texto */}
      <div className=' w-full md:w-1/2 flex items-center justify-center h-auto md:h-screen p-4  md:p-0 lg:p-0  lg:mt-10'>
        <div className=" mb-10 lg:mb-0  text-center md:text-left  md:pl-8 lg:pl-20">
          <h1 className=' font-bold bg-custom-gradient bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl '>{t("header.bienvenido")}</h1>
          {/* <p className='my-5 text-sm md:text-base lg:text-md lg:pr-20'>
            A crypto asset backed by lithium, promoting sustainability by reducing carbon emissions through tokenized incentives.
          </p> */}
          <p className='my-5 text-sm md:text-base lg:text-md lg:pr-20'>
          {t("header.criptoactivo")}
          </p>


          <div className='flex flex-col items-center md:items-start justify-between w-full lg:pr-36 space-y-3 lg:mt-3'>
            {/* <a href="/public/whitepaper.pdf" download='whitepaper.pdf' className='max-w-[270px] md:max-w-[298px] lg:max-w-[330px] border border-gray-400 text-gray-300 py-2 lg:py-3 rounded-md w-full  px-6 text-center hover:bg-custom-gradient2 hover:font-bold'> */}
            <a href="https://dapp-at-3.vercel.app/stakingplus" target='_blank'  className='max-w-[270px] md:max-w-[298px] lg:max-w-[330px]  text-white py-2 lg:py-3 rounded-md w-full  px-6 text-center bg-custom-gradient2 font-medium hover:bg-custom-gradient   '>
              <button  className={animate ? 'animate-shake' : ''}>{t("header.feliz primavera")}</button>
            </a>
              
            <a href="https://dapp-at-3.vercel.app/" target='_blank' className='max-w-[270px] md:max-w-[298px] lg:max-w-[330px] bg-custom-gradient hover:bg-custom-gradient2 hover:font-bold py-2 lg:py-3 rounded-md w-full px-6 text-center'>

              <button className=''>{t("header.comprar token")}</button>
            </a>
            <a href="https://dapp-at-3.vercel.app/" target='_blank' className='max-w-[270px] md:max-w-[298px] lg:max-w-[330px] bg-custom-gradient hover:bg-custom-gradient2 hover:font-bold py-2 lg:py-3 rounded-md w-full px-6 text-center'>

              <button className='' >Staking</button>
            </a>
            <a href="https://drive.google.com/uc?export=download&id=1nGFGAarX3gzUM2ydfFoRhAYQvV0SS_hV"  className='md:hidden max-w-[270px] md:max-w-[298px] lg:max-w-[330px] border border-gray-400 text-gray-300 py-2 lg:py-3 rounded-md w-full  px-6 text-center hover:bg-custom-gradient2 hover:font-bold'>
                <button className='text-sm '>{t("header.whitepaper")}</button>
              </a>
          </div>
        </div>
      </div>

      {/* Sección de imagen */}
      <div className=' w-full md:w-1/2 flex flex-col items-center justify-center mt-20 md:mt-10 lg:mt-0'>
        <img src={atomico} alt="Atomico Logo" className=' max-w-[205px] lg:max-w-[400px] w-1/3 md:w-2/3  md:w-full md:mb-20 lg:mb-0 md:mt-0  ' />
        <a href="https://drive.google.com/uc?export=download&id=1nGFGAarX3gzUM2ydfFoRhAYQvV0SS_hV"  className='hidden md:block max-w-[270px] md:max-w-[298px] lg:max-w-[330px] border border-gray-400 text-gray-300 py-2 lg:py-3 rounded-md w-full  px-6 text-center hover:bg-custom-gradient2 hover:font-bold'>
                <button className='text-sm '>{t("header.whitepaper")}</button>
              </a>
      </div>
    </header>
  )
}
