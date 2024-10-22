// import at3 from '../assets/lineas.png'
import { Valores } from '../components/Valores'
import { Team } from '../components/Team'
import { useTranslation } from 'react-i18next'

// import at3 from '../assets/news/at3-image.jpeg'

// import at3 from '../assets/pruebas/p1.jpeg'
// import at3 from '../assets/pruebas/p2.jpeg'
// import at3 from '../assets/pruebas/p3.jpeg'
// import at3 from '../assets/pruebas/p4.jpeg'
// import at3 from '../assets/pruebas/p5.jpeg'
// import at3 from '../assets/pruebas/p6.jpeg'
// import at3 from '../assets/pruebas/p7.jpeg'
// import at3 from '../assets/pruebas/p7.jpeg'
// import at3 from '../assets/pruebas/p8.webp'
// import at3 from '../assets/pruebas/p9.jpeg'
// import at3 from '../assets/pruebas/p10.jpeg'
// import at3 from '../assets/pruebas/p11.jpeg'

// import at3 from '../assets/pruebas/p12.jpeg'
import at3 from '../assets/pruebas/p13.avif'
// import at3 from '../assets/pruebas/p14.jpg'
// import at3 from '../assets/pruebas/p16.jpg'
// import at3 from '../assets/pruebas/p17.avif'
// import at3 from '../assets/pruebas/p18.avif'
// import at3 from '../assets/pruebas/p19.avif'
// import { Work } from './Work'


export const Nosotros = () => {
  const [t] = useTranslation("global")

  return (
    <>

      <section
        className=""
      >
        <div className="overflow-hidden  h-1/3 md:h-1/2 bg-cover bg-no-repeat p-8 md:p-12 lg:px-16 lg:py-24" style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.2)), url(${at3})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }} >
          <div className="relative h-[30rem] flex items-center justify-center ">
            {/* <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url('${at3}')` }}
  /> */}
            {/* <div className="absolute inset-0 bg-black/50  opacity-100 z-10" />  */}

            <div className="relative z-20 flex flex-col  items-center m">
              <h2 className="text-3xl font-bold sm:text-6xl text-celeste py-2">Nosotros</h2>

              <p className="text-base w-full  mt-2text-center px-5 md:px-4 ">
                {/* {t("nosotros.title")} */}
                <br />
                {/* {t("nosotros.title p1")} */}
                {/* Somos una compañía legalmente constituida en la Republica del Paraguay, dedicados al desarrollo y optimización de la actividad minera. En particular a la minería del Litio. <br />
                Aportamos a la actividad Minera, la herramienta de la tokenización (de sus reservas de litio certificadas), buscando con esto innovar y revolucionar la industria de la electromovilidad a nivel mundial.
                Este enfoque totalmente innovador, facilita la inversión global y sostenible, llevando el desarrollo económico a las regiones ricas en litio, al posicionar al token como un activo digital de alto valor en el Mercado Global.
                Mediante la conversión de dichas reservas de litio certificadas en tokens digitales, facilitamos a la industria minera la financiación de su operatoria. 
                <br />
                Contribuyendo al desarrollo de su actividad integral, y a la transición hacia un futuro más sostenible.
                El token Atómico3, bajo la sigla “AT3”, está diseñado para representar la tokenización de las reservas de litio. La emisión actual de AT3 es de 100,000,000,000 tokens, cada uno respaldado por reservas certificadas de litio conforme a las normas internacionales NI 43-101.
                El contrato blockchain que respalda esta emisión está registrado bajo el número: (0X22A79A08DDB74A9F1A4EBE5DA75300AD9F1AED76), y garantiza la integridad y la transparencia de los activos subyacentes.
                Este contrato blockchain no solo valida la existencia y el valor de las reservas de litio, sino que también asegura que los datos relacionados con estos activos sean accesibles y verificables en tiempo real. <br />
                La compañía utiliza un modelo innovador de tokenización de activos del mundo real (RWA, por sus siglas en inglés), para facilitar la integración de recursos naturales en la economía digital.
                La marca y la patente asociadas a este modelo están registradas bajo la titularidad del CEO- Fundador de Atómico 3 SA, Lic. Pablo Rutigliano, con el código internacional clase número 9. Todos los derechos relacionados con la marca y el modelo están formalmente registrados y son de uso exclusivo de Atómico 3 S.A. <br />
                De esta manera, AT3 se perfila para desarrollar sus precios en función de las reservas mineras, permitiendo así establecer una relación directa entre AT3 (Átomico3) y el precio del Li₂CO₃ (carbonato de litio grado batería).
                Por lo tanto, las herramientas establecidas para desarrollar esta formación consisten en cumplir con el plan de tokenización preestablecido por Átomico3.
                En conclusión, 1 AT3 equivaldrá al precio de 1 kilogramo de carbonato de litio.
                La colaboración entre los gobiernos, empresas y comunidades, junto con una regulación legal clara y efectiva, serán cruciales para asegurar el camino al éxito de esta transición hacia una economía más limpia y equitativa.
                Buscamos, transformar el mercado global del litio al pretender declararlo un commodity.

                 La tokenización de activos como el litio tiene el potencial de mejorar la cadena de valor de la minería, y puede llevar a una toma de decisiones más informada y a una mayor eficiencia en la producción.
                La participación de entidades financieras en la custodia y administración de fondos generados a través de la tokenización, son esenciales para aumentar la confianza en el sistema y atraer inversores.
                Esto asegurará un desarrollo económico sostenible y equitativo, beneficiando tanto a las regiones productoras de litio como a los consumidores de productos derivados de este mineral esencial.
                Nuestra billetera oficial es la 0XAFF655C15C943121DEA79B67C47AC9BD2253FD65. */}

                {t("nosotros.p1")} <br />
                {t("nosotros.p2")}  <br /> <br />
                {t("nosotros.p3")} <br />
                {t("nosotros.p4")}
               <br />
               {t("nosotros.p5")}

                <br /> <br />
               {t("nosotros.p6")}

                 <br />
               {t("nosotros.p7")}

                <br />
               {t("nosotros.p8")}

        

              </p>
              <div className="mt-4 sm:mt-8 flex justify-start">
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className='inset-x-0 top-0 h-30 bg-gradient-to-b from-[#000012] to-transparent' style={{ backgroundColor: '#000024' }}>
        <Valores />
      </section>

      <Team />
      {/* <Work /> */}
    </>
  )
}
