
import { useTranslation } from 'react-i18next'
import { ConnectWallet } from '../components/ConnectWallet'
import { Staking } from '../components/Staking'

export const ComoInvertir = () => {
  const { t } = useTranslation("global")

  // const currentLang = i18n.language;

  // const imgStaking2 = currentLang === 'es' ? staking2Es : staking2;
  // const imgStaking = currentLang === 'es' ? stakingEs : staking;


  return (

    <>
      <div className='lg:h-screen flex flex-col justify-start items-center '>

        <h1 className='bg-custom-gradient bg-clip-text text-transparent text-4xl lg:text-7xl text-center font-bold lg:mt-32 mb-10'>¿Cómo invertir en Atómico3?</h1>
        <h2 className='text-center text-md lg:text-xl'>Comprar Atómico3, Staking, Peer to Peer y Feliz Primavera: En esa sección aprenderás sobre cada una de ellas </h2>
      </div>
      <ConnectWallet />
      <Staking/>
    </>

  )
}
