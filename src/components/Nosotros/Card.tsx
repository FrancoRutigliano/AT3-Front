
export const Card = ({imagen, puesto, nombre, alt}:any) => {
  return (
    <>
     <div className=" hover:border-celeste hover:shadow-celeste mx-5 my-6 my-5 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-64 ">
          <img
            alt={alt}
            src={imagen}
            className="h-56 w-full object-cover"
          />

          <div className="bg-dark-light  p-4 sm:p-6 h-full">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-white">{nombre}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-celeste" >
           {/* {t("team.ceo y fundador")} */}
           {puesto}
            </p>
          </div>
          
        </div>
    
    </>
  )
}
