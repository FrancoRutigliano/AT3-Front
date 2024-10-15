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
                        <h2 className="text-xl font-semibold mb-2">6. ¿Con quien compartimos la información y cómo podemos tratar su Información Personal?</h2>
                        <p className="mb-4">
                            Para dar cumplimiento a las finalidades anteriormente detalladas la Información Total podrá ser compartida con:
                        </p>

                        <ol className="list-decimal list-inside mb-4">
                            {[
                                "Afiliadas de Atómico, socios y/o colaboradores comerciales.",
                                "Proveedores de servicios de Atómico, incluyendo proveedores de servicios de tecnología, redes, transmisión de datos, identificación de personas, validación de identidad y otros prestadores que resultan necesarios para que Atómico pueda prestar correctamente todos sus Servicios a través de la Plataforma.",
                                "Autoridades y organismos públicos y regulatorios nacionales, provinciales o municipales.",
                                "Proveedores de servicios de marketing de Atómico y/o sus afiliadas para el análisis de las actividades del Usuario y la optimización de campañas de publicidad de Atómico, sus afiliadas o los Proveedores de Servicios.",
                                "Proveedores de servicios de experiencia de usuario (UX) de Atómico y/o sus Afiliadas para el análisis de la experiencia del Usuario para mejorar la Plataforma.",
                                "Proveedores de servicios de redes de envío y recepción de activos digitales de Atómico y/o sus Afiliadas."
                            ].map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ol>

                        <p className="mb-4">
                            Usted puede en cualquier momento revocar su consentimiento para la transmisión a terceros de su Información Personal, comunicándose con nosotros personalmente o por correo electrónico a las direcciones especificadas al pie de esta Política. La revocación, dependiendo de su alcance, podría ocasionar que nosotros ya no estemos en condiciones de seguir prestando el Servicio.
                        </p>

                        <p className="mb-4">
                            Cualquiera de las entidades señaladas en los apartados anteriores pueden estar en Paraguay, Argentina, Chile, Bolivia, México o ubicados inclusive en países de otro continente u organismos internacionales o supranacionales que, conforme a la legislación vigente aplicable, no proporcionen niveles de protección de datos personales adecuados, como entre otros, Brasil o Estados Unidos. En consecuencia, al aceptar esta Política el Usuario otorga su consentimiento expreso a que su Información Total, incluyendo su Información Personal, pueda ser transferidas internacionalmente por Atómico, incluso a países u organismos internacionales o supranacionales que no proporcionen niveles de protección de datos personales adecuados, conforme a la legislación vigente aplicable.
                        </p>
                    </section>

                    <section className="mb-8" id="section7">
                        <h2 className="text-xl font-semibold mb-2">7. ¿Qué medidas de seguridad y confidencialidad de la información tomamos?</h2>
                        <p className="mb-4">
                            En cumplimiento de la Ley de Protección de Datos Personales, de la República Argentina, y de la Secretaría de Prevención de Lavado de Dinero o Bienes. Atómico ha tomado medidas adecuadas para proteger la seguridad y confidencialidad de su Información Personal, garantizar que lo previsto en esta Política sea respetado, proteger su Información Personal contra pérdida, uso indebido y acceso, divulgación, alteración o destrucción no autorizados.
                        </p>

                        <p className="mb-4">A fin de garantizar un nivel de seguridad adecuado de su Información Personal, Atómico puede tomar, entre otras, las siguientes medidas:</p>

                        <ul className="list-disc list-inside mb-4">
                            {[
                                "El cifrado de Información Personal, cuando proceda;",
                                "Medidas de seudonimización y/o anonimización de datos cuando sea posible;",
                                "Acceso restringido y controlado a su Información Personal, incluyendo controles de acceso a la información;",
                                "Medidas físicas, técnicas y organizativas para proteger la seguridad de su Información Personal;"
                            ].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
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
