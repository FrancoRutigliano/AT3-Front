// import React from 'react'

export const VideoSection = () => {
  return (

    <section className=' flex flex-col justify-center items-center h-1/2 mt-20 mb-20 lg:mb-32  '>
      <h1 className='text-3xl px-5 text-center lg:text-5xl font-bold sm:text-4xl bg-custom-gradient bg-clip-text text-transparent  lg:mt-0 mb-20'>¡Mira el video para conocer más!</h1>
      <div className="w-full flex justify-center max-w-[600px] px-5 lg:px-0">
  <div className="relative w-full max-w-4xl h-0 overflow-hidden pb-[56.25%]">
    <iframe
      className="absolute top-0 left-0 w-full h-full rounded-xl"
      src="https://www.youtube.com/embed/NDeiWt9T4rQ?si=XojU1n_azZkOPsk_"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen>
    </iframe>
  </div>
</div>

    </section>

  )
}

