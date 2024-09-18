
// import atomico from '../assets/Atomico.png'

// export const Header = () => {
//   return (
//     <header className='flex  bg-red-200'>
//       <div className='bg-lime-200 w-1/2  flex items-center justify-center  h-screen'>

//         <div className="pl-14 mb-20 ">
//           <h1 className='bg-custom-gradient bg-clip-text text-transparent text-8xl'>Welcome to Atómico3</h1>
//           <p className='my-5'>A crypto asset backed by lithium, promoting sustainability by reducing carbon emissions through tokenized incentives.</p>
//           <div className='flex flex-col justify-between w-full pr-36 '>
//             <button className='bg-custom-gradient py-2 rounded-md ' >Staking</button>
//             <button className='relative   py-[1px] rounded-md my-2 px-[0.8px] bg-transparent'>
//               <span className="absolute inset-0 p-px bg-gradient-to-r from-purple-600 to-cyan-400 rounded-md"></span>
//               <span className="relative block bg-dark-blue text-white rounded-md px-6 py-2 text-black ">
//                 Download Wallpaper
//               </span>
//             </button>
//             <button className='bg-custom-gradient py-2 rounded-md ' >Buy Token</button>
//           </div>
//         </div>

//       </div>
//       <div  className='bg-sky-200 w-1/2  flex items-center justify-center'>
//         <img src={atomico} alt="" className='mb-20 w-2/3'/>
//       </div>
//     </header>
//   )
// }
import atomico from '../assets/Atomico.png'

export const Header = () => {
  return (
    <header className='flex flex-col-reverse md:flex-row '>
      {/* Sección de texto */}
      <div className=' w-full md:w-1/2 flex items-center justify-center h-auto md:h-screen p-4  md:p-0 lg:p-0  lg:mt-10'>
        <div className=" mb-10 lg:mb-0  text-center md:text-left  md:pl-8 lg:pl-12">
          <h1 className=' font-bold bg-custom-gradient bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl '>Welcome to Atómico3</h1>
          <p className='my-5 text-sm md:text-base lg:text-lg lg:pr-20'>
            A crypto asset backed by lithium, promoting sustainability by reducing carbon emissions through tokenized incentives.
          </p>
          <div className='flex flex-col items-center md:items-start justify-between w-full lg:pr-36 space-y-3'>
            <button className='max-w-[270px] md:max-w-[298px] bg-custom-gradient py-2 rounded-md w-full px-6'>Staking</button>
            <button className='max-w-[270px] md:max-w-[298px] relative py-[1px] rounded-md w-full '>
              <span className="absolute inset-0 p-px bg-gradient-to-r from-purple-600 to-cyan-400 rounded-md"></span>
              <span className="relative block bg-dark-blue text-white rounded-md px-6 py-2 text-black">
                Download Wallpaper
              </span>
            </button>
            <button className='max-w-[270px] md:max-w-[298px] bg-custom-gradient py-2 rounded-md w-full  px-6'>Buy Token</button>
          </div>
        </div>
      </div>

      {/* Sección de imagen */}
      <div className=' w-full md:w-1/2 flex items-center justify-center mt-20 md:mt-10 lg:mt-0'>
        <img src={atomico} alt="Atomico Logo" className='max-w-[205px] lg:max-w-[400px] w-1/3 md:w-2/3  md:w-full md:mb-20 lg:mb-0 md:mt-0 ' />
      </div>
    </header>
  )
}
