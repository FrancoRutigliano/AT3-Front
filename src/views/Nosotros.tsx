import at3 from '../assets/lineas.png'
// import at3 from '../assets/Atomico.png'
import atomico3 from '../assets/atomicLogo.png'
import { Valores } from '../components/Valores'
export const Nosotros = () => {
  return (
    <>

<section
  className=""
  
>
  <div className="overflow-hidden  h-1/3 md:h-1/2 lg:h-screen bg-cover bg-no-repeat p-8 md:p-12 lg:px-16 lg:py-24" style={{
    background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 36, 0.7)), url(${at3})`,
    backgroundPosition: 'center 50%', 
    backgroundRepeat: 'no-repeat'
}}>
    <div className="text-center ltr:sm:text-left rtl:sm:text-right flex flex-col justify-center items-center mb-10">
      <img src={atomico3} alt="atomico" className='w-2/3 lg:w-1/3 max-w-[550px]' />
      <p className=" w-full lg:w-2/3   mt-2  md:text-lg text-center text-xs ">
        Somos una compañía legalmente constituida en Paraguay, dedicada al desarrollo y optimización de actividades mineras con un enfoque
        integral en la cadena de valor de la electromovilidad en Latinoamérica.
      </p>
      <div className="mt-4 sm:mt-8 flex justify-start">
        {/* Tu botón u otros elementos aquí */}
      </div>
    </div>
  </div>
</section>

<section className='h-screen' style={{ backgroundColor: '#000024' }}>
  <Valores/>
</section>

    </>
  )
}
