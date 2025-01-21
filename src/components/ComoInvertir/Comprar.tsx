import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import c1 from '../../assets/ComprarAt3/c1.avif';
import { useEffect, useRef } from "react";

export const Comprar = () => {
    const { t } = useTranslation("global");
    const location = useLocation();
    const comprarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (location.hash === '#comprar' && comprarRef.current) {
            const elementPosition = comprarRef.current.getBoundingClientRect().top + window.scrollY;
            const offset = window.innerWidth < 768 ? 40 : 60;

            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth',
            });
        }
    }, [location]);

    return (
        <>
            <section ref={comprarRef}
                className='overflow-hidden flex items-center'
                id='comprarAt3'
                style={{
                    background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.1), rgba(0, 0, 0, 0.1)), url(${c1})`,
                    backgroundPosition: 'center top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <section className="lg:mt-0 flex flex-col-reverse overflow-hidden sm:grid sm:grid-cols-3 py-10 backdrop-brightness-75">
                    <div className="sm:col-span-2 px-9 md:pl-16 pt-2 pb-10 ">
                        <div className="mx-auto px-2 md:p-0 md:w-full text-left lg:text-left ltr:sm:text-left rtl:sm:text-left">
                            <h2 className="mb-5 text-celeste text-2xl lg:text-6xl font-bold md:text-3xl py-2 break-words text-center md:text-left">
                                {t("comprarAt3.comprarAt3")}
                            </h2>
                            <p className='md:pr-12 text-justify text-xs ms:text-sm text-white md:mt-4 md:block lg:text-base break-words'>
                                {t("comprarAt3.p1")} <br />
                                <br />
                                {t("comprarAt3.p1")} <br />
                                {t("comprarAt3.p3")}
                            </p>
                            <div className="mt-4 md:mt-8 flex justify-between md:justify-start">
                                <Link
                                    to={'/ComoInvertir#tutoriales'}
                                    className='w-2/3 max-w-[150px] lg:max-w-[200px] md:w-full bg-celeste py-2 lg:py-2 rounded-md px-6 text-xs sm:text-sm lg:text-lg text-center hover:cursor-pointer hover:bg-sky-500'
                                >
                                    <button>{t("invertir.ver tutoriales")}</button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className='flex justify-center items-center px-5 md:px-0'>
                        <iframe
                            src="https://atomico3swap.vercel.app/"
                            title="Atomico3 Swap"
                            style={{
                                width: '100%',
                                height: '500px', // Ajusta la altura según sea necesario
                                border: 'none',
                                borderRadius: '8px',
                            }}
                        />
                    </div>
                </section>
            </section>
        </>
    );
}