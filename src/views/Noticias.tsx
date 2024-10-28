import litio from '../assets/news/Litio.jpeg'
import at3 from '../assets/news/at3-image.jpeg'
import at3img from '../assets/news/at3-image2.jpeg'
import n4 from '../assets/news/n4.webp'
import n5 from '../assets/news/n5.webp'
import n6 from '../assets/news/n6.webp'


import { useTranslation } from 'react-i18next'
import { Noticia } from '../components/Noticia'
export const Noticias = () => {
  const [t] = useTranslation("global")

  const noticias = [
    {imagen: at3, title:  t("noticias.n1"), subtitle: "Nación Web",link: "https://nacionweb.com.ar/aumento-del-precio-del-litio-impulsa-a-la-criptomoneda-argentina-atomico-3-como-opcion-de-inversion-solida/" },
    {imagen: litio, title:  t("noticias.n2"), subtitle: "Agencia Política" ,link: "https://agenciapolitica.com.ar/la-valorizacion-del-litio-en-latinoamerica-perspectivas-proyecciones-y-su-impacto-en-el-mercado-global/" },
    {imagen: at3img, title:  t("noticias.n3"), subtitle: "Agencia Política" ,link: "https://noticiasargentinas.com/economia/atomico-3--la-criptomoneda-argentina-ligada-al-litio-reduce-su-emision-para-que-sea-sostenible-en-el-tiempo_a669c39acd066f26ecefe0568?fbclid=IwZXh0bgNhZW0CMTAAAR2t5kt4DbjXVmaGOKH-lOZuFmAcLYq2iKPRhkVG9j5xc9LjCc5X0gpPaIg_aem_b1TPAFvZgRThufzAXn8i3Q" },
    {imagen: n4, title:  t("noticias.n4"), subtitle: "El Economista" ,link: "https://eleconomista.com.ar/energia/cual-mineral-podria-alcanzar-us-8700-millones-exportaciones-2030-n78652#google_vignette" },
    {imagen: n5, title:  t("noticias.n5"), subtitle: "iProfesional" ,link: "https://www.iprofesional.com/economia/415582-litio-que-exigen-camaras-sector-gobierno-javier-milei.amp" },
    {imagen: n6, title: t("noticias.n6"), subtitle: "Noticias Argentinas", link: "https://noticiasargentinas.com/economia/pocos-avances-en-la-conformacion-de-un-mercado-de-capitales-regional-para-el-litio_a67152e718c81053b1bdc79c1"}

  ]

  return (
    <section className=" text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="text-center w-full">
          <h2 className="lg:mb-20 font-bold bg-custom-gradient bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl">{t("noticias.noticias")}</h2>
          
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
