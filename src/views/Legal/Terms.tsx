import { useTranslation } from "react-i18next";
import { getTermsTitles } from "../../Info/termsAndConditions";

export const Terms = () => {
    const [t] = useTranslation("global");

    const titles = getTermsTitles(t);

    const handleAnchorClick = (e: any, targetId: any) => {
        e.preventDefault(); // Prevenir el cambio de URL

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
        //  <section>
        //     <h1 className="lg:text-6xl text-center mt-20 mb-5"</h1>
        //     <h5 className="text-center mb-20">{t("termsAndConditions.vigencia")}</h5>
        //  </section>
        <section >
            <h1 className="lg:text-6xl text-center mt-20 mb-5">{t("termsAndConditions.terminos y condiciones")}</h1>
            <h5 className="text-center mb-20">{t("termsAndConditions.vigencia")}</h5>
            <div className="flex relative">
                {/* Columna de Títulos */}
                <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mr-4 sticky top-20 h-screen overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4 text-black">{t("termsAndConditions.titles.indice")}</h2>
                    <ul className="list-decimal text-black list-inside">
                        {titles.map((section, index) => (
                            <li key={index} className="p-5 border-l-4 border-celeste">
                                <a href={`#${section.id}`} className="text-black hover:underline" onClick={(e) => handleAnchorClick(e, section.id)}>
                                    {section.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contenido de la Política de Privacidad */}
                <div className="w-3/4 p-6 bg-dark-light shadow-md rounded-lg">

                    <section id="section1">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">1. {t("termsAndConditions.titles.title1")}</h2>
                        <p className="mb-4">
                            {t("termsAndConditions.documento.informacion punto 1.p1")}

                        </p>

                        <div className="list-disc list-inside mb-4">
                            {[
                                {
                                    item: "(i)",
                                    text: t("termsAndConditions.documento.informacion punto 1.punto i"),
                                    link: t("termsAndConditions.documento.informacion punto 1.punto i link"),
                                    tag: t("termsAndConditions.documento.informacion punto 1.punto i tag")
                                },
                                { item: "(ii)", text: t("termsAndConditions.documento.informacion punto 1.punto ii"), link: "" },
                                { item: "(iii)", text: t("termsAndConditions.documento.informacion punto 1.punto iii"), link: "" }
                            ].map(({ text, link, item, tag }, index) => (
                                <p key={`elem-${index}`}>
                                    {item} {text}
                                    {link && (
                                        <>
                                            <a href={link} className="inline text-blue-500 hover:underline"> {link}</a> <span>{tag}</span>
                                        </>
                                    )}
                                </p>
                            ))}
                        </div>


                        <p className="mb-4">
                            {t("termsAndConditions.documento.informacion punto 1.conclusion")}
                        </p>
                    </section>

                    <section id="section2">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">2.  {t("termsAndConditions.titles.title2")}</h2>

                        <p className="mb-4"> {t("termsAndConditions.documento.informacion punto 2.p1")}</p>
                        <p className="mb-4">{t("termsAndConditions.documento.informacion punto 2.p2")} <a href=" https://www.atomico3.io" className="text-blue-500 hover:underline"> https://www.atomico3.io</a> {t("termsAndConditions.documento.informacion punto 2.p3")}</p>

                    </section>

                    <section id="section3">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">3. {t("termsAndConditions.titles.title3")}</h2>

                        <p className="mb-4"> {t("termsAndConditions.documento.informacion punto 3.p1")}</p>

                    </section>
                    <section id="section4">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">4. {t("termsAndConditions.titles.title4")}</h2>

                        <p className="mb-4">{t("termsAndConditions.documento.informacion punto 4.p1")}</p>
                        {[
                            { item: "4. (i)", content: t("termsAndConditions.documento.informacion punto 4.p2") },
                            { item: "", content: t("termsAndConditions.documento.informacion punto 4.p3") },
                            { item: "", content: t("termsAndConditions.documento.informacion punto 4.p4") },
                            { item: "4. (ii)", content: t("termsAndConditions.documento.informacion punto 4.p5") },
                            { item: "", content: t("termsAndConditions.documento.informacion punto 4.p6") },
                            { item: "", content: t("termsAndConditions.documento.informacion punto 4.p7") },
                        ].map(({ item, content }, index) => (
                            <p key={index} className="mb-4">
                                <span className="text-blue-500">{item}</span>  {content}
                            </p>
                        ))}
                    </section>
                    <section id="section5">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">5. {t("termsAndConditions.titles.title5")}</h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 5.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 5.p2") },
                            { content: t("termsAndConditions.documento.informacion punto 5.p3") },
                            { content: t("termsAndConditions.documento.informacion punto 5.p4") },
                            { content: t("termsAndConditions.documento.informacion punto 5.p5") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p>{content}</p>
                            </div>
                        ))}


                    </section>

                    <section className="mb-8 mt-10" id="section6">
                        <h2 className="text-xl font-semibold mb-2 text-blue-500">6.  {t("termsAndConditions.titles.title6")}</h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 6.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 6.p2") },
                            { content: t("termsAndConditions.documento.informacion punto 6.p3") },
                            { content: t("termsAndConditions.documento.informacion punto 6.p4") },
                            { content: t("termsAndConditions.documento.informacion punto 6.p5") },
                            { content: t("termsAndConditions.documento.informacion punto 6.p6") },
                            { content: t("termsAndConditions.documento.informacion punto 6.p7") },
                            { content: t("termsAndConditions.documento.informacion punto 6.p8") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p>{content}</p>
                            </div>
                        ))}
                    </section>

                    <section className="mb-8" id="section7">
                        <h2 className="text-xl font-semibold mb-2 text-blue-500">7. {t("termsAndConditions.titles.title7")}</h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 7.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 7.p2") },
                            { content: t("termsAndConditions.documento.informacion punto 7.p3") },
                            { content: t("termsAndConditions.documento.informacion punto 7.p4") },
                            { content: t("termsAndConditions.documento.informacion punto 7.p5") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p>{content}</p>
                            </div>
                        ))}
                    </section>

                    <section className="mb-8" id="section8">
                        <h2 className="text-xl font-semibold mb-4 mt-10 text-blue-500">8. {t("termsAndConditions.titles.title8")}</h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 8.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 8.p2") },
                            { content: t("termsAndConditions.documento.informacion punto 8.p3") },
                            { content: t("termsAndConditions.documento.informacion punto 8.p4") },
                            { content: t("termsAndConditions.documento.informacion punto 8.p5") },
                            { content: t("termsAndConditions.documento.informacion punto 8.p6") },

                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p>{content}</p>
                            </div>
                        ))}
                    </section>
                    <section className="mb-8" id="section9">
                        <h2 className="text-xl font-semibold mb-4 mt-10 text-blue-500">9. {t("termsAndConditions.titles.title9")}</h2>
                        <div>

                            <h4 className="underline underline-offset-8 decoration-blue-500 mb-4"><span className="text-blue-500">9.1</span> {t("termsAndConditions.documento.informacion punto 9.9.1")}</h4>
                            <p className="mb-4">{t("termsAndConditions.documento.informacion punto 9.9.1 p1")}</p>
                            <p className="mb-4">{t("termsAndConditions.documento.informacion punto 9.9.1 p2")}</p>
                        </div>
                        <div>
                            <h4 className="underline underline-offset-8 decoration-blue-500 mb-4"><span className="text-blue-500">9.2</span> {t("termsAndConditions.documento.informacion punto 9.9.2")}</h4>

                            {[
                                { item: "9.2.1", text: t("termsAndConditions.documento.informacion punto 9.9.2.1") },
                                { item: "9.2.2", text: t("termsAndConditions.documento.informacion punto 9.9.2.2") },
                                { item: "9.2.3", text: t("termsAndConditions.documento.informacion punto 9.9.2.3") },
                                { item: "9.2.4", text: t("termsAndConditions.documento.informacion punto 9.9.2.4") },
                                { item: "9.2.5", text: t("termsAndConditions.documento.informacion punto 9.9.2.5") },
                            ].map(({ text, item }, index) => (
                                <p key={index} className="mb-4"><span className="text-blue-500">{item} </span>{text} </p>
                            ))}

                            <div>
                                <h5 className="underline underline-offset-8 mb-4">{t("termsAndConditions.documento.informacion punto 9.9.2.5 p1")}</h5>
                                <ul>
                                    <li>{t("termsAndConditions.documento.informacion punto 9.9.2.5 p2")}</li>
                                    <li>{t("termsAndConditions.documento.informacion punto 9.9.2.5 p3")}</li>
                                    <li>{t("termsAndConditions.documento.informacion punto 9.9.2.5 p4")}</li>
                                </ul>
                            </div>
                            <div>
                                <h5 className="underline underline-offset-8 my-4">{t("termsAndConditions.documento.informacion punto 9.9.2.5 p5")}</h5>
                                <ul>
                                    <li>{t("termsAndConditions.documento.informacion punto 9.9.2.5 p6")}</li>
                                    <li>{t("termsAndConditions.documento.informacion punto 9.9.2.5 p7")}</li>
                                    <li>{t("termsAndConditions.documento.informacion punto 9.9.2.5 p8")}</li>
                                </ul>
                                <p className="my-4">{t("termsAndConditions.documento.informacion punto 9.9.2.5 p9")}</p>
                            </div>
                            {[
                                { item: "9.2.6", text: t("termsAndConditions.documento.informacion punto 9.9.2.6") },
                                { item: "9.2.7", text: t("termsAndConditions.documento.informacion punto 9.9.2.7") },
                                { item: "9.2.8", text: t("termsAndConditions.documento.informacion punto 9.9.2.8") },
                                { item: "9.2.9", text: t("termsAndConditions.documento.informacion punto 9.9.2.9") },
                                { item: "9.2.10", text: t("termsAndConditions.documento.informacion punto 9.9.2.10") },
                            ].map(({ text, item }, index) => (
                                <p key={index} className="mb-4"><span className="text-blue-500">{item} </span>{text} </p>
                            ))}

                            <h4 className="underline underline-offset-8 decoration-blue-500 mb-4"><span className="text-blue-500">9.3</span> {t("termsAndConditions.documento.informacion punto 9.9.3")}</h4>
                            <p className="mb-4"><span className="text-blue-500">9.3.1 </span> {t("termsAndConditions.documento.informacion punto 9.9.3.1")}</p>

                            <h4 className="underline underline-offset-8 decoration-blue-500 mb-4"><span className="text-blue-500">9.4</span> {t("termsAndConditions.documento.informacion punto 9.9.4")}</h4>
                            <p className="mb-4"><span className="text-blue-500">9.4.1 </span> {t("termsAndConditions.documento.informacion punto 9.9.4.1")}</p>
                            <p className="mb-4"><span className="text-blue-500">9.4.2 </span> {t("termsAndConditions.documento.informacion punto 9.9.4.2")}</p>
                            <p className="mb-4"> {t("termsAndConditions.documento.informacion punto 9.9.4.2 p1")}</p>

                            {[
                                { item: "9.4.3", text: t("termsAndConditions.documento.informacion punto 9.9.4.3") },
                                { item: "9.4.4", text: t("termsAndConditions.documento.informacion punto 9.9.4.4") },
                                { item: "9.4.5", text: t("termsAndConditions.documento.informacion punto 9.9.4.5") },
                                { item: "9.4.6", text: t("termsAndConditions.documento.informacion punto 9.9.4.6") },
                                { item: "9.2.7", text: t("termsAndConditions.documento.informacion punto 9.9.4.7") },
                                { item: "", text: t("termsAndConditions.documento.informacion punto 9.9.4.7 p1") },
                                { item: "9.4.8", text: t("termsAndConditions.documento.informacion punto 9.9.4.8") },
                                { item: "9.4.9", text: t("termsAndConditions.documento.informacion punto 9.9.4.9") },
                                { item: "9.4.9.1", text: t("termsAndConditions.documento.informacion punto 9.9.4.9.1") },
                                { item: "9.4.9.2", text: t("termsAndConditions.documento.informacion punto 9.9.4.9.2") },
                                { item: "9.4.9.3", text: t("termsAndConditions.documento.informacion punto 9.9.4.9.3") },
                                { item: "9.4.9.4", text: t("termsAndConditions.documento.informacion punto 9.9.4.9.4") },
                                { item: "9.4.10", text: t("termsAndConditions.documento.informacion punto 9.9.4.10") },
                                { item: "9.4.11", text: t("termsAndConditions.documento.informacion punto 9.9.4.11") },









                            ].map(({ text, item }, index) => (
                                <p key={index} className="mb-4"><span className="text-blue-500">{item} </span>{text} </p>
                            ))}


                        </div>

                    </section>
                    <section className="mb-8" id="section10">
                        <h2 className="text-xl font-semibold mb-4 mt-10 text-blue-500">10. {t("termsAndConditions.titles.title10")}</h2>

                        <p className="mb-4">{t("termsAndConditions.documento.informacion punto 10.intro")}</p>

                        {[
                            { content: t("termsAndConditions.documento.informacion punto 10.a"), item: "a)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.b"), item: "b)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.c"), item: "c)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.d"), item: "d)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.e"), item: "e)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.f"), item: "f)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.g"), item: "g)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.h"), item: "h)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.i"), item: "i)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.j"), item: "j)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.k"), item: "k)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.l"), item: "l)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.m"), item: "m)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.n"), item: "n)" },
                            { content: t("termsAndConditions.documento.informacion punto 10.o"), item: "o)" },
                        ].map(({ content, item }, index) => (
                            <div key={index} className="mb-4">
                                <p> <span className="text-blue-500">{item} </span> {content}</p>
                            </div>
                        ))}


                    </section>
                    <section className="mb-8" id="section11">
                        <h2 className="text-xl font-semibold mb-4 mt-10 text-blue-500">11. {t("termsAndConditions.titles.title11")}</h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 11.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 11.p2") },
                            { content: t("termsAndConditions.documento.informacion punto 11.p3") },
                            { content: t("termsAndConditions.documento.informacion punto 11.p4") },
                            { content: t("termsAndConditions.documento.informacion punto 11.p5") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p> {content}</p>
                            </div>
                        ))}

                    </section>

                    <section className="mb-8" id="section12">
                        <h2 className="text-xl font-semibold mb-2 text-blue-500">12. {t("termsAndConditions.titles.title12")}    </h2>

                        {[
                            { content: t("termsAndConditions.documento.informacion punto 12.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 12.p2") },
                            { content: t("termsAndConditions.documento.informacion punto 12.p3") },
                            { content: t("termsAndConditions.documento.informacion punto 12.p4") },
                            { content: t("termsAndConditions.documento.informacion punto 12.p5") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p> {content}</p>
                            </div>
                        ))}


                    </section>
                    <section className="mb-8" id="section13">
                        <h2 className="text-xl font-semibold mb-2 text-blue-500">13. {t("termsAndConditions.titles.title13")}   </h2>
                        <p className="my-4">{t("termsAndConditions.documento.informacion punto 13.p1")}</p>
                    </section>
                    <section className="mb-8" id="section14">
                        <h2 className="text-xl font-semibold mb-2 text-blue-500">14. {t("termsAndConditions.titles.title14")}   </h2>
                        <p className="my-4">{t("termsAndConditions.documento.informacion punto 14.p1")}</p>
                    </section>
                    <section className="mb-8" id="section15">
                        <h2 className="text-xl font-semibold mb-2 text-blue-500">15. {t("termsAndConditions.titles.title15")}   </h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 15.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 15.p2") },
                            { content: t("termsAndConditions.documento.informacion punto 15.p3") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p> {content}</p>
                            </div>
                        ))}
                    </section>

                    <section className="mb-8" id="section16">
                        <h2 className="text-xl font-semibold mb-2 text-blue-500">16. {t("termsAndConditions.titles.title16")}   </h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 16.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 16.p2") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p>{content}</p>
                            </div>
                        ))}

                    </section>
                </div>
            </div>
        </section>
    );
};
