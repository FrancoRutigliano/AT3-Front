import { useTranslation } from 'react-i18next'
// import staking2 from '../assets/Investors.png'
// import p2p from '../assets/p2p.jpg'
// import p23 from '../assets/peertopeer.jpeg'
// import p23 from '../assets/peertopeer.jpeg'

// import p2p from '../assets/peertopeer (2).jpeg'
// import p2p from '../assets/p2pcel.jpeg'
import p2p from '../assets/compraat3.jpeg'



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
            const offset = window.innerWidth < 768 ? 40 : 20; // Menos desplazamiento en pantallas pequeñas (<768px)

            window.scrollTo({
                top: elementPosition - offset, // Ajusta la posición sumando o restando píxeles según la pantalla
                behavior: 'smooth', // Desplazamiento suave
            });
        }
    }, [location]);
    return (
        <>
            <section className=' ' ref={p2pRef} id='p2p'>
                {/* <h1 className='bg-custom-gradient bg-clip-text text-transparent text-4xl lg:text-7xl text-center font-bold lg:mt-32  pt-5' >Peer to Peer</h1> */}
                <section className=" lg:mt-0 flex flex-col-reverse overflow-hidden  sm:grid sm:grid-cols-3 py-10">
                    <div className=" sm:col-span-2 py-5  md:p-12 lg:pl-7 lg:pr-2  lg:py-24 ">
                        <div className=" mx-auto px-10  md:p-0 md:w-full  text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent text-2xl lg:text-6xl font-bold md:text-3xl py-2 break-words">
                                {t("como invertir.peer to peer")}

                            </h2>

                            <p className=' md:pr-12 text-justify  text-xs ms:text-sm text-white md:mt-4 md:block  lg:text-base break-words'>
                                {t("como invertir.peer to peer p1")}
                               <br />
                                <br />
                                {t("como invertir.peer to peer p2")}
                                <br />
                                <br />
                                {t("como invertir.peer to peer p2.1")}  
                                {t("como invertir.peer to peer p2.1.1")} <span className='text-blue-500 underline'>support@atomico3.io</span>  

                                {t("como invertir.peer to peer p2.1.2")} 
                                <br /> <br />
                                {t("como invertir.peer to peer p2.2")}

                                

                            </p>



                            <div className="mt-4 md:mt-8 flex justify-between md:justify-start ">
                                <Link to={'/ComoInvertir#tutoriales'} className='w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient   py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'  >

                                    <button className=''>{t("invertir.ver tutoriales")}</button>
                                </Link>
                                <a className='flex items-center justify-center ml-5 w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient hover:bg-custom-gradient2    py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'
                                    href='https://dapp-at-3.vercel.app/' target='_blank'>
                                    <button className='' >Peer to Peer</button>
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className='flex justify-center items-center px-5 md:px-0' >

                        <img
                            alt="Peer to peer"
                            src={p2p}

                            className='rounded-lg max-w-[150px] lg:object-contain   lg:max-w-[350px]'

                        />

                    </div>
                </section>
            </section>

        </>
    )
}
