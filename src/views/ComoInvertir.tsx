import staking2 from '../assets/staking2.jpeg'
import stakingES   from '../assets/staking.png'
import stakingEN from '../assets/stakingEN.jpeg'
import { useTranslation } from 'react-i18next'
import { ConnectWallet } from '../components/ConnectWallet'

export const ComoInvertir = () => {
  const {t, i18n} = useTranslation("global")

  // const currentLang = i18n.language;

  // const imgStaking2 = currentLang === 'es' ? staking2Es : staking2;
  // const imgStaking = currentLang === 'es' ? stakingEs : staking;


  return (

    <>

 <h1 className='bg-custom-gradient bg-clip-text text-transparent text-7xl text-center font-bold mt-20 mb-10'>¿Cómo invertir en Atómico3?</h1>
<h2 className='text-center text-xl'>Comprar Atómico3, Staking, Peer to Peer y Feliz Primavera: En esa sección aprenderás sobre cada una de ellas </h2>
    <ConnectWallet/>
    <section>
<section className="pt-20 lg:mt-0 flex flex-col-reverse overflow-hidden  sm:grid sm:grid-cols-2 py-10">
  <div className="py-5 px-1 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
      <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent  text-3xl font-bold md:text-6xl py-2 break-words">
      {t("stakingView.¿Qué es el Staking?")}
      </h2>

      <p className=" text-sm text-white md:mt-4 md:block  lg:text-lg break-words">
     {t("stakingView.¿Qué es el Staking? Descripcion")}
      </p>

      <div className="mt-4 md:mt-8">
        <a
          target='_blank'
          href="https://dapp-at-3.vercel.app/"
          className="mt-4 lg:mt-0 py-2 text-sm w-full max-w-[230px] lg:max-w-[320px] text-center inline-block rounded bg-custom-gradient px-12 lg:py-3 font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Staking
        </a>
      </div>
    </div>
  </div>

  <img
    alt=""
    src={i18n.language === 'es' ? stakingES : stakingEN}
    // className="rounded-lg w-2/3 object-cover sm:h-96 my-auto "
    className='max-w-[200px] lg:max-w-[452px] w-2/3 mx-auto object-contain lg:object-contain sm:h-full'
  />
</section>

{/* <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
--> */}

<section className="overflow-hidden  sm:grid sm:grid-cols-2 pt-16 pb-10 ">
{/* <img
    alt=""
    src={i18n.language === 'es' ? stakingES : stakingEN}
    className="max-w-[200px] lg:max-w-[452px] w-2/3 mx-auto object-contain lg:object-contain sm:h-full  "
  /> */}
  <div className="p-8 md:p-12 lg:px-16 lg:py-24 ">
    <div className="mx-auto max-w-xl text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
    <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent  text-3xl font-bold md:text-6xl py-2">
       {/* {t("stakingView.¿Cómo lo puedo hacer?")} */}
       ¿Cómo hacer staking?
      </h2>

      <p className="text-sm text-white md:mt-4 md:block  lg:text-lg">
      {/* {t("stakingView.¿Cómo lo puedo hacer? descripcion")} */}
        ¡Mira el video a continuación!
      </p>

      <div className="mt-4 md:mt-8">
        {/* <a
          target='_blank'
          href="https://dapp-at-3.vercel.app/"
          className="mt-5 lg:mt-0 py-2 text-sm w-full max-w-[230px] lg:max-w-[320px] text-center inline-block rounded bg-custom-gradient px-12 lg:py-3 font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Staking
        </a> */}
       
      </div>
      
      
    </div>
    
  </div>
  <div className=' flex items-center justify-center p-5 md:p-0'>

  <iframe className='rounded-lg' width="560" height="315" src="https://www.youtube.com/embed/VUX8-tJ7ITU?si=Z30XNlPIFHCuq2w5" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
  </div>

 
</section>


    </section>
    </>

  )
}