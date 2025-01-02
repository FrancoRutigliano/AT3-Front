import { useTranslation } from "react-i18next"
import { Noticia } from "../../components/Noticia"
import m1 from '../../assets/medios/m1.jpg'
import m2 from '../../assets/medios/m2.jpeg'
import m3 from '../../assets/medios/m3.jpg'

export const Medios = () => {
    const [t] = useTranslation("global")

    const noticias = [
        {imagen: m1, title:  t("medios.m1"), subtitle: "data BA",link: "https://databa.ar/nota/6149/encuentro-entre-el-presidente-de-la-camara-latinoamericana-del-litio-y-el-secretario-de-mineria-de-argentina-un-dialogo-entre-mundos-divergentes/" },
        {imagen: m2, title:  t("medios.m2"), subtitle: "Pablo Rutigliano", link: "https://es.investing.com/analysis/el-precio-del-litio-200462539" },
        {imagen: m3, title:  t("medios.m3"), subtitle: "Infobae", link: "https://www.infobae.com/movant/2024/05/22/el-litio-es-el-commodity-estrategico-para-desarrollar-la-transicion-energetica/" },
        
      ]

  return (
    <section className="bg-white text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="text-center w-full">
          <h2 className="lg:mb-20 font-bold text-celeste text-5xl md:text-6xl lg:text-7xl">{t("medios.medios")}</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
         
            {
              noticias.map(({title, subtitle, link, imagen}, index) => 
              
              <Noticia key={`${subtitle}-${index}}`} title={title} subtitle={subtitle} link={link} imagen={imagen}/>
              
              )
            }

        </div>


      </div>
    </section>
  )
}
