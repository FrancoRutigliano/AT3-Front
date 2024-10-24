import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import c1 from '../assets/ComprarAt3/c1.avif'
export const Comprar = () => {

    const { t } = useTranslation("global")

    return (


        <>
            <section
                className='overflow-hidden mt-16  flex items-center'
                id='comprarAt3'
                style={{
                    background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.1), rgba(0, 0, 0, 0.1)), url(${c1})`,
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <section className="lg:mt-0 flex flex-col-reverse overflow-hidden sm:grid sm:grid-cols-3 py-10 backdrop-brightness-75">
                   
                    <div className="sm:col-span-2 px-9 md:pl-16  pt-2 pb-10 ">
                        <div className="mx-auto px-2 md:p-0 md:w-full text-left lg:text-left ltr:sm:text-left rtl:sm:text-left">
                            <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent text-2xl lg:text-6xl font-bold md:text-3xl py-2 break-words text-center md:text-left">
                                Comprar Atómico3
                            </h2>
                            <p className='md:pr-12 text-justify  text-xs ms:text-sm text-white md:mt-4 md:block  lg:text-base break-words'>
                               Comprar Atómicos es una opción conveniente y atractiva, ya que representa una medida de inversión segura respaldada por un recurso estratégico como el litio.  Al adquirir Atómicos, estás protegiendo tu capital en un activo con alto potencial de crecimiento, lo que puede ser beneficioso tanto a corto como a largo plazo. <br /> 
<br />
                                Para adquirir Atómicos, simplemente haz clic en el botón a continuación. <br/>
                                 Nos encontramos disponibles en Uniswap, donde podrás realizar tu compra de manera rápida y segura.
                            
                            </p>
                            <div className="mt-4 md:mt-8 flex justify-between md:justify-start">
                                <Link
                                    to={'/ComoInvertir#tutoriales'}
                                    className='w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient2 hover:bg-custom-gradient py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'
                                >
                                    <button>{t("invertir.ver tutoriales")}</button>
                                </Link>
                                <a
                                    className='flex items-center justify-center ml-5 w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-custom-gradient hover:bg-custom-gradient2 py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer'
                                    href='https://app.uniswap.org/explore/tokens/polygon/0x22a79a08ddb74a9f1a4ebe5da75300ad9f1aed76' target='_blank'
                                >
                                    <button>Comprar AT3</button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center px-5 md:px-0'>
                        {/* <img
        alt="Peer to peer"
        src={p2p}
        className='rounded-lg max-w-[150px] lg:object-contain lg:max-w-[350px]'
      /> */}
                    </div>
                </section>
            </section>



        </>
    )
}
