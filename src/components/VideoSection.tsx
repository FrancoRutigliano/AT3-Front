import React from 'react'

export const VideoSection = () => {
  return (

    <section className=' flex flex-col justify-center items-center lg:mt-20 '>
      <h1 className='lg:text-5xl font-medium sm:text-4xl bg-custom-gradient bg-clip-text text-transparent mb-20'>Watch the video to learn more!</h1>
      <div className='w-full flex justify-center '>
        <iframe className='rounded-xl' width="900" height="515" src="https://www.youtube.com/embed/NDeiWt9T4rQ?si=XojU1n_azZkOPsk_" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      </div>
    </section>

  )
}

