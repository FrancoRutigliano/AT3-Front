import { useTranslation } from 'react-i18next'
// import staking2 from '../assets/Investors.png'
import p2p from '../assets/p2p.jpg'
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';


export const PeerToPeer = () => {
    const { t } = useTranslation("global")
    const location = useLocation();
    const p2pRef = useRef<HTMLDivElement>(null); 
  
    useEffect(() => {
      if (location.hash === '#p2p' && p2pRef.current) {
        // Obtener la posición del elemento
        const elementPosition = p2pRef.current.getBoundingClientRect().top + window.scrollY;
        
        // Ajustar el desplazamiento según el tamaño de la pantalla
        const offset = window.innerWidth < 768 ? 30 : 200; // Menos desplazamiento en pantallas pequeñas (<768px)
    
        window.scrollTo({
          top: elementPosition - offset, // Ajusta la posición sumando o restando píxeles según la pantalla
          behavior: 'smooth', // Desplazamiento suave
        });
      }
    }, [location]);
    return (
        <>
            <section className='mt-16' ref={p2pRef} id='p2p'>
                {/* <h1 className='bg-custom-gradient bg-clip-text text-transparent text-4xl lg:text-7xl text-center font-bold lg:mt-32  pt-5' >Peer to Peer</h1> */}
                <section className=" lg:mt-0 flex flex-col-reverse overflow-hidden  sm:grid sm:grid-cols-2 py-10">
                    <div className="py-5 px-1 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent text-2xl lg:text-6xl font-bold md:text-3xl py-2 break-words">
                                {t("como invertir.peer to peer")}

                            </h2>

                            <p className='text-md lg:text-2xl'>
                                {t("como invertir.peer to peer p1")}


                            </p>
                            <p className='text-md lg:text-2xl'>
                                {t("como invertir.peer to peer p2")}
                            </p>


                        <div className="mt-4 md:mt-8 flex justify-center lg:justify-start ">
                <Link to={'/ComoInvertir#tutoriales'} className='w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient   py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'  >

                  <button className=''>{t("invertir.ver tutorial")}</button>
                </Link>
                <a className='ml-5 w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient hover:bg-custom-gradient2    py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'
                  href='https://dapp-at-3.vercel.app/' target='_blank'>
                  <button className='' >Peer to Peer</button>
                </a>
              </div>
                        </div>
                        






                        
                    </div>
                    <div className=' flex justify-center items-center px-5 md:px-0' >

                        <img
                            alt=""
                            // src={i18n.language === 'es' ? stakingES : stakingEN}
                            src={p2p}

                            className='rounded-lg  lg:object-contain max-w-[400px]  lg:max-w-[600px]'

                        />
                    </div>
                </section>
            </section>
{/* TUTORIAL */}
            {/* <section className='mt-28'>
                <section className="">
                    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h2 className="text-center lg:text-left bg-custom-gradient bg-clip-text text-transparent text-3xl md:text-3xl lg:text-6xl font-bold">
                                {t("como invertir.peer to peer p3")}

                            </h2>
                        </div>

                        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">

                            <div className="relative overflow-hidden pb-[56.25%] h-0 max-w-[600px] w-full mx-auto">
                                <iframe className="absolute top-0 left-0 w-full h-full rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/nnGQIAwvpBs?si=RFUnBQZ1RBBmT1N6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                            <div className="lg:py-16">
                                <article className="space-y-4 text-gray-200">
                                    <p className="text-md lg:text-2xl text-center lg:text-left">
                                        {t("como invertir.peer to peer p4")}

                                    </p>

                                    <p className="text-md lg:text-2xl text-center lg:text-left">
                                        {t("como invertir.peer to peer p5")}

                                    </p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>
            </section> */}
        </>
    )
}

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/nnGQIAwvpBs?si=0z8VyvJh38nMeiNZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> */ }