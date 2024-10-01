
import { useTranslation } from 'react-i18next'
import { ConnectWallet } from '../components/ConnectWallet'
import { Staking } from '../components/Staking'
import { PeerToPeer } from '../components/PeerToPeer'
import bg3 from '../assets/bg3.avif'
export const ComoInvertir = () => {
  const { t } = useTranslation("global")

  // const currentLang = i18n.language;

  // const imgStaking2 = currentLang === 'es' ? staking2Es : staking2;
  // const imgStaking = currentLang === 'es' ? stakingEs : staking;


  return (

    <>
      <div className='lg:h-screen flex flex-col no-repeat justify-start items-center ' style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.7)), url(${bg3})`,
        backgroundPosition: 'center top',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>

        <h1 className='bg-custom-gradient bg-clip-text text-transparent text-4xl lg:text-7xl text-center font-bold lg:mt-32 mb-10' style={{ textShadow: '1px 1px 50px black' }}>{t("como invertir.como invertir")}</h1>
        <h2 className='text-center text-md lg:text-xl'>En esta sección encontraras tutoriales para aprender las diferentes maneras de invertir en Atómico3 <br /> ¡Desliza hacia abajo y comienza a invertir hoy! </h2>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-azul to-transparent pointer-events-none"></div>

      <ConnectWallet />
      <Staking />
      <PeerToPeer />
    </>

  )
}
