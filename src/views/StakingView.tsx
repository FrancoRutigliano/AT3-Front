// import React from 'react'
import staking2 from '../assets/staking2.jpeg'
import staking   from '../assets/staking.png'


export const StakingView = () => {
  return (
    <section>
    {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

<section className="pt-20 lg:mt-0 flex flex-col-reverse overflow-hidden bg-dark-light sm:grid sm:grid-cols-2 py-10">
  <div className="py-5 px-1 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
      <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent  text-3xl font-bold md:text-6xl py-2">
        What is Staking?
      </h2>

      <p className=" text-sm text-white md:mt-4 md:block  lg:text-lg">
      It consists of depositing your Atómico3 in a smart contract (0xAAF3AC68Bf80d995d7793a401653713A05a67B08), keeping them there for the term you choose, benefiting from the interest according to the chosen term. They will be returned to your wallet once the term has expired (unless you choose to renew it for a new term).
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="mt-1 lg:mt-0 py-2 text-sm w-full max-w-[230px] lg:max-w-[320px] text-center inline-block rounded bg-custom-gradient px-12 lg:py-3 font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
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

<section className="overflow-hidden bg-dark-light sm:grid sm:grid-cols-2 ">
<img
    alt=""
    src={staking}
    className="h-56 w-full object-contain sm:h-full p-5 lg:rounded-xl  "
  />
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
    <h2 className="bg-custom-gradient bg-clip-text text-transparent  text-2xl font-bold md:text-6xl py-2">
        How can I do It ?
      </h2>

      <p className="hidden text-white md:mt-4 md:block lg:text-xl">
      To do this I must click on button below! Then, in the pop-up window, I will be asked to link my wallet (to be able to say from where my AT3 will come from). There will appear a form that I must fill in with my personal data and a contact email, this will allow me to choose the AT3 I want to place and the possible terms (60 days, 180 and 240). Finally, a confirmation will appear to confirm that it has been completed correctly.
      </p>

      <div className="mt-4 md:mt-8">
        <a
          href="#"
          className="inline-block rounded bg-emerald-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-emerald-700 focus:outline-none focus:ring focus:ring-yellow-400"
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
