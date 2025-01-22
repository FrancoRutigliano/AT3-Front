import pablo from '../../assets/team/Pablo.jpg'
import ezequiel from '../../assets/team/Ezequiel.jpg'
import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { Card } from './Card'

export const Team = () => {

  const [t] = useTranslation("global")
  const equipoRef = useRef<HTMLDivElement>(null); // Referencia al componente al que quieres desplazarte
  const location = useLocation();

  useEffect(() => {
    // Desplazarse si el hash en la URL coincide con "#equipo"
    if (location.hash === '#equipo' && equipoRef.current) {
      // Obtener la posición del elemento
      const elementPosition = equipoRef.current.getBoundingClientRect().top + window.scrollY;

      // Ajustar el scroll para que se desplace 100px más arriba
      window.scrollTo({
        top: elementPosition - 100, // Ajusta la posición sumando o restando píxeles
        behavior: 'smooth', // Desplazamiento suave
      });
    }
  }, [location]);


  return (
    <article className="bg-white p-5 pt-16 lg:pt-28" ref={equipoRef} id="equipo">

      <div className="text-center text-2xl">

        <h2 className='text-3xl lg:text-6xl font-bold sm:text-4xl lg:mt-5 mb-10 lg:mb-16 text-celeste'>{t("team.nuestro equipo")}</h2>
        <p className='text-sm lg:text-xl text-justify mb-16 px-8 lg:px-0 lg:mb-16 lg:mx-[10%] text-dark-light'>{t("team.nuestro equipo descripcion")}</p>
      </div>

      <section className='flex flex-wrap justify-center p- '>
        
        {
          [{ nombre: "Pablo Rutigliano", puesto: t("team.ceo y fundador"), imagen: pablo, alt: "Pablo Rutigliano" },
            { nombre: "Ezequiel Canclini", puesto: t("team.presidente"), imagen: ezequiel, alt: "Ezequiel Canclini" },
     
          ].map(({ nombre, puesto, imagen, alt }) => (

            <Card nombre={nombre} puesto={puesto} imagen={imagen} alt={alt} />
          ))
        }
        
      </section>
    </article>


  )
}
