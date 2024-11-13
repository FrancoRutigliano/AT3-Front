import { useTranslation } from "react-i18next"
import bg3 from '../../assets/pruebas/p9.jpeg'
import { Link } from "react-router-dom"

export const InvertirHeader = () => {
    const { t } = useTranslation("global")
  
    return (
    <>
<section
        className=""
      >
        <div className="overflow-hidden  h-1/3 md:h-1/2 bg-cover bg-no-repeat p-8 md:p-12 lg:px-16 lg:py-24" style={{
          background: `linear-gradient(to bottom, rgba(0, 0, 18, 0.7), rgba(0, 0, 0, 0.2)), url(${bg3})`,
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
          <div className="relative h-[30rem] flex items-center justify-center ">
            


            <div className="relative z-20 flex flex-col justify-center items-center h-full lg:mb-52">
              {/* <img src={atomico3} alt="atomico" className='w-2/3 lg:w-1/3 max-w-[550px]' /> */}
              <h1 className="text-celeste text-2xl lg:text-7xl text-center font-bold lg:mb-2" style={{ textShadow: '1px 1px 50px black' }}>
                {t("como invertir.inverti y ahorra")}
              </h1>
              <p className="text-justify mt-5 sm:mt-16 w-4/5 lg:mb-0 text-sm lg:text-xl">
                {t("como invertir.como invertir p1")}
              </p>
              <p className="text-justify mt-2 w-4/5 lg:mb-0 text-sm lg:text-xl">
                {t("como invertir.como invertir p1.1")}
              </p>
              <p className="text-justify mt-2 w-4/5 lg:mb-0 text-sm lg:text-xl">
                {t("como invertir.como invertir p2")}
              </p>
             

              <div className=" mt-4 sm:mt-8 flex flex-col justify-center items-center sm:flex-row sm:justify-between w-4/5 mx-auto gap-4">
                <Link
                  to={'/comoInvertir#staking'}
                  className="w-full sm:w-1/3 max-w-[270px] lg:max-w-[200px] bg-celeste hover:bg-custom-gradient py-2 lg:py-3 rounded-md px-6 text-xs sm:text-sm lg:text-sm text-center hover:cursor-pointer flex items-center justify-center"
                >
                  Staking
                </Link>

                <Link
                  to={'/comoInvertir#comprar'}
                  className="w-full sm:w-1/3 max-w-[270px] lg:max-w-[200px] bg-celeste hover:bg-custom-gradient py-2 lg:py-3 rounded-md px-6 text-xs sm:text-sm lg:text-sm text-center hover:cursor-pointer"
                >
                 {t("comprarAt3.comprarAt3")}
                </Link>

                <Link
                  to={'/comoInvertir#p2p'}
                  className="w-full sm:w-1/3 max-w-[270px] lg:max-w-[200px] bg-celeste hover:bg-custom-gradient py-2 lg:py-3 rounded-md px-6 text-xs sm:text-sm lg:text-sm text-center hover:cursor-pointer flex items-center justify-center"
                >
                  Peer to Peer
                </Link>
              </div>
            </div>

          </div>


        </div>
      </section>
    </>
  )
}
