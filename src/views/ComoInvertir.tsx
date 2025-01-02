
// import { ConnectWallet } from '../components/ConnectWallet'
import { Staking } from '../components/ComoInvertir/Staking'
import { PeerToPeer } from '../components/ComoInvertir/PeerToPeer'
// import bg3 from '../assets/lineas.png'
// import bg3 from '../../assets/pruebas/p9.jpeg'


import { Tutorials } from '../components/ComoInvertir/Tutorials'
import { Comprar } from '../components/ComoInvertir/Comprar'
import { InvertirHeader } from '../components/ComoInvertir/InvertirHeader'
// import { Halloween } from '../components/Halloween'
export const ComoInvertir = () => {


  // const currentLang = i18n.language;

  // const imgStaking2 = currentLang === 'es' ? staking2Es : staking2;
  // const imgStaking = currentLang === 'es' ? stakingEs : staking;


  return (

    <>

      <InvertirHeader />
      <Staking />
      <Comprar />
      <PeerToPeer />
      {/* <Halloween/> */}
      <Tutorials />
    </>

  )
}
