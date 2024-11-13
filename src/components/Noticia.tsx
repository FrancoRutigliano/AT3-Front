
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Noticia = ({imagen, title, subtitle, link}: any) => {
  return (
    <>
      {/* <a
        className="bg-blue-50 block rounded-xl border border-black p-8 shadow-xl transition hover:border-celeste hover:shadow-celeste text-center"
        href={link}
        target='_blank'
      >

        <img src={imagen} alt="at3" className='max-w-[500px] mx-auto text-left w-full h-[200px] object-cover rounded-lg' />

        <h2 className="text-celeste mt-4 text-xl font-bold  text-left ml-2">
          {title}
        </h2>

        <p className=" mt-1 text-sm text-black ml-2 text-left ml-2">
          {subtitle}
        </p>
      </a> */}
<a className=" overflow-hidden rounded-lg shadow transition hover:shadow-lg  shadow-xl transition border border-celeste hover:shadow-celeste" href={link} target="_blank">
  <img
    alt=""
    src={imagen}
    className="h-48 w-full object-cover"
  />

  <div className=" p-4 sm:p-6 bg-blue-50 border border-t-celeste h-full">
    <time dateTime="2022-10-10" className="block text-xs text-celeste "> {subtitle} </time>

    {/* <a href={link} target="_blank">
    </a> */}
    <h3 className="mt-0.5 text-base text-gray-900">{title}</h3>

  </div>
</a> 
    </>
  )
}

//  <article className="overflow-hidden rounded-l g shadow transition hover:shadow-lg bg-blue-50">
//   <img
//     alt=""
//     src={imagen}
//     className="h-56 w-full object-cover"
//   />

//   <div className=" p-4 sm:p-6 bg-blue-50">
//     <time dateTime="2022-10-10" className="block text-xs text-blue-600 "> {medio} </time>

//     <a href={link} target="_blank">
//       <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
//     </a>

//   </div>
// </article> 