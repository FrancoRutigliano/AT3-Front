
import { useTranslation } from 'react-i18next'
import riesgo from '../assets/valores/riesgo.png'
import mountain from '../assets/valores/mountain.png'
import target from '../assets/valores/target.png'

export const Valores = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <section className="bg-white text-white pt-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto text-center">
          <h2 className="text-3xl font-bold sm:text-6xl lg:mt-10 mb-16 lg:mb-24 text-celeste">{t("nosotros.Nuestros Valores")}</h2>

           
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className=" block rounded-xl border  p-8 shadow-xl transition border-celeste hover:shadow-celeste"
            >
              <img className="max-w-[35px] md:max-w-[50px] lg:max-w-[50px]" src={riesgo} alt="valores" />

              <h2 className="mt-4 text-xl font-bold text-celeste">{t("nosotros.Propósito")}</h2>

              <p className="mt-1 text-sm text-dark-light">
              {t("nosotros.Propósito descripcion")}
              </p>
            </a>


            <a
              className=" block rounded-xl border border-black p-8 shadow-xl transition border-celeste hover:shadow-celeste"
            >
              <img className="max-w-[35px] md:max-w-[50px] lg:max-w-[50px]" src={mountain} alt="valores" />

              <h2 className="mt-4 text-xl font-bold text-celeste">{t("nosotros.Visión")}</h2>

              <p className="mt-1 text-sm text-dark-light">
              {t("nosotros.Visión descripcion")}
                
              </p>
            </a>

            <a
              className=" block rounded-xl border border-black p-8 shadow-xl transition border-celeste hover:shadow-celeste"
            >
              <img className="max-w-[35px] md:max-w-[50px] lg:max-w-[50px]" src={target} alt="" />

              <h2 className="mt-4 text-xl font-bold text-celeste">{t("nosotros.Misión")}
              </h2>

              <p className="mt-1 text-sm text-dark-light">
              {t("nosotros.Misión descripcion")}

              
              </p>
            </a>




          </div>

        </div>
      </section>
    </>
  )
}
