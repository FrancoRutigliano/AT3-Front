import { useTranslation } from "react-i18next";
import arrowtop from '../../assets/arrowtop.png'
import { faqForLawTitles } from "../../Info/Legal";

export const FaqForLaw = () => {

    const [t] = useTranslation("faqForLaw");
    const titles = faqForLawTitles(t);


    const handleAnchorClick = (e: any, targetId: any) => {
        e.preventDefault();

        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            // Ajusta el desplazamiento aquí
            const offset = 110; // Cantidad de píxeles para desplazarse hacia arriba
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

            // Desplazarse suavemente a la sección ajustada
            window.scrollTo({
                top: elementPosition - offset,
                behavior: "smooth",
            });
        }
    };
    return (
        <section >
            <h1 className="text-2xl md:text-3xl lg:text-5xl text-center mt-20 mb-5 md:mb-20 md:w-2/3 md:mx-auto md:leading-snug">{t("faqForLaw.faqForLaw")}</h1>

            <div className="flex relative md:flex-row flex-col">
                {/* Columna de Títulos */}
                <div className="md:block w-full md:w-1/4 bg-gray-100 p-4 md:rounded-lg  shadow-md mr-4 md:sticky lg:top-20 max-[768px]:max-h-[160px] rounded-t-lg  md:h-screen overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4 text-black">{t("faqForLaw.titles.indice")}</h2>
                    <ul className="list-decimal text-black list-inside">
                        {titles.map((section, index) => (
                            <li key={index} className="p-2 md:p-4 border-l-4 border-celeste text-xs md:text-sm">
                                <a href={`#${section.id}`} className="text-black hover:text-celeste hover:font-medium transition duration-150 ease-out " onClick={(e) => handleAnchorClick(e, section.id)}>
                                    {section.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contenido de la Faq For Law */}
                <div className="w-full text-sm md:w-3/4 p-6 bg-dark-light md:shadow-md md:rounded-lg">

                    <section id="section1">

                        <h2 className="text-lg md:text-3xl font-semibold  mb-2 lg:mb-5 text-blue-500">1. {t("faqForLaw.titles.title1")}</h2>


                        {[
                            { text: t("faqForLaw.documento.informacion punto 1.p1") },
                            { text: t("faqForLaw.documento.informacion punto 1.p2") },
                            { text: t("faqForLaw.documento.informacion punto 1.p3") }
                        ].map((item, index) => (
                            <>
                                <p className="mb-4" key={`item-${index}`} >{item.text}</p>
                            </>
                        ))}


                    </section>

                    <section id="section2">

                        <h2 className="text-lg md:text-3xl font-semibold mt-6 mb-2 text-blue-500">2.  {t("faqForLaw.titles.title2")}</h2>

                        <p className="mb-4">{t("faqForLaw.documento.informacion punto 2.p1")}</p>

                        <ul className="list-disc list-inside mb-4">
                            <li>{t("faqForLaw.documento.informacion punto 2.p1.1")}</li>
                            <li>{t("faqForLaw.documento.informacion punto 2.p1.2")}</li>
                            <li>{t("faqForLaw.documento.informacion punto 2.p1.3")}</li>
                        </ul>
                        <p className="mb-4">{t("faqForLaw.documento.informacion punto 2.p2")}</p>

                    </section>
                    <section id="section3">

                        <h2 className="text-lg md:text-3xl font-semibold mt-6 mb-2 text-blue-500">3. {t("faqForLaw.titles.title3")}</h2>

                        <p className="mt-5 mb-10">{t("faqForLaw.documento.informacion punto 3.p1")}</p>

                    </section>
                    <section id="section3">

                        <h2 className="text-lg md:text-3xl font-semibold mt-6 mb-2 text-blue-500">4. {t("faqForLaw.titles.title4")}</h2>

                        <p className="mt-5 mb-10">{t("faqForLaw.documento.informacion punto 4.p1")}</p>

                    </section>
                    <section id="section3">

                        <h2 className="text-lg md:text-3xl font-semibold mt-6 mb-2 text-blue-500">5. {t("faqForLaw.titles.title5")}</h2>

                        <p className="mt-5 mb-10">{t("faqForLaw.documento.informacion punto 5.p1")}</p>

                    </section> <section id="section3">

                        <h2 className="text-lg md:text-3xl font-semibold mt-6 mb-2 text-blue-500">6. {t("faqForLaw.titles.title6")}</h2>

                        <p className="mt-5 ">{t("faqForLaw.documento.informacion punto 6.p1")}</p>
                        <p className="mt-5 mb-10">{t("faqForLaw.documento.informacion punto 6.p2")}</p>


                    </section> <section id="section3">

                        <h2 className="text-lg md:text-3xl font-semibold mt-6 mb-2 text-blue-500">7. {t("faqForLaw.titles.title7")}</h2>

                        <p className="mt-5 ">{t("faqForLaw.documento.informacion punto 7.p1")} <span className="text-blue-500 underline">
                             support@atomico3.io</span> {t("faqForLaw.documento.informacion punto 7.p1.1")}</p>
                        <p className="mt-5 mb-10">{t("faqForLaw.documento.informacion punto 7.p2")}</p>


                    </section> <section id="section5">

                        <h2 className="text-lg md:text-3xl font-semibold mt-6 mb-2 text-blue-500">8. {t("faqForLaw.titles.title8")}</h2>

                        {[
                            { text: t("faqForLaw.documento.informacion punto 8.p1") },
                            { text: t("faqForLaw.documento.informacion punto 8.p2") },
                            { text: t("faqForLaw.documento.informacion punto 8.p3") }
                        ].map((item, index) => (
                            <>
                                <p className="mb-4" key={`item-${index}`} >{item.text}</p>
                            </>
                        ))}

                    </section>

                </div>
            </div>

            <button
                className=" fixed bottom-4 mb-1 md:mb-0 right-4 bg-dark-blue text-white p-2 rounded-full shadow-lg  focus:outline-none flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <img
                    src={arrowtop}
                    alt="flecha"
                    className="w-6 h-6 md:w-8 md:h-8 object-contain"
                />
            </button>
        </section>
    );
};
