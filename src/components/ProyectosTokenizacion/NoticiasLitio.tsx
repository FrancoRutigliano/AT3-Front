import { CardNews } from "../CardNews"
import at3 from '../../assets/news/at3-image.jpeg'
import litio from '../../assets/news/n4.webp'
import salar from '../../assets/salar.jpg'
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
export const NoticiasLitio = () => {


    const [t] = useTranslation("global")


    return (
        <>
            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="md:flex md:items-end md:justify-between">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl ">
                                {t("proyectosTokenizacion.noticias")}
                            </h2>

                            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
                                {t("proyectosTokenizacion.p8")}

                            </p>
                        </div>

                        <Link
                            to={"/noticias"}
                            target="_blank"
                            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-50 border border-blue-600 px-5 py-3 text-celeste transition hover:bg-blue-200 hover:text-blue-800 md:mt-0"
                        >
                            <span className="font-medium">
                                {t("proyectosTokenizacion.p9")}
                            </span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 rtl:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </Link>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        {/* <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                            <h1 className="text-black">hola</h1>
                        </blockquote> */}

                        {[{
                            title: t("proyectosTokenizacion.n1")
                            ,
                            imagen: litio,
                            link: "https://eleconomista.com.ar/energia/cual-mineral-podria-alcanzar-us-8700-millones-exportaciones-2030-n78652#google_vignette",
                            medio: "El Economista"
                        },

                        { title: t("proyectosTokenizacion.n2"), imagen: at3, link: "https://nacionweb.com.ar/aumento-del-precio-del-litio-impulsa-a-la-criptomoneda-argentina-atomico-3-como-opcion-de-inversion-solida/", medio: "Nación Web" },
                        {
                            title: t("proyectosTokenizacion.n3"),
                            imagen: salar,
                            link: "https://www.elinversorenergetico.com/la-concrecion-de-proyectos-que-estaban-demorados-empezaria-a-reactivarse-tras-aumento-regional-en-el-precio-del-litio/?amp=1#google_vignette",
                            medio: "El Inversor"

                        }
                        ].map(({ title, imagen, link, medio }, index) => (

                            <CardNews
                                key={index}
                                title={title}
                                imagen={imagen}
                                link={link}
                                medio={medio} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}
