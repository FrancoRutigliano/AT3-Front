
import { useTranslation } from 'react-i18next'
import { ConnectWallet } from '../components/ConnectWallet'
import { Staking } from '../components/Staking'
import { PeerToPeer } from '../components/PeerToPeer'
import bg3 from '../assets/lineas.png'
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
        <h2 className='text-center text-md lg:text-xl'>{t("como invertir.como invertir p1")} <br />{t("como invertir.como invertir p2")} </h2>
      </div>
     

      <ConnectWallet />
      <Staking />
      <PeerToPeer />
    </>

  )
}
