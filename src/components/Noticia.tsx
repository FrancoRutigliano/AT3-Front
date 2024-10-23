
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Noticia = ({imagen, title, subtitle, link}: any) => {
  return (
    <>
      <a
        className="bg-dark-light block rounded-xl border border-black p-8 shadow-xl transition hover:border-celeste hover:shadow-celeste text-center"
        href={link}
        target='_blank'
      >

        <img src={imagen} alt="at3" className='max-w-[500px] mx-auto text-left w-full h-[200px] object-cover rounded-lg' />

        <h2 className="mt-4 text-xl font-bold text-white text-left ml-2">
          {title}
          {/* {t("noticias.n1")} */}
        </h2>

        <p className="mt-1 text-sm text-gray-300 ml-2 text-left ml-2">
          {subtitle}
          
        </p>

      </a>


    </>
  )
}
