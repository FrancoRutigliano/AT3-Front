import staking2 from '../assets/staking2.jpeg'
import stakingES   from '../assets/staking.png'
import stakingEN from '../assets/stakingEN.jpeg'
import { useTranslation } from 'react-i18next'


export const StakingView = () => {
  const {t, i18n} = useTranslation("global")

  // const currentLang = i18n.language;

  // const imgStaking2 = currentLang === 'es' ? staking2Es : staking2;
  // const imgStaking = currentLang === 'es' ? stakingEs : staking;


  return (
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
    src={staking2}
    // className="rounded-lg w-2/3 object-cover sm:h-96 my-auto "
    className='max-w-[200px] lg:max-w-[452px] w-2/3 mx-auto object-contain lg:object-contain sm:h-full'
  />
</section>

{/* <!--
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
--> */}

<section className="overflow-hidden  sm:grid sm:grid-cols-2 pt-16 pb-10 ">
<img
    alt=""
    src={i18n.language === 'es' ? stakingES : stakingEN}
    className="max-w-[200px] lg:max-w-[452px] w-2/3 mx-auto object-contain lg:object-contain sm:h-full  "
  />
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
    <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent  text-3xl font-bold md:text-6xl py-2">
       {t("stakingView.¿Cómo lo puedo hacer?")}
      </h2>

      <p className="text-sm text-white md:mt-4 md:block  lg:text-lg">
      {t("stakingView.¿Cómo lo puedo hacer? descripcion")}

      </p>

      <div className="mt-4 md:mt-8">
        <a
          target='_blank'
          href="https://dapp-at-3.vercel.app/"
          className="mt-5 lg:mt-0 py-2 text-sm w-full max-w-[230px] lg:max-w-[320px] text-center inline-block rounded bg-custom-gradient px-12 lg:py-3 font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Staking
        </a>
      </div>
    </div>
  </div>

 
</section>


    </section>
  )
}
