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
        <div className="overflow-hidden  h-1/3 md:h-1/2 bg-cover bg-no-repeat p-2 md:p-12 lg:px-16 lg:pt-4" style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.3)), url(${at3})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }} >
          <div className="relative  flex items-center justify-center w-full ">

            <div className="relative z-20 flex flex-col  items-center  break-words w-full">
              <h2 className="text-2xl font-bold  sm:text-3xl lg:text-5xl text-celeste py-2 ">{t("nosotros.nosotros")}</h2>

              <p className="text-[0.7rem] sm:text-base w-full  mt-2 lg:mt-0 text-justify px-4 sm:px-7 lg:px-44  ">
                {/* {t("nosotros.title")} */}
                <br />

                {t("nosotros.p1")} <br /> <br />
                {t("nosotros.p2")}  <br /> <br />
                {t("nosotros.p3")} <br /> <br />
                {t("nosotros.p4")}
                <br />
                {t("nosotros.p5")}

                <br /> <br />
                {t("nosotros.p6")}

                <br />
                {t("nosotros.p7")}

                <br />
                {t("nosotros.p8")}

                <br />

               
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
