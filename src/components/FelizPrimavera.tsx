import { useTranslation } from 'react-i18next'
import flores from '../assets/flores.jpg'
export const FelizPrimavera = () => {

    const { t } = useTranslation("global")



    return (
        <div>
            <section className='mt-16'>
                <h1 className='bg-custom-gradient bg-clip-text text-transparent text-4xl lg:text-7xl text-center font-bold lg:mt-32  pt-5' >Feliz Primavera</h1>
                <section className=" lg:mt-0 flex flex-col-reverse overflow-hidden  sm:grid sm:grid-cols-2 py-10">
                    <div className="py-5 px-1 md:p-12 lg:px-16 lg:py-24">
                        <div className="mx-auto max-w-xl text-center lg:text-left ltr:sm:text-left rtl:sm:text-right">
                            <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent text-2xl lg:text-6xl font-bold md:text-3xl py-2 break-words">
                                {/* {t("como invertir.peer to peer")} */}
                                ¿Cómo funciona?

                            </h2>

                            <p className='text-md lg:text-2xl'>
                                {/* {t("como invertir.peer to peer p1")} */}
                                Por tus compras de AT3 (nuevos) que hagas en QUICKSWAP (DEX), entre las 0:00hs del 23/09/24 y hasta las 23:59 hs del día 7/10/24, desde Atómico3 te vamos a regalar un 5% adicional de tus compras de AT3 (nuevos).
                                <br />
                                ¡Descarga el instructivo y aprende cómo obtenerlo!


                            </p>
                            <a
                                href=''
                                download
                                className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-blue-500"
                            >
                              Descargar Instructivo
                            </a>

                        </div>
                    </div>
                    <div className=' flex justify-center items-center px-5 md:px-0' >

                        <img
                            alt=""
                            // src={i18n.language === 'es' ? stakingES : stakingEN}
                            src={flores}

                            className='rounded-lg  lg:object-contain max-w-[400px]  lg:max-w-[600px]'

                        />
                    </div>
                </section>
            </section>
        </div>
    )
}
