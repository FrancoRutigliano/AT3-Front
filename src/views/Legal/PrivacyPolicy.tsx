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
                    <h2 className="text-lg font-semibold mb-4 text-black">{t("privacyPolicy.indice")}</h2>
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
                        {/* {t("privacy.p1")} */}
                        La protección de su información es importante para nosotros. La presente Política de Privacidad es aplicable a todas aquellas actividades que involucran el tratamiento de su información y tiene el propósito de garantizar transparencia y control en el modo en que tratamos su información.
                    </p>
                    <section id="section1">

                        <h2 className="text-xl font-semibold mt-6 mb-2">1. ¿Cuál es el contenido y alcance de esta Política de Privacidad?</h2>
                        <p className="mb-4">
                            Este documento contiene la Política de Privacidad (la “Política”) que rige entre ATÓMICO3 S.A. (“Atómico”), en adelante "Las Sociedades" y según corresponda en forma individual y separada, y a los usuarios (el “Usuario” o en plural, los “Usuarios”), siempre que los Usuarios accedan o utilicen una o varias de las siguientes plataformas:
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            {[
                                { text: "El sitio web", link: "https://www.Atómico3.io" },
                                { text: "La aplicación móvil de “Atómico”", link: "#" }, // Link placeholder
                                { text: "La plataforma de intercambio de activos digitales provista a través del sitio web", link: "#" } // Link placeholder
                            ].map((item, index) => (
                                <li key={index}>
                                    {item.text} <a href={item.link} className="text-blue-500 hover:underline">{item.link}</a>
                                </li>
                            ))}
                        </ul>

                        <p className="mb-4">
                            Para que sea más práctico llamaremos al Sitio Web, la App y al Exchange, indistintamente, como “Plataforma”.
                        </p>
                    </section>

                    <section id="section2">

                        <h2 className="text-xl font-semibold mt-6 mb-2">2. Alcance de su consentimiento</h2>
                        <p className="mb-4">
                            Para proteger su información Atómico cumple con las normas vigentes en la República Argentina, en particular, las reglas y principios establecidos por la Ley N° 25.326 (en adelante, la “Ley de Protección de Datos Personales”).
                        </p>
                    </section>
                    <section id="section3">

                        <h2 className="text-xl font-semibold mt-6 mb-2">3. ¡Para tener en claro al momento de leer nuestra Política!</h2>
                        <p className="mb-4">
                            A continuación, señalamos conceptos clave para entender y tener en cuenta durante la lectura de nuestra Política:
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            {[
                                { term: "AAIP", definition: "Es la Agencia de Acceso a la Información Pública de la República Argentina." },
                                { term: "Afiliada", definition: "Se refiere a cualquier persona que controle a otra persona o que sea controlada por ella." },
                                { term: "Base de datos", definition: "Conjunto organizado de Información Personal." },
                                { term: "Consentimiento", definition: "Manifestación previa, libre, expresa e informada por parte del Titular de la Información Personal." },
                                { term: "Responsable", definition: "Persona que es titular de una Base de datos." },
                                { term: "Titular", definition: "Persona cuya Información Personal es objeto del tratamiento." },
                                { term: "Transferencia", definition: "Envío de información a un receptor dentro o fuera del país." },
                                { term: "Tratamiento", definition: "Operaciones y procedimientos que permiten el procesamiento de Información Personal." },
                            ].map((item, index) => (
                                <li key={index}>
                                    <strong>{item.term}:</strong> {item.definition}
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section id="section4">

                        <h2 className="text-xl font-semibold mt-6 mb-2">4. ¿Qué información recolectamos y tratamos?</h2>
                        <h3 className="font-semibold mb-2">Información proporcionada por el Usuario</h3>
                        <p className="mb-4">
                            Cuando el Usuario utiliza un Servicio de Atómico, acepta que se puede recolectar cierta información, como nombre, dirección de correo electrónico, y otros datos identificatorios.
                        </p>

                        <h3 className="font-semibold mb-2">Información que recopilan nuestros sistemas</h3>
                        <p className="mb-4">
                            Atómico recopila información técnica sobre su dispositivo, operaciones y actividades realizadas a través del Servicio, y otros datos relevantes.
                        </p>

                        <h3 className="font-semibold mb-2">Información proporcionada por terceros</h3>
                        <p className="mb-4">
                            El Usuario puede dar acceso a información almacenada por terceros, como redes sociales.
                        </p>
                    </section>
                    <section id="section5">

                        <h2 className="text-xl font-semibold mt-6 mb-2">5. ¿Con qué finalidades tratamos la información?</h2>
                        <p className="mb-4">
                            El Usuario acepta que Atómico podrá tratar toda la información con las siguientes finalidades:
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            {[
                                "Comunicarnos con el Usuario y prestar el Servicio.",
                                "Validar información y verificar identidad.",
                                "Mejorar y optimizar el Servicio.",
                                "Realizar campañas de publicidad y/o marketing.",
                                "Cumplir con la ley y regulaciones aplicables."
                            ].map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
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
                        <h2 className="text-xl font-semibold mb-2">10. Contacto</h2>
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
