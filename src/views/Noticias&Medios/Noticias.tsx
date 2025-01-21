import { useTranslation } from 'react-i18next'
import { Noticia } from '../../components/Noticia'
import litio from '../../assets/news/Litio.jpeg'
import litioProyeccion from '../../assets/news/litioProyeccion.webp'
import at3 from '../../assets/news/at3-image.jpeg'
import at3img from '../../assets/news/at3-image2.jpeg'
import n4 from '../../assets/news/n4.webp'
import n5 from '../../assets/news/n5.webp'
import web3 from '../../assets/news/web3.jpg'
import ambito from '../../assets/news/cardanojpg.webp'
import ambito1 from  '../../assets/news/token-blockchain-cripto.webp'
import cryptonews from  '../../assets/news/discovery.jpg'
import hodler from  '../../assets/news/Blockchain.png.webp'
import coingape from  '../../assets/news/Paraguay-Atomico3.jpg'
import thecryptoradio from  '../../assets/news/Buenos-Aires.webp'
import territorioblockchain from  '../../assets/news/territorioblockchain.jpg'
import cointelegraph from  '../../assets/news/cointelegraph.avif'
import ambito2 from '../../assets/news/ambito2.webp'
import iproup from '../../assets/news/37028.webp'
import eldelegado from '../../assets/news/delegado.jpg'
import voi from '../../assets/news/cardano_ada.jpg'
import mobility from '../../assets/news/emobility.jpg'
import cripto247 from '../../assets/news/cripto247.webp'
import databar from '../../assets/news/databar.jpg'
import databar2 from '../../assets/news/databar2.jpg'
import agendaenergica from '../../assets/news/agenda.jpeg'

