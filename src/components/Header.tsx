
import { useTranslation } from 'react-i18next'
import atomico from '../assets/Atomico.png'
import { useState } from 'react';
import './Header.css'
import { Modal } from './Modal';
// import { SpringPopUp } from './SpringPopUp';
import e1 from '../assets/bg/e11.jpg'
import 'animate.css';
import { Form } from './Form';
// import { SpringPopUp } from './SpringPopUp';
import cardano from '../assets/caradno-circulo.png'
import cardanoWord from '../assets/cardano-palabra.png'
// import naveCardano from '../assets/nave-cardano.jpeg'
import naveCardano from '../assets/nave-planeta.png'

export const Header = () => {

  const [showModal, setShowModal] = useState(false)

  const [t] = useTranslation("global")
  // const [animate, setAnimate] = useState(false);
  const [isSpringBtn, setIsSpringBtn] = useState<boolean | null>(null);
  const [showingForm, setShowingForm] = useState(false)
  // const [showPopUp, setShowPopUp] = useState(false);

  const showForm = (isVisible: boolean) => {
    setShowingForm(isVisible)
  }


  const handleCloseModal = () => {
    setShowModal(false);
    setIsSpringBtn(null)

  };

  // const handleClosePopUp = () => {
  //   setShowPopUp(false)
  // }

  //  useEffect(() => {

  //     const isFirstTime = sessionStorage.getItem("isFirstTime");
  //     if (!isFirstTime) {
  //       setShowPopUp(true);
  //       sessionStorage.setItem("isFirstTime", "true");
  //     }
  //  }, [])


  if (showingForm) return (

    <>
      <Form documentType='whitepaper' showForm={showForm} />
    </>
  )

  return (
    <>

      {/* {showPopUp &&  <SpringPopUp handleClosePopUp={handleClosePopUp} /> } */}

      <Modal handleCloseModal={handleCloseModal} isSpringBtn={isSpringBtn} showModal={showModal} />

      <header className='h-screen  overflow-hidden bg-cover bg-no-repeat ' style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 18, 0), rgba(0, 0, 0, 0)), url(${naveCardano})`,
        backgroundPosition: 'center 100%  ',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>


        {/* Sección de texto */}


        <article className='flex  w-full    '>

          {/* container1 */}
          <div className=" p-4 w-full sm:w-4/5 text-center  sm:text-left pl-5 text-left     ">
            <h1 className=' font-bold text-shadow-bl text-5xl md:text-6xl lg:text-7xl mt-4 '>{t("header.bienvenido")}</h1>

            <p className='my-5 text-sm md:text-base lg:text-md text-shadow sm:w-2/3 '>
              {t("header.criptoactivo")}
            </p>
            {/* BOTONES */}
            {/* <div className='flex w-full bg-sky-2 py-3' > */}
            {/* <a className=' hover:cursor-pointer bg-white text- hidden md:block  max-w-[200px] border-2 border-[#6D6D6D] text-[#6D6D6D]  py-2 lg:py-3 rounded-md w-full lg:mb-3  px-6 text-center  hover:font-bold'>{t("navbar.iniciar sesion")}</a>

                <a className='ml-2 hover:cursor-pointer bg-white text- hidden md:block  max-w-[200px] border-2 border-[#6D6D6D] text-[#6D6D6D]  py-2 lg:py-3 rounded-md w-full lg:mb-3  px-6 text-center  hover:font-bold'>
                  {t("navbar.registrarse")}
                  </a> */}
            {/* </div> */}

          </div>

          <div className='hidden sm:block w-1/5  flex flex-col items-center justify-center  '>

            <div className=' h-full flex flex-col items-center justify-center'>

              <p className='   w-full text-center text-shadow-bl  text-2xl bg-200'>
                Partner tecnológico
              </p>
              <img src={cardano} alt="" className='bg-white rounded-[200px] w-[100px]  ' />
              <img src={cardanoWord} alt="" className='bg-white rounded-[200px] w-[125px] mt-2  object-cover' />
            </div>

          </div>



        </article>

        <article className=' w-full h-full'>
          <div className="hidden sm:block w-1/3 h-[50%]  ml-32">
            <img src={atomico} alt="atomico" className="object-contain w-full h-full" />
          </div>
            
            <div className='sm:hidden h-[200px]'>
            <img src={atomico} alt="atomico" className="object-contain w-full h-full" />
            </div>
              <div className='sm:hidden mt-7 flex flex-col items-center justify-center'>
              <p className='  w-full text-center text-shadow-bl  text-2xl bg-200'>
                Partner tecnológico
              </p>
              <img src={cardano} alt="" className='bg-white rounded-[200px] w-[100px]  ' />
              <img src={cardanoWord} alt="" className='bg-white rounded-[200px] w-[125px] mt-2  object-cover' />
              </div>

        </article>
        {/* cardano y atomico */}

        {/* <div className='absolute  top-6 right-0 mb-8  flex flex-col   w-[40%] flex items-end overflow-hidden pr-7 bg-'> */}
        {/* <div className='flex flex-col items-center justify-center'>

              <p className='  -red-200 w-full text-end  text-2xl bg-200'>
                Partner tecnológico
              </p>
              <img src={cardano} alt="" className='bg-white rounded-[200px] w-[100px]  ' />
              <img src={cardanoWord} alt="" className='bg-white rounded-[200px] w-[125px] mt-2  object-cover' />
            </div> */}


        {/* </div> */}
        {/* <div className='absolute top-60 left-10 bg-ge-200  ml-auto w-1/2 bg- flex items-center justify-end bg-re-200 bg-re-200 '>

            <img src={atomico} alt=" Atomico Logo" className='  max-w-[205px] lg:max-w-[410px] w-1/3 md:w-2/3  md:w-full bg--200   mr-32  ' />

          </div> */}



      </header >
    </>
  )
}

