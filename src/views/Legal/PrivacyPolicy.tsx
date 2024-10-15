import { useTranslation } from "react-i18next";
import { getIndiceTitles } from '../../Info/privacyPolicy.ts'

export const PrivacyPolicy = () => {

    const [t, i18n] = useTranslation("global");

    const indiceTitles = getIndiceTitles(t);

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
        <section >
            <h1 className="lg:text-6xl text-center mt-20 mb-5">{t("privacyPolicy.politica de privacidad")}</h1>
            <h5 className="text-center mb-20">{t("privacyPolicy.vigencia")}</h5>
            <div className="flex relative">
                {/* Columna de Títulos */}
                <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mr-4 sticky top-20 h-screen overflow-y-auto">
                    <h2 className="text-lg font-semibold mb-4 text-black">{t("privacyPolicy.titles.indice")}</h2>
                    <ul className="list-decimal text-black list-inside">
                        {indiceTitles.map((section, index) => (
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
                    <p className="mb-4">
                        {t("privacyPolicy.documento.intro")}

                    </p>
                    <section id="section1">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">1. {t("privacyPolicy.titles.title1")}</h2>
                        <p className="mb-4">
                            {t("privacyPolicy.documento.informacion punto 1.intro")}

                        </p>

                        <ul className="list-disc list-inside mb-4">
                            {[
                                {
                                    text: t("privacyPolicy.documento.informacion punto 1.punto i"),
                                    link: t("privacyPolicy.documento.informacion punto 1.punto i link"),
                                    tag: t("privacyPolicy.documento.informacion punto 1.punto i tag")
                                },
                                { text: t("privacyPolicy.documento.informacion punto 1.punto ii"), link: "" },
                                { text: t("privacyPolicy.documento.informacion punto 1.punto iii"), link: "" }
                            ].map((item, index) => (
                                <li key={`item-${index}`}>
                                    {item.text}
                                    {item.link && (
                                        <>
                                            <a href={item.link} className="inline text-blue-500 hover:underline"> {item.link}</a> <span>{item.tag}</span>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>


                        <p className="mb-4">
                            {t("privacyPolicy.documento.informacion punto 1.conclusion")}
                        </p>
                    </section>

                    <section id="section2">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">2.  {t("privacyPolicy.titles.title2")}</h2>
                        {[
                            { text: t("privacyPolicy.documento.informacion punto 2.p1") },
                            { text: t("privacyPolicy.documento.informacion punto 2.p2") },
                            { text: t("privacyPolicy.documento.informacion punto 2.p3") }
                        ].map((item, index) => (
                            <>
                                <p className="mb-4" key={`item-${index}`} >{item.text}</p>
                            </>
                        ))}

                    </section>
                    <section id="section3">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">3. {t("privacyPolicy.titles.title3")}</h2>
                        {[
                            { title: t("privacyPolicy.documento.informacion punto 3.p1.title"), content: t("privacyPolicy.documento.informacion punto 3.p1.content") },
                            { title: t("privacyPolicy.documento.informacion punto 3.p2.title"), content: t("privacyPolicy.documento.informacion punto 3.p2.content") },
                            { title: t("privacyPolicy.documento.informacion punto 3.p3.title"), content: t("privacyPolicy.documento.informacion punto 3.p3.content") },
                            { title: t("privacyPolicy.documento.informacion punto 3.p4.title"), content: t("privacyPolicy.documento.informacion punto 3.p4.content") },
                            { title: t("privacyPolicy.documento.informacion punto 3.p5.title"), content: t("privacyPolicy.documento.informacion punto 3.p5.content") },
                            { title: t("privacyPolicy.documento.informacion punto 3.p6.title"), content: t("privacyPolicy.documento.informacion punto 3.p6.content") },
                            { title: t("privacyPolicy.documento.informacion punto 3.p7.title"), content: t("privacyPolicy.documento.informacion punto 3.p7.content") },
                            { title: t("privacyPolicy.documento.informacion punto 3.p8.title"), content: t("privacyPolicy.documento.informacion punto 3.p8.content") },
                            { title: t("privacyPolicy.documento.informacion punto 3.p9.title"), content: t("privacyPolicy.documento.informacion punto 3.p9.content") }
                        ].map((item, index) => (
                            <div key={index} className="mb-4">
                                {item.title && <h3 className="text-blue-500 ">{item.title}:</h3>}
                                <p>{item.content}</p>
                            </div>
                        ))}



                    </section>
                    <section id="section4">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">4. {t("privacyPolicy.titles.title4")}</h2>
                        {[
                            { title: t("privacyPolicy.documento.informacion punto 4.title1"), content: t("privacyPolicy.documento.informacion punto 4.p1") },
                            { title: "", content: t("privacyPolicy.documento.informacion punto 4.p2") },
                            { title: "", content: t("privacyPolicy.documento.informacion punto 4.p3") },
                            { title: t("privacyPolicy.documento.informacion punto 4.title2"), content: t("privacyPolicy.documento.informacion punto 4.p4") },
                            { title: "", content: t("privacyPolicy.documento.informacion punto 4.p5") },
                            { title: "", content: t("privacyPolicy.documento.informacion punto 4.p6") },
                            { title: t("privacyPolicy.documento.informacion punto 4.title3"), content: t("privacyPolicy.documento.informacion punto 4.p7") },
                            { title: t("privacyPolicy.documento.informacion punto 4.title4"), content: t("privacyPolicy.documento.informacion punto 4.p8") }
                        ].map((item, index) => (
                            <div key={index} className="mb-4">
                                {item.title && <h3 className="text-blue-500 font-medium">{item.title}:</h3>}
                                <p>{item.content}</p>
                            </div>
                        ))}

                    </section>
                    <section id="section5">

                        <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">5. {t("privacyPolicy.titles.title5")}</h2>
                        {[
                            { title: "", content: t("privacyPolicy.documento.informacion punto 5.p1") },
                            { title: "a)", content: t("privacyPolicy.documento.informacion punto 5.finalidades.a") },
                            { title: "b)", content: t("privacyPolicy.documento.informacion punto 5.finalidades.b") },
                            { title: "c)", content: t("privacyPolicy.documento.informacion punto 5.finalidades.c") },
                            { title: "d)", content: t("privacyPolicy.documento.informacion punto 5.finalidades.d") },
                            { title: "e)", content: t("privacyPolicy.documento.informacion punto 5.finalidades.e") },
                            { title: "f)", content: t("privacyPolicy.documento.informacion punto 5.finalidades.f") },
                            { title: "g)", content: t("privacyPolicy.documento.informacion punto 5.finalidades.g") },
                            { title: "h)", content: t("privacyPolicy.documento.informacion punto 5.finalidades.h") },

                        ].map((item, index) => (
                            <div key={index} className="mb-4">
                                <p>
                                    {item.title && <span className="text-blue-500 ">{item.title} </span>}
                                    {item.content}</p>
                            </div>
                        ))}


                    </section>

                    <section className="mb-8" id="section6">
                        <h2 className="text-xl font-semibold mb-2 text-blue-500">6.  {t("privacyPolicy.titles.title6")}</h2>
                        <p className="mb-4">
                            {t("privacyPolicy.documento.informacion punto 6.intro")}
                        </p>

                        {[
                            { item: "i)", text: t("privacyPolicy.documento.informacion punto 6.item i") },
                            { item: "ii)", text: t("privacyPolicy.documento.informacion punto 6.item ii") },
                            { item: "iii)", text: t("privacyPolicy.documento.informacion punto 6.item iii") },
                            { item: "iv)", text: t("privacyPolicy.documento.informacion punto 6.item iv") },
                            { item: "v)", text: t("privacyPolicy.documento.informacion punto 6.item v") },
                            { item: "vi)", text: t("privacyPolicy.documento.informacion punto 6.item vi") },
                        ].map((elem, index) => (
                            <div key={index} className="mb-4">
                                <p><span className="text-blue-500"> {elem.item} </span> {elem.text}</p>
                            </div>
                        ))}

                        {[
                            { text: t("privacyPolicy.documento.informacion punto 6.p2") },
                            { text: t("privacyPolicy.documento.informacion punto 6.p3") },
                            { text: t("privacyPolicy.documento.informacion punto 6.p4") },
                        ].map((elem, index) => (
                            <div key={index} className="mb-4">
                                <p className="mb-4"> {elem.text}</p>
                            </div>
                        ))}


                        <p className="underline mb-2">{t("privacyPolicy.documento.informacion punto 6.actividades title")}</p>
                        <ul className="list-disc pl-5">
                            {[
                                 { text: t("privacyPolicy.documento.informacion punto 6.actividad 1") },
                               { text: t("privacyPolicy.documento.informacion punto 6.actividad 2") },
                               { text: t("privacyPolicy.documento.informacion punto 6.actividad 3") },
                               { text: t("privacyPolicy.documento.informacion punto 6.actividad 4") },
                               { text: t("privacyPolicy.documento.informacion punto 6.actividad 5") }
                            ].map((elem, index) => (
                                <li key={index} className="mb-2">
                                    {elem.text}
                                </li>
                            ))}
                        </ul>

                    </section>

                    <section className="mb-8" id="section7">
                        <h2 className="text-xl font-semibold mb-2">7. {t("privacyPolicy.titles.title7")}</h2>
                            <p className="mb-4">{t("privacyPolicy.documento.informacion punto 7.intro")}</p>
                            <p className="mb-4">{t("privacyPolicy.documento.informacion punto 7.p1")}</p>
                            {[
                            { title: "a)", content: t("privacyPolicy.documento.informacion punto 7.medida1") },
                            { title: "b)", content: t("privacyPolicy.documento.informacion punto 7.medida2") },
                            { title: "c)", content: t("privacyPolicy.documento.informacion punto 7.medida3") },
                            { title: "d)", content: t("privacyPolicy.documento.informacion punto 7.medida4") },
                            { title: "e)", content: t("privacyPolicy.documento.informacion punto 7.medida5") },
                            { title: "f)", content: t("privacyPolicy.documento.informacion punto 7.medida6") },

                        ].map((item, index) => (
                            <div key={index} className="mb-4">
                                <p>
                                    {item.title && <span className="text-blue-500 ">{item.title} </span>}
                                    {item.content}</p>
                            </div>
                        ))}
                            <p className="mb-4">{t("privacyPolicy.documento.informacion punto 7.confidencialidad")}</p>

                    </section>

                    <section className="mb-8" id="section8">
                        <h2 className="text-xl font-semibold mb-2">8. ¿Cómo podemos comunicarnos con usted y qué tipo de información podemos proveer?</h2>
                        <p className="mb-4">
                            El Usuario tiene derecho a solicitar acceso a su Información Personal, así como a su rectificación, actualización o supresión, y también a limitar el tratamiento de su Información Personal en las condiciones establecidas por la Ley de Protección de Datos Personales. En particular, el Usuario tiene derecho a solicitar:
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            {[
                                "Acceso a su Información Personal, así como información sobre el tratamiento que realizamos con respecto a dicha Información Personal;",
                                "La rectificación de la Información Personal, en caso de que se encuentren inexactitudes o errores en su Información;",
                                "La supresión de su Información Personal, en las circunstancias y en los casos establecidos por la Ley de Protección de Datos Personales;",
                                "La limitación del tratamiento de su Información Personal, cuando corresponda;"
                            ].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>

                        <p className="mb-4">
                            El Usuario puede ejercer sus derechos mencionados anteriormente a través de un correo electrónico, en las direcciones especificadas al pie de esta Política.
                        </p>
                    </section>

                    <section className="mb-8" id="section9">
                        <h2 className="text-xl font-semibold mb-2">9. ¿Podemos modificar esta Política? ¿Qué sucede ante una enajenación o cambio de control de las Sociedades?</h2>
                        <p className="mb-4">
                            Atómico se reserva el derecho de modificar esta Política de Privacidad en cualquier momento. En caso de modificaciones, se publicará la nueva versión de la Política en la Plataforma. Es responsabilidad del Usuario revisar periódicamente esta Política.
                        </p>
                    </section>

                    <section className="mb-8" id="section10">
                        <h2 className="text-xl font-semibold mb-2">10.  ¿Cuáles son las responsabilidades del Usuario?</h2>
                        <p className="mb-4">Si tiene alguna pregunta sobre esta Política, por favor contáctenos a:</p>

                        <ul className="list-none mb-4">
                            <li>Email: <a href="mailto:contacto@atómico3.io" className="text-blue-500 hover:underline">contacto@atómico3.io</a></li>
                            <li>Teléfono: <span>+54 11 2345 6789</span></li>
                        </ul>
                    </section>
                    <section className="mb-8" id="section11">
                        <h2 className="text-xl font-semibold mb-2">11. ¿Qué derechos tiene el Usuario y cómo puede ejercerlos?</h2>
                        <p className="mb-4">Si tiene alguna pregunta sobre esta Política, por favor contáctenos a:</p>

                        <ul className="list-none mb-4">
                            <li>Email: <a href="mailto:contacto@atómico3.io" className="text-blue-500 hover:underline">contacto@atómico3.io</a></li>
                            <li>Teléfono: <span>+54 11 2345 6789</span></li>
                        </ul>
                    </section>

                    <section className="mb-8" id="section12">
                        <h2 className="text-xl font-semibold mb-2">12. ¿Cuáles son los mecanismos de resolución de conflictos y la jurisdicción y ley aplicable a esta Política?    </h2>
                        <p className="mb-4">Si tiene alguna pregunta sobre esta Política, por favor contáctenos a:</p>

                        <ul className="list-none mb-4">
                            <li>Email: <a href="mailto:contacto@atómico3.io" className="text-blue-500 hover:underline">contacto@atómico3.io</a></li>
                            <li>Teléfono: <span>+54 11 2345 6789</span></li>
                        </ul>
                    </section>
                    {/* 13. ¿Quién es responsable de su información Personal? */}
                    <section className="mb-8" id="section13">
                        <h2 className="text-xl font-semibold mb-2">13. ¿Quién es responsable de su información Personal?   </h2>
                        <p className="mb-4">Si tiene alguna pregunta sobre esta Política, por favor contáctenos a:</p>

                        <ul className="list-none mb-4">
                            <li>Email: <a href="mailto:contacto@atómico3.io" className="text-blue-500 hover:underline">contacto@atómico3.io</a></li>
                            <li>Teléfono: <span>+54 11 2345 6789</span></li>
                        </ul>
                    </section>

                </div>
            </div>
        </section>
    );
};
