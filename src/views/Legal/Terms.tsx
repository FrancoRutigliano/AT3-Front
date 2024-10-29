import { useTranslation } from "react-i18next";
import arrowtop from '../../assets/arrowtop.png'
import { termsTitles } from "../../Info/Legal";
export const Terms = () => {
    const [t] = useTranslation("global");

    const titles = termsTitles(t);

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
            <h1 className="text-2xl lg:text-5xl text-center mt-32 mb-5">{t("termsAndConditions.terminos y condiciones")}</h1>
            <h5 className="text-xs md:text-base w-2/3 mx-auto text-center mb-16 md:mb-20">{t("termsAndConditions.vigencia")}</h5>
            <div className="flex relative md:flex-row flex-col">
                {/* Columna de Títulos */}
                <div className=" md:block w-full md:w-1/4 bg-gray-100 p-4 md:rounded-lg  shadow-md mr-4 md:sticky md:top-20 max-[768px]:max-h-[160px] rounded-t-lg  md:h-screen overflow-y-auto">
                    <h2 className=" text-lg font-semibold mb-4 text-black">{t("termsAndConditions.titles.indice")}</h2>
                    <ul className="list-decimal text-black list-inside">
                        {titles.map((section, index) => (
                            <li key={index} className="p-2 md:p-4 border-l-4 border-celeste text-xs md:text-sm">
                                <a href={`#${section.id}`} className="text-black hover:text-celeste hover:font-medium transition duration-150 ease-out  " onClick={(e) => handleAnchorClick(e, section.id)}>
                                    {section.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contenido de la Terminos y condiciones */}
                <div className="w-full text-sm md:w-3/4 p-6 bg-dark-light md:shadow-md md:rounded-lg">

                    <section id="section1">

                        <h2 className="text-lg md:text-2xl font-semibold mt-6 mb-2 text-blue-500">1. {t("termsAndConditions.titles.title1")}</h2>
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

                        <h2 className="text-lg md:text-2xl font-semibold mt-6 mb-2 text-blue-500">2.  {t("termsAndConditions.titles.title2")}</h2>

                        <p className="mb-4"> {t("termsAndConditions.documento.informacion punto 2.p1")}</p>
                        <p className="mb-4">{t("termsAndConditions.documento.informacion punto 2.p2")} <a href=" https://www.atomico3.io" className="text-blue-500 hover:underline"> https://www.atomico3.io</a> {t("termsAndConditions.documento.informacion punto 2.p3")}</p>

                    </section>

                    <section id="section3">

                        <h2 className="text-lg md:text-2xl font-semibold mt-6 mb-2 text-blue-500">3. {t("termsAndConditions.titles.title3")}</h2>

                        <p className="mb-4"> {t("termsAndConditions.documento.informacion punto 3.p1")}</p>

                    </section>
                    <section id="section4">

                        <h2 className="text-lg md:text-2xl font-semibold mt-6 mb-2 text-blue-500">4. {t("termsAndConditions.titles.title4")}</h2>

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

                        <h2 className="text-lg md:text-2xl font-semibold mt-6 mb-2 text-blue-500">5. {t("termsAndConditions.titles.title5")}</h2>
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
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">6.  {t("termsAndConditions.titles.title6")}</h2>
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
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">7. {t("termsAndConditions.titles.title7")}</h2>
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
                        <h2 className="text-lg md:text-2xl font-semibold mb-4 mt-10 text-blue-500">8. {t("termsAndConditions.titles.title8")}</h2>
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
                        <h2 className="text-lg md:text-2xl font-semibold mb-4 mt-10 text-blue-500">9. {t("termsAndConditions.titles.title9")}</h2>
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
                        <h2 className="text-lg md:text-2xl font-semibold mb-4 mt-10 text-blue-500">10. {t("termsAndConditions.titles.title10")}</h2>

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
                        <h2 className="text-lg md:text-2xl font-semibold mb-4 mt-10 text-blue-500">11. {t("termsAndConditions.titles.title11")}</h2>
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
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">12. {t("termsAndConditions.titles.title12")}    </h2>

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
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">13. {t("termsAndConditions.titles.title13")}   </h2>
                        <p className="my-4">{t("termsAndConditions.documento.informacion punto 13.p1")}</p>
                    </section>
                    <section className="mb-8" id="section14">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">14. {t("termsAndConditions.titles.title14")}   </h2>
                        <p className="my-4">{t("termsAndConditions.documento.informacion punto 14.p1")}</p>
                    </section>
                    <section className="mb-8" id="section15">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">15. {t("termsAndConditions.titles.title15")}   </h2>
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
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">16. {t("termsAndConditions.titles.title16")}   </h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 16.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 16.p2") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p>{content}</p>
                            </div>
                        ))}
                    </section>
                    <section className="mb-8" id="section17">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">17. {t("termsAndConditions.titles.title17")}   </h2>
                        <p className="my-4">{t("termsAndConditions.documento.informacion punto 17.p1")}</p>
                    </section>
                    <section className="mb-8" id="section18">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">18. {t("termsAndConditions.titles.title18")}   </h2>
                        <p className="my-4">{t("termsAndConditions.documento.informacion punto 18.intro")}</p>

                        <p className="my-4 inline  underline underline-offset-4 decoration-blue-500">
                            <span className="text-blue-500">1. {t("termsAndConditions.documento.informacion punto 18.t1")}</span>
                        </p>
                        <p className="inline"> {t("termsAndConditions.documento.informacion punto 18.t1 p1")}</p>
                        <p className="my-4"> {t("termsAndConditions.documento.informacion punto 18.t1 p2")}</p>
                        <p className="my-4"> {t("termsAndConditions.documento.informacion punto 18.t1 p3")}</p>


                        <p className="my-4 inline  underline underline-offset-4 decoration-blue-500">
                            <span className="text-blue-500">2. {t("termsAndConditions.documento.informacion punto 18.t2")}</span>
                        </p>
                        <p className="inline"> {t("termsAndConditions.documento.informacion punto 18.t2 p1")}</p>
                        <br />
                        <p className="mt-5 inline-block  underline underline-offset-4 decoration-blue-500">
                            <span className="text-blue-500">3. {t("termsAndConditions.documento.informacion punto 18.t3")}  </span>
                        </p>
                        <p className="inline"> {t("termsAndConditions.documento.informacion punto 18.t3 p1")}</p>
                    </section>
                    <section className="mb-8" id="section19">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">19. {t("termsAndConditions.titles.title19")}   </h2>

                        {[
                            { item: "19.1", content: t("termsAndConditions.documento.informacion punto 19.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 19.p2") },
                            { content: t("termsAndConditions.documento.informacion punto 19.p3") },
                            { content: t("termsAndConditions.documento.informacion punto 19.p4") },
                            { content: t("termsAndConditions.documento.informacion punto 19.p5") },
                            { content: t("termsAndConditions.documento.informacion punto 19.p6") },
                            { content: t("termsAndConditions.documento.informacion punto 19.p7") },
                            { content: t("termsAndConditions.documento.informacion punto 19.p8") },
                            { item: "19.2", content: t("termsAndConditions.documento.informacion punto 19.p9") },
                            { item: "19.3", content: t("termsAndConditions.documento.informacion punto 19.p10") },
                            { item: "19.4", content: t("termsAndConditions.documento.informacion punto 19.p11") },
                        ].map(({ content, item }, index) => (
                            <div key={index} className="mb-4">
                                <p>
                                    {item && <span className=" text-blue-500">{item} </span>}
                                    {content}</p>
                            </div>
                        ))}
                    </section>
                    <section className="mb-8" id="section20">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">20. {t("termsAndConditions.titles.title20")}   </h2>
                        {[
                            { item: "20.1", content: t("termsAndConditions.documento.informacion punto 20.20.1 p1") },
                            { content: t("termsAndConditions.documento.informacion punto 20.20.1 p2") },
                            { content: t("termsAndConditions.documento.informacion punto 20.20.1 p3") },
                            { content: t("termsAndConditions.documento.informacion punto 20.20.1 p4") },
                            { content: t("termsAndConditions.documento.informacion punto 20.20.1 p5") },
                            { item: "20.2", content: t("termsAndConditions.documento.informacion punto 20.20.2") },
                            { item: "20.3", content: t("termsAndConditions.documento.informacion punto 20.20.3") },
                            { item: "20.4", content: t("termsAndConditions.documento.informacion punto 20.20.4") },
                        ].map(({ content, item }, index) => (
                            <div key={index} className="mb-4">
                                <p>
                                    {item && <span className=" text-blue-500">{item} </span>}
                                    {content}</p>
                            </div>
                        ))}
                    </section>
                    <section className="mb-8" id="section21">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">21. {t("termsAndConditions.titles.title21")}   </h2>


                        {[
                            { item: "21.1", content: t("termsAndConditions.documento.informacion punto 21.21.1") },
                            { item: "21.2", content: t("termsAndConditions.documento.informacion punto 21.21.2") },
                            { item: "21.3", content: t("termsAndConditions.documento.informacion punto 21.21.3") },
                            { item: "21.4", content: t("termsAndConditions.documento.informacion punto 21.21.4") },
                            { item: "i)", content: t("termsAndConditions.documento.informacion punto 21.21.4 i") },
                            { item: "ii)", content: t("termsAndConditions.documento.informacion punto 21.21.4 ii") },
                            { item: "iii)", content: t("termsAndConditions.documento.informacion punto 21.21.4 iii") },
                            { item: "21.5", content: t("termsAndConditions.documento.informacion punto 21.21.5") },
                            { content: t("termsAndConditions.documento.informacion punto 21.21.5 p1") },
                            { content: t("termsAndConditions.documento.informacion punto 21.21.5 p2") },
                            { content: t("termsAndConditions.documento.informacion punto 21.21.5 p3") },
                            { content: t("termsAndConditions.documento.informacion punto 21.21.5 p4") },
                        ].map(({ content, item }, index) => (
                            <div key={index} className="mb-4">
                                <p>
                                    {item && <span className=" text-blue-500">{item} </span>}
                                    {content}</p>

                            </div>
                        ))}

                        <ul className="list-disc pl-5">
                            {[
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p5") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p6") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p7") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p8") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p9") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p10") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p11") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p12") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p13") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p14") },
                            ].map(({ content }, index) => (
                                <li key={index} className="mb-2">
                                    {content}
                                </li>
                            ))}
                        </ul>

                        {[
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p15") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p16") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p17") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p18") },
                        ].map(({ text }, index) => (
                            <p key={index} className="mb-4">{text} </p>
                        ))}


                        <p className="mt-8">{t("termsAndConditions.documento.informacion punto 21.21.5 p19")}</p>
                        <p className="mt-2">{t("termsAndConditions.documento.informacion punto 21.21.5 p20")}</p>


                        <ul className="list-disc pl-5">
                            {[
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p21") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p22") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p23") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.5 p24") },
                            ].map(({ content }, index) => (
                                <li key={index} className=" my-2">
                                    {content}
                                </li>
                            ))}
                        </ul>

                        {[
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p25") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p26") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p27") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p28") },
                        ].map(({ text }, index) => (
                            <p key={index} className="my-3">{text} </p>
                        ))}

                        <p className="mt-8 mb-4">{t("termsAndConditions.documento.informacion punto 21.21.5 p29")}</p>

                        {[
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p30") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p31") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p32") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p33") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p34") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p35") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p36") },

                        ].map(({ text }, index) => (
                            <p key={index} className="my-3">{text} </p>
                        ))}

                        <p className="mt-8 mb-4">{t("termsAndConditions.documento.informacion punto 21.21.5 p37")}</p>
                        {[
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p38") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p39") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p40") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p41") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p42") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p43") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p44") },
                            { text: t("termsAndConditions.documento.informacion punto 21.21.5 p45") },
                            {
                                text: t("termsAndConditions.documento.informacion punto 21.21.5 p46"),
                                link: t("termsAndConditions.documento.informacion punto 21.21.5 p46 link")
                            },



                        ].map(({ text, link }, index) => (
                            <p key={index} className="my-3">{text}
                                {link && <a href={link} target="_blank" className="text-blue-500 hover:underline"> {link}</a>}
                            </p>
                        ))}

                        <p className="mt-10"><span className=" text-blue-500">21.6 </span>
                            {t("termsAndConditions.documento.informacion punto 21.21.6")} </p>
                        <p className="mt-6"> {t("termsAndConditions.documento.informacion punto 21.21.6 p1")} </p>
                        <ul className="list-disc pl-5">
                            {[
                                { content: t("termsAndConditions.documento.informacion punto 21.21.6 p2") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.6 p3") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.6 p4") },
                                { content: t("termsAndConditions.documento.informacion punto 21.21.6 p5") },
                            ].map(({ content }, index) => (
                                <li key={index} className=" my-2">
                                    {content}
                                </li>
                            ))}
                        </ul>

                    </section>
                    <section className="mb-8" id="section22">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">22. {t("termsAndConditions.titles.title22")}   </h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 22.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 22.p2") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p> {content}</p>
                            </div>
                        ))}
                    </section>
                    <section className="mb-8" id="section23">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">23. {t("termsAndConditions.titles.title23")}   </h2>
                        {[
                            { content: t("termsAndConditions.documento.informacion punto 23.p1") },
                            { content: t("termsAndConditions.documento.informacion punto 23.p2") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p> {content}</p>
                            </div>
                        ))}
                    </section>
                    <section className="mb-8" id="section24">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">24. {t("termsAndConditions.titles.title24")}   </h2>
                        <p className="my-3">{t("termsAndConditions.documento.informacion punto 24.p1")}</p>
                    </section>
                    <section className="mb-8" id="section25">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">25. {t("termsAndConditions.titles.title25")}   </h2>

                        {[
                            { content: t("termsAndConditions.documento.informacion punto 25.p1")},
                            { content: t("termsAndConditions.documento.informacion punto 25.p2") },
                        ].map(({ content }, index) => (
                            <div key={index} className="mb-4">
                                <p> {content}</p>
                            </div>
                        ))}


                    </section>
                    <section className="mb-8" id="section26">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">26. {t("termsAndConditions.titles.title26")}   </h2>
                        <p className="my-3">{t("termsAndConditions.documento.informacion punto 26.p1")}</p>
                    </section>
                    <section className="mb-8" id="section27">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">27. {t("termsAndConditions.titles.title27")}   </h2>
                        <p className="my-3">{t("termsAndConditions.documento.informacion punto 27.p1")} <span className="text-blue-500 underline">support@Atómico3.io</span> {t("termsAndConditions.documento.informacion punto 27.p1.1")} </p>
                    </section>
                    <section className="mb-8" id="section28">
                        <h2 className="text-lg md:text-2xl font-semibold mb-2 text-blue-500">28. {t("termsAndConditions.titles.title28")}   </h2>
                        <p className="my-3">{t("termsAndConditions.documento.informacion punto 28.p1")}</p>
                        <p className="my-3 font-bold lg:text-lg">{t("termsAndConditions.documento.informacion punto 28.p2")}</p>
                        <p className="my-3 font-bold lg:text-lg">{t("termsAndConditions.documento.informacion punto 28.p3")}</p>
                        <p className="my-3"><span className="underline">{t("termsAndConditions.documento.informacion punto 28.p4")}</span> {t("termsAndConditions.documento.informacion punto 28.p5")} </p>
                        <p className="my-3"><span className="underline">{t("termsAndConditions.documento.informacion punto 28.p6")}</span> <span className="text-blue-500"> {t("termsAndConditions.documento.informacion punto 28.p7")}</span> </p>
                    </section>
                </div>
            </div>
            <button
    className="fixed bottom-4 mb-1 md:mb-0 right-4 bg-dark-blue text-white p-2 rounded-full shadow-lg  focus:outline-none flex items-center justify-center w-10 h-10 md:w-12 md:h-12"
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