export const Noticias = () => {
  const [t] = useTranslation("global")

  const noticias = [
    {imagen: at3, title:  t("noticias.n1"), subtitle: "Nación Web",link: "https://nacionweb.com.ar/aumento-del-precio-del-litio-impulsa-a-la-criptomoneda-argentina-atomico-3-como-opcion-de-inversion-solida/" },
    {imagen: litioProyeccion, title:  t("noticias.n2"), subtitle: "Agencia Política" ,link: "https://agenciapolitica.com.ar/la-valorizacion-del-litio-en-latinoamerica-perspectivas-proyecciones-y-su-impacto-en-el-mercado-global/" },
    {imagen: at3img, title:  t("noticias.n3"), subtitle: "Agencia Política" ,link: "https://noticiasargentinas.com/economia/atomico-3--la-criptomoneda-argentina-ligada-al-litio-reduce-su-emision-para-que-sea-sostenible-en-el-tiempo_a669c39acd066f26ecefe0568?fbclid=IwZXh0bgNhZW0CMTAAAR2t5kt4DbjXVmaGOKH-lOZuFmAcLYq2iKPRhkVG9j5xc9LjCc5X0gpPaIg_aem_b1TPAFvZgRThufzAXn8i3Q" },
    {imagen: n4, title:  t("noticias.n4"), subtitle: "El Economista" ,link: "https://eleconomista.com.ar/energia/cual-mineral-podria-alcanzar-us-8700-millones-exportaciones-2030-n78652#google_vignette" },
    {imagen: n5, title:  t("noticias.n5"), subtitle: "iProfesional" ,link: "https://www.iprofesional.com/economia/415582-litio-que-exigen-camaras-sector-gobierno-javier-milei.amp" },
    {imagen: litio, title: t("noticias.n6"), subtitle: "Noticias Argentinas", link: "https://noticiasargentinas.com/economia/pocos-avances-en-la-conformacion-de-un-mercado-de-capitales-regional-para-el-litio_a67152e718c81053b1bdc79c1"},
	  {imagen: ambito, title: t("Cardano y Atómico 3 se preparan para lanzar el primer índice cripto de litio a nivel global"), subtitle: "Noticias Ambito", link: "https://www.ambito.com/tecnologia/cardano-y-atomico-3-se-preparan-lanzar-el-primer-indice-cripto-litio-nivel-global-n6090642"},
	  {imagen: web3, title: t("Asociación innovadora democratiza el mercado del litio y acelera la transición hacia la energía limpia"), subtitle: "Noticias web3", link: "https://web3news.com.br/noticia/1454/parceria-inovadora-democratiza-o-mercado-de-litio-e-acelera-a-transicao-para-energia-limpa"},
    {imagen: ambito1, title:  t("Atómico 3 y Cardano unen fuerzas para tokenizar el litio y democratizar recursos naturales"), subtitle: "Ambito1" ,link: "https://www.ambito.com/tecnologia/atomico-3-y-cardano-unen-fuerzas-tokenizar-el-litio-y-democratizar-recursos-naturales-n6089421" },
	  {imagen: cryptonews, title:  t("Atomico 3, uno de los proyectos cripto más importantes de Latinoamérica ha cerrado una alianza junto a Cardano."), subtitle: "CryptoNews" ,link: "https://cryptonews.net/es/news/blockchain/30188347/" },
	  {imagen: hodler, title:  t("Alianza entre Atómico 3 y Cardano: La tokenización del litio transforma el mercado globa"), subtitle: "SoyHodler" ,link: "https://soyhodler.com/alianza-entre-atomico-3-y-cardano-la-tokenizacion-del-litio-transforma-el-mercado-global/" },
	  {imagen: coingape, title:  t("Startup Latinoamericana Une Fuerzas Con Cardano Para Tokenizar Recursos Naturales"), subtitle: "CoinGape" ,link: "https://es.coingape.com/startup-latinoamericana-une-fuerzas-con-cardano-para-tokenizar-recursos-naturales/" },
	  {imagen: thecryptoradio, title: t("Could lithium be crypto’s next big backing?"), subtitle: "TheCryptoRadio" ,link: "https://thecryptoradio.com/Could-lithium-be-crypto-s-next-big-backing"},
    {imagen: territorioblockchain, title:  t("Cardano y Atómico3 se preparan para lanzar el primer índice cripto de litio a nivel global"), subtitle: "TerritorioBlockchain" ,link: "https://territorioblockchain.com/cardano-y-atomico-3-se-preparan-para-lanzar-el-primer-indice-cripto-de-litio-a-nivel-global/" },	
    {imagen: cointelegraph, title:  t("Atómico 3 y Cardano forman alianza para tokenizar litio"), subtitle: "CoinTelegraph" ,link: "https://es.cointelegraph.com/news/lithium-tokenization-atomic-3-and-cardano-together-in-the-democratization-of-natural-resources" },   
    {imagen: ambito2, title:  t("Atómico 3 y zenGate trabajan en un proyecto global de cripto litio"), subtitle: "Ambito2" ,link: "https://www.ambito.com/tecnologia/atomico-3-y-zengate-trabajan-un-proyecto-global-cripto-litio-n6091311" },
	  {imagen: iproup, title: t("Cardano y Atómico3 se unen para potenciar la comercialización de litio en el país"), subtitle: "IproUp" ,link: "https://www.iproup.com/innovacion/51956-cardano-y-atomico3-se-unen-para-potenciar-el-mercado-de-litio-en-argentina"},
    {imagen: eldelegado, title:  t("DEL SALAR A LA EMPRESA PYME: PYMES ENERGÉTICAS ANTE EL DESAFÍO DE LA ELECTROMOVILIDAD"), subtitle: "ElDelegado" ,link: "https://diarioeldelegado.com.ar/economia/del-salar-a-la-empresa-pyme-pymes-energeticas-ante-el-desafio-de-la-electromovilidad/" },
    {imagen: voi, title:  t("Mantul, Argentina Bakal Tokenisasi Lithium di Blockchain Cardano!"), subtitle: "Voi" ,link: "https://voi.id/teknologi/445241/mantul-argentina-bakal-tokenisasi-lithium-di-blockchain-cardano" },
    {imagen: mobility, title:  t("Del salar a la batería. Argentina ante el desafío de transformar el litio en valor agregado eMobility"), subtitle: "MobilityPortal" ,link: "https://mobilityportal.lat/argentina-litio-emobility/" },
	  {imagen: cripto247, title:  t("Argentina va camino a convertirse en el primer país en tokenizar litio en el mundo"), subtitle: "Cripto247" ,link: "https://www.iprofesional.com/economia/415582-litio-que-exigen-camaras-sector-go" },
	  {imagen: databar, title:  t("Pablo Rutigliano: El verdadero outsider que encaja en la visión de Javier Milei"), subtitle: "DataBa.ar" ,link: "https://databa.ar/nota/6484/pablo-rutigliano-el-verdadero-outsider-que-encaja-en-la-vision-de-javier-milei/" },
	  {imagen: databar2, title:  t("Argentina liderará el camino: la primera tokenización del litio en el mundo"), subtitle: "DataBa.ar" ,link: "https://databa.ar/nota/6483/argentina-liderara-el-camino-la-primera-tokenizacion-del-litio-en-el-mundo/" },
	  {imagen: agendaenergica, title: t("Pablo Rutigliano, presidente de la Cámara Latinoamericana del Litio, emerge como un candidato que representa fielmente la visión disruptiva del presidente Javier Milei."), subtitle: "AgendaEnergica" ,link: "https://agendaenergetica.com.ar/Noticia.php?Id=3231"},
  ]

  return (
    <section className="bg-white text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="text-center w-full">
          <h2 className="lg:mb-24 font-bold text-celeste text-5xl md:text-6xl lg:text-7xl">{t("noticias.noticias")}</h2>
          
        </div>
        <div className="mt-8  grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          
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
