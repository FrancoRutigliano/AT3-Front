
import { useTranslation } from 'react-i18next'
import atomico from '../assets/Atomico.png'
import {  useState } from 'react';
import './Header.css'
import { Modal } from './Modal';
// import { SpringPopUp } from './SpringPopUp';
import e1 from '../assets/bg/e11.jpg'
import 'animate.css';
import { Form } from './Form';

export const Header = () => {

  const [showModal, setShowModal] = useState(false)

  const [t] = useTranslation("global")
  // const [animate, setAnimate] = useState(false);
  const [isSpringBtn, setIsSpringBtn] = useState<boolean | null>(null);
  const [showingForm, setShowingForm] = useState(false)

  const showForm = (isVisible: boolean) =>{
    setShowingForm(isVisible)
}


  const handleCloseModal = () => {
    setShowModal(false);
    setIsSpringBtn(null)

  };

 

  if(showingForm) return (
    
    <>
    <Form documentType='whitepaper' showForm={showForm}/>
    </>
  )

  return (
    <>


  <Modal handleCloseModal={handleCloseModal}  isSpringBtn={isSpringBtn} showModal={showModal} />
  

  {/* <div className="overflow-hidden  h-1/3 md:h-1/2 bg-cover bg-no-repeat p-8 md:p-12 lg:px-16 lg:py-24" style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.7)), url(${at3})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}> */}

      
      
      
<header className=' flex flex-col-reverse md:flex-row overflow-hidden bg-cover bg-no-repeat lg:px-16' style={{
  background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.7)), url(${e1})`,
  backgroundPosition: 'center top',
  backgroundRepeat: 'no-repeat',  
  backgroundSize: 'cover'  
}}>


      {/* Sección de texto */}
      <div className=' w-full md:w-1/2 flex items-center justify-center h-auto md:h-screen p-4  md:p-0 lg:p-0  '>
        <div className=" mb-14   text-center md:text-left  md:pl-8 lg:pl-28">
          <h1 className=' font-bold bg-custom-gradient bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl '>{t("header.bienvenido")}</h1>
          {/* <p className='my-5 text-sm md:text-base lg:text-md lg:pr-20'>
            A crypto asset backed by lithium, promoting sustainability by reducing carbon emissions through tokenized incentives.
          </p> */}
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
            {/* <a href="https://drive.google.com/uc?export=download&id=1nGFGAarX3gzUM2ydfFoRhAYQvV0SS_hV" */}
            <a 
            className='hover:cursor-pointer md:hidden max-w-[270px] md:max-w-[298px] lg:max-w-[330px] border border-gray-400 text-gray-300 py-2 lg:py-3 rounded-md w-full  px-6 text-center hover:bg-custom-gradient2 hover:font-bold' onClick={()=>showForm(true)}>
              <button className='text-sm ' >{t("header.whitepaper")}</button>
            </a>
          </div>
        </div>
      </div>

         {/* href="https://drive.google.com/uc?export=download&id=1nGFGAarX3gzUM2ydfFoRhAYQvV0SS_hV"  */}
      {/* Sección de imagen */}
      <div className=' w-full md:w-1/2 flex flex-col items-center justify-center mt-20 md:mt-10 lg:mt-0 lg:pb-24  '>
        <img src={atomico} alt="Atomico Logo" className=' max-w-[205px] lg:max-w-[400px] w-1/3 md:w-2/3  md:w-full md:mb-20 lg:mb-0 md:mt-0    ' />
        {/* <a 
        onClick={()=>showForm(true)}
        className='hover:cursor-pointer hidden md:block max-w-[270px] md:max-w-[298px] lg:max-w-[330px] border border-gray-400 text-gray-300 py-2 lg:py-3 rounded-md w-full lg:mb-3  px-6 text-center hover:bg-custom-gradient2 hover:font-bold'>
          <button className='text-sm '>{t("header.whitepaper")}</button>
        </a> */}
      </div>
    </header>
    </>
  )
}

