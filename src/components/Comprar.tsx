import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import p2p from '../assets/Investors.png'
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
                   
                    <div className="sm:col-span-2 pl-16  pt-2 pb-10">
                        <div className="mx-auto px-10 md:p-0 md:w-full text-left lg:text-left ltr:sm:text-left rtl:sm:text-left">
                            <h2 className="mb-5 bg-custom-gradient bg-clip-text text-transparent text-2xl lg:text-6xl font-bold md:text-3xl py-2 break-words text-left">
                                Comprar Atómico3
                            </h2>
                            <p className='text-left text-xs ms:text-sm text-white md:mt-4 md:block lg:text-base break-words'>
                               Comprar Atómicos es una opción conveniente y atractiva, ya que representa una medida de inversión segura respaldada por un recurso estratégico como el litio.  Al adquirir Atómicos, estás protegiendo tu capital en un activo con alto potencial de crecimiento, lo que puede ser beneficioso tanto a corto como a largo plazo. <br /> 

                               {/* <br /> Puedes adquirir Atómicos haciendo click en el botón que se encuentra debajo o mediante un transferencia bancaria.
                                Para acudir a esta segunda opción debes enviarnos un correo electrónico a <span className="text-blue-500 underline">support@atomico3.io</span> solicitando la compra por transferencia bancaria y consignando todos tus datos para que podamos contactarte y realizar la transferencia bancaria de cuenta a cuenta. */}
                                <br />
                                Puedes comprar Atómicos cliqueando en el botón de abajo.
                                <br />

                                Actualmente estamos disponibles en Quickswap. 
                                {/* <br /> <br /> Estaremos disponibles en diversas plataformas Dex como Paraswap y Uniswap, donde podrás ver y aprovechar el valor de mercado en tiempo real. <br /> Prepárate para explorar posibilidades con Atómicos. */}
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
                                    href='https://dapp-at-3.vercel.app/' target='_blank'
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
