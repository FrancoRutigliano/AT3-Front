
import { useTranslation } from 'react-i18next'
// import { ConnectWallet } from '../components/ConnectWallet'
import { Staking } from '../components/Staking'
import { PeerToPeer } from '../components/PeerToPeer'
// import bg3 from '../assets/lineas.png'
import bg3 from '../assets/pruebas/p9.jpeg'

import { Tutorials } from '../components/Tutorials'
import { Link } from 'react-router-dom'
// import { FelizPrimavera } from '../components/FelizPrimavera'
export const ComoInvertir = () => {

  const { t } = useTranslation("global")

  // const currentLang = i18n.language;

  // const imgStaking2 = currentLang === 'es' ? staking2Es : staking2;
  // const imgStaking = currentLang === 'es' ? stakingEs : staking;


  return (

    <>
      {/* <section className='lg:h-screen flex flex-col no-repeat lg:justify-start justify-center items-center ' style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.7)), url(${bg3})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        
        
      </section> */}
      <section
        className=""

      >
        <div className="overflow-hidden  h-1/3 md:h-1/2 bg-cover bg-no-repeat p-8 md:p-12 lg:px-16 lg:py-24" style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.2)), url(${bg3})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className="relative h-[30rem] flex items-center justify-center ">
            {/* <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url('${at3}')` }}
  /> */}
            {/* <div className="absolute inset-0 bg-black/50  opacity-100 z-10" />  */}

            <div className="relative z-20 flex flex-col justify-center items-center  h-full lg:mb-52">
              {/* <img src={atomico3} alt="atomico" className='w-2/3 lg:w-1/3 max-w-[550px]' /> */}
              <h1 className='bg-custom-gradient bg-clip-text text-transparent text-2xl lg:text-7xl text-center font-bold lg:mb-2 ' style={{ textShadow: '1px 1px 50px black' }}>
                {t("como invertir.inverti y ahorra")}
              </h1>
              <p  className='text-justify  md mt-16 w-4/5 lg:mb-0 text-sm lg:text-xl'>{t("como invertir.como invertir p1")} </p>
              <p className='text-justify mt-2 w-4/5 lg:mb-0 text-sm lg:text-xl'> {t("como invertir.como invertir p1.1")}</p>
              <p className='text-justify mt-2 w-4/5 lg:mb-0 text-sm lg:text-xl'>{t("como invertir.como invertir p2")} </p>
              {/* <p className=' mt-2 text-center w-4/5 lg:mb-0 text-sm lg:text-xl'>{t("como invertir.como invertir p3")} </p> */}
              <div className="mt-4 sm:mt-8 flex justify-between w-4/5 mx-auto">
              <Link to={'/comoInvertir#staking'} className='w-2/3 max-w-[150px]  lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient   py-2 lg:py-3 rounded-md px-6 text-xs sm:text-sm lg:text-sm text-center hover:cursor-pointer flex items-center justify-center'  >
              Staking
              </Link>
              <Link to={'/comoInvertir'} className='w-2/3 max-w-[150px] mx-10  lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient   py-2 lg:py-3 rounded-md px-6 text-xs sm:text-sm lg:text-sm text-center hover:cursor-pointer'  >
              Comprar AT3
              </Link>
              <Link to={'/comoInvertir#p2p'} className='w-2/3 max-w-[150px]  lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient   py-2 lg:py-3 rounded-md px-6 text-xs sm:text-sm lg:text-sm text-center hover:cursor-pointer flex items-center justify-center'  >
              Peer to Peer
              </Link>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* <ConnectWallet /> */}
      <Staking />
      <PeerToPeer />
      {/* <FelizPrimavera/> */}
      <Tutorials />
    </>

  )
}
