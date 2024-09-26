import at3 from '../assets/lineas.png'
// import at3 from '../assets/Atomico.png'
import atomico3 from '../assets/atomicLogo.png'
import { Valores } from '../components/Valores'
import { useTranslation } from 'react-i18next'
export const Nosotros = () => {
  const [t] = useTranslation("global")

  return (
    <>

      <section
        className="bg-gradient-to-b from-[#000017] to-transparent"

      >
        {/* <div className="overflow-hidden  h-1/3 md:h-1/2 lg:h-screen bg-cover bg-no-repeat p-8 md:p-12 lg:px-16 lg:py-24" style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 36, 0.7)), url(${at3})`,
          backgroundPosition: 'center 50%',
          backgroundRepeat: 'no-repeat'
        }}> */}
        <div className="relative h-[30rem] flex items-center justify-center ">
  <div
    className="absolute inset-0 bg-cover bg-center z-0"
    style={{ backgroundImage: `url('${at3}')` }}
  />
  <div className="absolute inset-0 bg-black/50   opacity-70 z-10" /> {/* Overlay más oscuro */}
  
  <div className="relative z-20 flex flex-col justify-center items-center  h-full lg:mb-20">
    <img src={atomico3} alt="atomico" className='w-2/3 lg:w-1/3 max-w-[550px]' />
    <p className="w-full lg:w-2/3 mt-2 md:text-lg text-center text-xs">
      {t("nosotros.title")}
    </p>
    <div className="mt-4 sm:mt-8 flex justify-start">
      {/* Tu botón u otros elementos aquí */}
    </div>
  </div>
</div>


        {/* </div> */}
      </section>

      <section className='inset-x-0 top-0 h-30 bg-gradient-to-b from-[#000017] to-transparent' style={{ backgroundColor: '#000024' }}>
        <Valores />
      </section>

    </>
  )
}
