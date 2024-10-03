
import { useTranslation } from 'react-i18next'
import { ConnectWallet } from '../components/ConnectWallet'
import { Staking } from '../components/Staking'
import { PeerToPeer } from '../components/PeerToPeer'
import bg3 from '../assets/lineas.png'
import { Tutorials } from '../components/Tutorials'
import { FelizPrimavera } from '../components/FelizPrimavera'
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
          background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.7)), url(${bg3})`,
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
              <h1 className='bg-custom-gradient bg-clip-text text-transparent text-3xl lg:text-7xl text-center font-bold mt-10 lg:mt-32 lg:mb-2 lg:py-5' style={{ textShadow: '1px 1px 50px black' }}>{t("como invertir.como invertir")}</h1>
              <h2 className='text-center text-md px-5  mb-24 mt-5 lg:mb-0 lg:text-xl'>{t("como invertir.como invertir p1")} <br />{t("como invertir.como invertir p2")} <br /> {t("como invertir.como invertir p3")}  </h2>
              <div className="mt-4 sm:mt-8 flex justify-start">
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* <ConnectWallet /> */}
      <Staking />
      <PeerToPeer />
      <FelizPrimavera/>
      <Tutorials/>
    </>

  )
}
