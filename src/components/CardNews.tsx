
export const CardNews = ({title, imagen, link, medio}:any) => {
  return (
    <>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg bg-blue-50">
  <img
    alt=""
    src={imagen}
    className="h-56 w-full object-cover"
  />

  <div className=" p-4 sm:p-6 bg-blue-50">
    <time dateTime="2022-10-10" className="block text-xs text-blue-600 "> {medio} </time>

    <a href={link} target="_blank">
      <h3 className="mt-0.5 text-lg text-gray-900">{title}</h3>
    </a>

    
  </div>
</article>
    </>
  )
}
