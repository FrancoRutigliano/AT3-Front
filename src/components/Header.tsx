
import { useTranslation } from 'react-i18next'
import atomico from '../assets/Atomico.png'
import {  useState } from 'react';
import './Header.css'
import { Modal } from './Modal';
// import { SpringPopUp } from './SpringPopUp';
import e1 from '../assets/bg/e11.jpg'
import 'animate.css';
import { Form } from './Form';
// import { SpringPopUp } from './SpringPopUp';

export const Header = () => {

  const [showModal, setShowModal] = useState(false)

  const [t] = useTranslation("global")
  // const [animate, setAnimate] = useState(false);
  const [isSpringBtn, setIsSpringBtn] = useState<boolean | null>(null);
  const [showingForm, setShowingForm] = useState(false)
  // const [showPopUp, setShowPopUp] = useState(false);

  const showForm = (isVisible: boolean) =>{
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
 

  if(showingForm) return (
    
    <>
    <Form documentType='whitepaper' showForm={showForm}/>
    </>
  )

  return (
    <>

  {/* {showPopUp &&  <SpringPopUp handleClosePopUp={handleClosePopUp} /> } */}

  <Modal handleCloseModal={handleCloseModal}  isSpringBtn={isSpringBtn} showModal={showModal} />
  
<header className=' flex flex-col-reverse md:flex-row overflow-hidden bg-cover bg-no-repeat lg:px-16' style={{
  background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.7)), url(${e1})`,
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',  
  backgroundSize: 'cover'  
}}>


      {/* Sección de texto */}
      <div className=' w-full md:w-1/2 flex items-center justify-center h-auto md:h-screen p-4  md:p-0 lg:p-0  '>
        <div className=" mb-14   text-center md:text-left  md:pl-8 lg:pl-28  mt-12">
          <h1 className=' font-bold bg-custom-gradient bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl '>{t("header.bienvenido")}</h1>
          
          <p className='my-5 text-sm md:text-base lg:text-md lg:pr-20'>
            {t("header.criptoactivo")}
          </p>


          <div className='flex flex-col items-center md:items-start justify-between w-full lg:pr-36 space-y-3 lg:mt-3'>
            {/* <a href="/public/whitepaper.pdf" download='whitepaper.pdf' className='max-w-[270px] md:max-w-[298px] lg:max-w-[330px] border border-gray-400 text-gray-300 py-2 lg:py-3 rounded-md w-full  px-6 text-center hover:bg-custom-gradient2 hover:font-bold'> */}
            {/* <a  className='max-w-[270px] md:max-w-[298px] lg:max-w-[330px]  text-white py-2 lg:py-3 rounded-md w-full  px-6 text-center bg-custom-gradient2 font-medium hover:bg-custom-gradient hover:cursor-pointer' onClick={()=>handleOpenModal(true)} >
              <button className={animate && localStorage.getItem('modalShown') ? 'animate-shake' : ''}>{t("header.feliz primavera")}</button>
            </a> */}

            <a   className='max-w-[270px] md:max-w-[298px] lg:max-w-[330px] bg-custom-gradient hover:bg-custom-gradient2 hover:font-bold py-2 lg:py-3 rounded-md w-full px-6 text-center hover:cursor-pointer' href='https://dapp-at-3.vercel.app/' target='_blank'>

              <button className=''>{t("header.comprar token")}</button>
            </a>
            <a  className='max-w-[270px] md:max-w-[298px] lg:max-w-[330px] bg-custom-gradient hover:bg-custom-gradient2 hover:font-bold py-2 lg:py-3 rounded-md w-full px-6 text-center hover:cursor-pointer' 
            // onClick={()=>handleOpenModal(false)}
            href='https://dapp-at-3.vercel.app/' target='_blank'>
            

              <button className='' >Staking</button>
            </a>
        
          </div> 
        </div>
      </div>


      {/* Sección de imagen */}
      <div className=' w-full md:w-1/2 flex flex-col items-center justify-center mt-20 md:mt-10 lg:mt-0 lg:pb-24  '>
        <img src={atomico} alt="Atomico Logo" className=' max-w-[205px] lg:max-w-[400px] w-1/3 md:w-2/3  md:w-full  lg:mb-0 md:mt-0    ' />
       <div className='flex justify-center w-full' >
        <a   className='ml-2 hover:cursor-pointer bg-white text- hidden md:block  max-w-[200px] border-2 border-[#6D6D6D] text-[#6D6D6D]  py-2 lg:py-3 rounded-md w-full lg:mb-3  px-6 text-center  hover:font-bold'>{t("navbar.iniciar sesion")}</a>
        
              <a   className='ml-2 hover:cursor-pointer bg-white text- hidden md:block  max-w-[200px] border-2 border-[#6D6D6D] text-[#6D6D6D]  py-2 lg:py-3 rounded-md w-full lg:mb-3  px-6 text-center  hover:font-bold'>
              {t("navbar.registrarse")}
              </a>
          </div>
      </div>
    </header>
    </>
  )
}

