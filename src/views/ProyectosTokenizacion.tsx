import { useRef, useEffect } from 'react';
import video from '../assets/video.mp4'
import { LitioInfo } from '../components/ProyectosTokenizacion/LitioInfo';
import { NoticiasLitio } from '../components/ProyectosTokenizacion/NoticiasLitio';
import { useTranslation } from 'react-i18next';
export const ProyectosTokenizacion = () => {
    const videoRef =  useRef<HTMLVideoElement>(null);
    const [t] = useTranslation("global")

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.onloadedmetadata = () => {
                video.currentTime = 2; // Ajusta el tiempo de inicio al segundo 5
                video.play();
            };
        }
    }, []);

    return (
        <>

        <section className="relative overflow-hidden">
            {/* Video de fondo */}
            <video
                ref={videoRef}
                src={video}  // Reemplaza "ruta-del-video.mp4" con la URL o ruta de tu video
                autoPlay
                loop
                muted
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
            ></video>

            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>

            <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
                <div className="bg-gray-500/25 p-10 max-w-xl flex flex-col justify-center items-center text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                      {t("proyectosTokenizacion.proyectos de")}
                        <strong className="block font-extrabold text-blue-800">
                      {t("proyectosTokenizacion.tokenizacion")}
                            
                             </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                    {t("proyectosTokenizacion.p1")}

                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            className="block w-full rounded bg-blue-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                        >
                                            {t("proyectosTokenizacion.p2")}

                        </a>

                        <a
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-blue-800 shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                        >
                                                {t("proyectosTokenizacion.p3")}

                        </a>
                    </div>
                </div>
            </div>
        </section>
        <LitioInfo/>
        <NoticiasLitio/>
        </>

    );
}

