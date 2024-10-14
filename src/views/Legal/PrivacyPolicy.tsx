    export const PrivacyPolicy = () => {

        const handleAnchorClick = (e:any, targetId:any) => {
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
        <section>
            <h1 className="lg:text-6xl text-center my-20">Política de Privacidad</h1>

        <div className="flex">
        {/* Columna de Títulos */}
        <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mr-4">
            <h2 className="text-lg font-semibold mb-4">Índice</h2>
            <ul className="list-decimal list-inside">
            <li className="bg-red-200 p-5 border-l-4 border-celeste"><a href="#section1" className="text-blue-500  py-5 border-t-3 border-celeste" onClick={(e) => handleAnchorClick(e, 'section1')}>1. ¿Cuál es el contenido y alcance de esta Política de Privacidad?</a></li>
            <li><a href="#section2" className="text-blue-500 hover:underline" onClick={(e) => handleAnchorClick(e, 'section2')}>2. Alcance de su consentimiento</a></li>
            <li><a href="#section3"  onClick={(e) => handleAnchorClick(e, 'section3')} className="text-blue-500 hover:underline">3. ¡Para tener en claro al momento de leer nuestra Política!</a></li>
            <li><a href="#section4" onClick={(e) => handleAnchorClick(e, 'section4')} className="text-blue-500 hover:underline">4. ¿Qué información recolectamos y tratamos?</a></li>
            <li><a href="#section5" onClick={(e) => handleAnchorClick(e, 'section5')} className="text-blue-500 hover:underline">5. ¿Con qué finalidades tratamos la información?</a></li>
            <li><a href="#section6" className="text-blue-500 hover:underline" onClick={(e) => handleAnchorClick(e, 'section6')}>6. ¿Con quien compartimos la información y cómo podemos tratar su Información Personal?</a></li>
            </ul>
        </div>

        {/* Contenido de la Política de Privacidad */}
        <div className="w-3/4 p-6 bg-dark-light shadow-md rounded-lg">
            <p className="mb-4">
            La protección de su información es importante para nosotros. La presente Política de Privacidad es aplicable a todas aquellas actividades que involucran el tratamiento de su información y tiene el propósito de garantizar transparencia y control en el modo en que tratamos su información.
            </p>

            <h2 id="section1" className="text-xl font-semibold mt-6 mb-2">1. ¿Cuál es el contenido y alcance de esta Política de Privacidad?</h2>
            <p className="mb-4">
            Este documento contiene la Política de Privacidad (la “Política”) que rige entre ATÓMICO3 S.A. (“Atómico”), en adelante "Las Sociedades" y según corresponda en forma individual y separada, y a los usuarios (el “Usuario” o en plural, los “Usuarios”), siempre que los Usuarios accedan o utilicen una o varias de las siguientes plataformas:
            </p>
        <ul className="list-disc list-inside mb-4">
          <li>El sitio web <a href="https://www.Atómico3.io" className="text-blue-500 hover:underline">https://www.Atómico3.io</a> (“Sitio Web”).</li>
          <li>La aplicación móvil de “Atómico”, disponible para su descarga a través de los dispositivos móviles donde esta se encuentre disponible (“App”).</li>
          <li>La plataforma de intercambio de activos digitales provista a través del sitio web (“Exchange”).</li>
        </ul>
        <p className="mb-4">
          Para que sea más práctico llamaremos al Sitio Web, la App y al Exchange, indistintamente, como “Plataforma”.
        </p>

        <h2 id="section2" className="text-xl font-semibold mt-6 mb-2">2. Alcance de su consentimiento</h2>
        <p className="mb-4">
          Para proteger su información Atómico cumple con las normas vigentes en la República Argentina, en particular, las reglas y principios establecidos por la Ley N° 25.326 (en adelante, la “Ley de Protección de Datos Personales”).
        </p>

        <h2 id="section3" className="text-xl font-semibold mt-6 mb-2">3. ¡Para tener en claro al momento de leer nuestra Política!</h2>
        <p className="mb-4">
          A continuación, señalamos conceptos clave para entender y tener en cuenta durante la lectura de nuestra Política:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li><strong>AAIP:</strong> Es la Agencia de Acceso a la Información Pública de la República Argentina.</li>
          <li><strong>Afiliada:</strong> Se refiere a cualquier persona que controle a otra persona o que sea controlada por ella.</li>
          <li><strong>Base de datos:</strong> Conjunto organizado de Información Personal.</li>
          <li><strong>Consentimiento:</strong> Manifestación previa, libre, expresa e informada por parte del Titular de la Información Personal.</li>
          <li><strong>Responsable:</strong> Persona que es titular de una Base de datos.</li>
          <li><strong>Titular:</strong> Persona cuya Información Personal es objeto del tratamiento.</li>
          <li><strong>Transferencia:</strong> Envío de información a un receptor dentro o fuera del país.</li>
          <li><strong>Tratamiento:</strong> Operaciones y procedimientos que permiten el procesamiento de Información Personal.</li>
        </ul>

        <h2 id="section4" className="text-xl font-semibold mt-6 mb-2">4. ¿Qué información recolectamos y tratamos?</h2>
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

        <h2 id="section5" className="text-xl font-semibold mt-6 mb-2">5. ¿Con qué finalidades tratamos la información?</h2>
        <p className="mb-4">
          El Usuario acepta que Atómico podrá tratar toda la información con las siguientes finalidades:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Comunicarnos con el Usuario y prestar el Servicio.</li>
          <li>Validar información y verificar identidad.</li>
          <li>Mejorar y optimizar el Servicio.</li>
          <li>Realizar campañas de publicidad y/o marketing.</li>
          <li>Cumplir con la ley y regulaciones aplicables.</li>
        </ul>

        <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. ¿Con quien compartimos la información y cómo podemos tratar su Información Personal?</h2>
        <p className="mb-4">
          Para dar cumplimiento a las finalidades anteriormente detalladas la Información Total podrá ser compartida con:
        </p>
        <ol className="list-decimal list-inside mb-4">
          <li className="mb-2">Afiliadas de Atómico, socios y/o colaboradores comerciales.</li>
          <li className="mb-2">
            Proveedores de servicios de Atómico, incluyendo proveedores de servicios de tecnología, redes, transmisión de datos, identificación de personas, validación de identidad y otros prestadores que resultan necesarios para que Atómico pueda prestar correctamente todos sus Servicios a través de la Plataforma.
          </li>
          <li className="mb-2">Autoridades y organismos públicos y regulatorios nacionales, provinciales o municipales.</li>
          <li className="mb-2">
            Proveedores de servicios de marketing de Atómico y/o sus afiliadas para el análisis de las actividades del Usuario y la optimización de campañas de publicidad de Atómico, sus afiliadas o los Proveedores de Servicios, en cuyo caso la información procesada puede ser: 
            <ul className="list-disc list-inside mb-2">
              <li>Dirección de IP</li>
              <li>Direcciones de MAC</li>
              <li>ID del dispositivo y los IDs de las publicidades</li>
              <li>Encabezado HTTP que incluye la versión del SDK del procesador, país, idioma, configuración del dispositivo, versión del sistema operativo, así como la versión de la aplicación</li>
              <li>El Dispositivo del Usuario e información de su actividad web; y aplicaciones y tokens.</li>
            </ul>
          </li>
          <li className="mb-2">
            Proveedores de servicios de experiencia de usuario (UX) de Atómico y/o sus Afiliadas para el análisis de la experiencia del Usuario para mejorar la Plataforma, en cuyo caso la información procesada puede ser: 
            <ul className="list-disc list-inside mb-2">
              <li>Pantallas visitadas</li>
              <li>Patrones de interacción (como acciones de pantalla, gestos: toques, desplazamientos)</li>
              <li>Detalles del dispositivo (tipo, versión, modelo, sistema operativo)</li>
            </ul>
            Utilizamos la información recopilada por UXCam Inc. para mejorar nuestra aplicación.
          </li>
          <li className="mb-2">
            Proveedores de servicios de redes de envío y recepción de activos digitales de Atómico y/o sus Afiliadas, tales como Lightspark Group, Inc., incluyendo a usuarios finales de dichos proveedores, para permitir el servicio de envío y recepción de activos digitales a través de dichas redes, en cuyo caso la información procesada puede ser: 
            <ul className="list-disc list-inside mb-2">
              <li>Nombre del Usuario y dirección del usuario en dicha red.</li>
            </ul>
            Usted acepta que otros usuarios de dicha red puedan acceder a su nombre de usuario y dirección en esa red.
          </li>
        </ol>
        <p className="mb-4">
          Usted puede en cualquier momento revocar su consentimiento para la transmisión a terceros de su Información Personal, comunicándose con nosotros personalmente o por correo electrónico a las direcciones especificadas al pie de esta Política. La revocación, dependiendo de su alcance, podría ocasionar que nosotros ya no estemos en condiciones de seguir prestando el Servicio.
        </p>
        <p className="mb-4">
          Cualquiera de las entidades señaladas en los apartados anteriores pueden estar en Paraguay, Argentina, Chile, Bolivia, México o ubicados inclusive en países de otro continente u organismos internacionales o supranacionales que, conforme a la legislación vigente aplicable, no proporcionen niveles de protección de datos personales adecuados, como entre otros, Brasil o Estados Unidos. En consecuencia, al aceptar esta Política el Usuario otorga su consentimiento expreso a que su Información Total, incluyendo su Información Personal, pueda ser transferidas internacionalmente por Atómico, incluso a países u organismos internacionales o supranacionales que no proporcionen niveles de protección de datos personales adecuados, conforme a la legislación vigente aplicable.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">7. ¿Qué medidas de seguridad y confidencialidad de la información tomamos?</h2>
        <p className="mb-4">
          En cumplimiento de la Ley de Protección de Datos Personales, de la República Argentina, y de la Secretaría de Prevención de Lavado de Dinero o Bienes. Atómico ha tomado medidas adecuadas para proteger la seguridad y confidencialidad de su Información Personal, garantizar que lo previsto en esta Política sea respetado, proteger su Información Personal contra pérdida, uso indebido y acceso, divulgación, alteración o destrucción no autorizados.
        </p>
        <p className="mb-4">A fin de garantizar un nivel de seguridad adecuado de su Información Personal, Atómico puede tomar, entre otras, las siguientes medidas:</p>
        <ul className="list-disc list-inside mb-4">
          <li>El cifrado de Información Personal, cuando proceda;</li>
          <li>Medidas capaces de garantizar la confidencialidad, integridad, disponibilidad y servicios de tratamiento;</li>
          <li>Medidas capaces de restaurar la disponibilidad y el acceso a la Información Personal de forma rápida en caso de incidente físico o técnico;</li>
          <li>Procesos de verificación, evaluación y valoración regulares de la eficacia de las medidas técnicas y organizativas;</li>
          <li>Evaluación periódica del riesgo de destrucción, pérdida o alteración accidental o ilícita de Información Personal transferida, conservada o tratada de otra forma, o la comunicación o acceso no autorizados a dicha información;</li>
          <li>Medidas para garantizar que cualquier persona que actúe bajo la autoridad de Atómico que tenga acceso a Información Personal sólo pueda tratar dicha información siguiendo instrucciones de Atómico.</li>
        </ul>
        <p className="mb-4">
          Su Información Personal será tratada con confidencialidad, comprometiéndonos, dentro del alcance de esta Política, a guardar secreto respecto de la misma y a adoptar todas las medidas necesarias que eviten su alteración, pérdida, y tratamiento o acceso no autorizado, de acuerdo con lo establecido en la legislación aplicable y en esta Política.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">8. ¿Cómo podemos comunicarnos con usted y qué tipo de información podemos proveer?</h2>
        <p className="mb-4">
          Usted podrá seleccionar los tipos de información que no desea recibir de nosotros, incluyendo información promocional o publicitaria de Atómico y/o de sus Afiliadas o de terceros. No obstante, usted no podrá impedir, mientras posea una cuenta de Usuario, que le enviemos información no promocional, tal como información sobre su cuenta de Usuario o sobre solicitudes o reclamos en curso.
        </p>
        <p className="mb-4">
          El Servicio puede transferir cookies a la unidad de almacenamiento del dispositivo a través del que accede a, o usa el Servicio. Las cookies son identificadores alfanuméricos que funcionan con su navegador web y que permiten que nuestros sistemas lo reconozcan y mejoren el uso del Servicio. Usted puede eliminar las cookies o evitar que las enviemos. Consulte la sección de ayuda de su navegador para realizar cualquiera de estas operaciones. De cualquier modo, le recomendamos que permita las cookies de nuestro Servicio: algunas funciones del Servicio pueden no operar adecuadamente o inhabilitarse por completo si las cookies están deshabilitadas.
        </p>
        <p className="mb-4">
          Asimismo, usted podrá solicitar la revocación del monitoreo de la ubicación geográfica de los dispositivos a través de los cuales accede a el Servicio. No obstante, esta revocación podría inhabilitar algunas funciones o impedir directamente la prestación del Servicio.
        </p>
        <p className="mb-4">
          El Servicio puede proporcionar enlaces a sitios web de terceros. Esos sitios web no son operados por nosotros y están fuera de nuestro control. Tenga presente que estos sitios pueden recopilar información sobre usted y que, al visitarlos, pasará a estar sujeto a sus propias políticas de privacidad, por consiguiente, recomendamos que lea esos y otros documentos que rijan su relación con los proveedores de esos sitios web. Atómico no es responsable de las prácticas de privacidad de estos sitios y no puede garantizar la seguridad de la información que recolectan. Esta Política aplica solo al uso del Servicio, y no a otras aplicaciones o sitios web de terceros con los que Atómico tenga conexiones o hipervínculos.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">9. Cambios en la Política</h2>
        <p className="mb-4">
          Atómico puede, a su exclusivo criterio, modificar o alterar esta Política en cualquier momento, lo que se informará a los Usuarios por medio de un aviso en el Servicio. Cualquier cambio a la Política entrará en vigencia de forma automática al ser publicado en el Servicio. Se considera que el Usuario ha aceptado los cambios si utiliza el Servicio después de que dichos cambios hayan sido publicados. En el caso de que el Usuario no acepte los cambios propuestos, podrá solicitar la eliminación de su cuenta y dejar de usar el Servicio. Asimismo, Atómico se reserva el derecho de, sin previo aviso, interrumpir la operación de la Plataforma y/o los Servicios a los Usuarios y/o suprimir las funcionalidades de la Plataforma, a su exclusivo criterio. En caso de una enajenación o cambio de control de las Sociedades, Atómico podrá transferir la Información Total a cualquier parte, incluyendo a cualquier parte asociada a la operación, y en tal caso la Información Total podrá ser utilizada de acuerdo con esta Política o la política de privacidad de esa parte.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Cómo comunicarse con Atómico</h2>
        <p className="mb-4">
          Si tiene dudas sobre esta Política o cómo manejamos su Información Personal, puede comunicarse con nosotros en:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Dirección: Calle 123, Ciudad, País</li>
          <li>Teléfono: +123 456 7890</li>
          <li>Email: soporte@atomico.com</li>
        </ul>
      </section>
      </div>
    </div>
    </section>
  );
};
