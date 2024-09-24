// import { useTranslation } from "react-i18next"


// export const Modal = ({ handleCloseModal, isSpringBtn, showModal }: any) => {

//     const [t] = useTranslation("global")

//     return (
//         <>
//             <div className={!showModal ? "hidden" : "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-1000 block"} >
//                 <div className="relative ">
//                     <div className="rounded-2xl  border border-celeste bg-dark-light p-4 shadow-lg sm:p-6 lg:p-8 mx-5 lg:mx-32 " role="alert">
//                         <div className="flex items-center gap-4  ">
//                             <span className="shrink-0 rounded-full bg-celeste p-2 text-white">
//                                 <svg
//                                     className="size-4"
//                                     fill="currentColor"
//                                     viewBox="0 0 20 20"
//                                     xmlns="http://www.w3.org/2000/svg"
//                                 >
//                                     <path
//                                         clipRule="evenodd"
//                                         d="M18 3a1 1 0 00-1.447-.894L8.763 6H5a3 3 0 000 6h.28l1.771 5.316A1 1 0 008 18h1a1 1 0 001-1v-4.382l6.553 3.276A1 1 0 0018 15V3z"
//                                         fillRule="evenodd"
//                                     />
//                                 </svg>
//                             </span>

//                             <p className="font-medium sm:text-lg"></p>
//                         </div>


//                         {
//                             isSpringBtn ?
//                                 <p className="mt-4 text-white"> {t("modal.feliz primavera descripcion")} </p>
//                                 :
//                                 <p className="mt-4 text-white"> {t("modal.recordatorio descripcion")} </p>

//                         }


//                         <div className="mt-6 sm:flex sm:gap-4">

//                             {isSpringBtn ?
//                                 <a
//                                     target="_blank"
//                                     className="inline-block w-full rounded-lg bg-celeste px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
//                                     href="https://dapp-at-3.vercel.app/stakingplus"
//                                 >
//                                     {t("modal.completar formulario")}
//                                 </a> :
//                                 <a
//                                     target="_blank"
//                                     className="inline-block w-full rounded-lg bg-celeste px-5 py-3 text-center text-sm font-semibold text-white sm:w-auto"
//                                     href="https://dapp-at-3.vercel.app/"
//                                 >
//                                     {t("modal.continuar")}

//                                 </a>
//                             }

//                             <a
//                                 className="mt-2 inline-block w-full rounded-lg bg-gray-200 hover:bg-gray-300   px-5 py-3 text-center text-sm font-semibold text-gray-900 sm:mt-0 sm:w-auto hover:cursor-pointer  "
//                                 // href="#"
//                                 onClick={() => handleCloseModal()}
//                             >
//                                 {t("modal.cancelar")}

//                             </a>
//                         </div>
//                     </div>
               
//                 </div>
//             </div>
//         </>
//     )
// }
