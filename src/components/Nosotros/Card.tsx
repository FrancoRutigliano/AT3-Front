
export const Card = ({imagen, puesto, nombre, alt}:any) => {
  return (
    <>
     <div className=" hover:border-celeste hover:shadow-celeste mx-10 lg:mb-10 bg-red-200 overflow-hidden rounded-lg shadow transition hover:shadow-lg w-[240px] border border-b-celeste ">
          <img
            alt={alt}
            src={imagen}
            className="h-[215px] w-full object-cover"
          />

          <div className="bg-gray-50  p-4 sm:p-4 h-full border border-celeste ">
            {/* <time dateTime="2022-10-10" className="block text-xs text-gray-500">  </time> */}

            <a >
              <h3 className="mt-0.5 text-lg text-celeste">{nombre}</h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-dark-light" >
           {/* {t("team.ceo y fundador")} */}
           {puesto}
            </p>
          </div>
          
        </div>
    
    </>
  )
}
