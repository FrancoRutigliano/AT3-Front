import test from '../../assets/proyectosAssets/1.jpg'
import test2 from '../../assets/proyectosAssets/2.png'
import test3 from '../../assets/proyectosAssets/3.webp'
import test4 from '../../assets/proyectosAssets/4.jpg'


export const Proyectos = () => {
  return (
    <>
    <section className='bg-white'>
  <div className="mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <header>
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">Proyectos Tokenizados</h2>

      <p className="mt-4 max-w-md text-gray-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque praesentium cumque iure
        dicta incidunt est ipsam, officia dolor fugit natus?
      </p>
    </header>

    <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      <li>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
  <img
    alt=""
    // src="https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80"
    src={test}

    className="absolute inset-0 h-full w-full object-cover "
  />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 from-gray-900/50 to-gray-900/25 hover:from-gray-900/5 hover:to-gray-900/1 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">
      <time dateTime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2022 </time>

      <a href="#">
        <h3 className="mt-0.5 text-lg text-white">SALAR DEL HOMBRE MUERTO</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
  </div>
</article>
      </li>

      <li>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
  <img
    alt=""
    src={test2}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 from-gray-900/50 to-gray-900/25 hover:from-gray-900/5 hover:to-gray-900/1 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">
      <time dateTime="2022-10-10" className="block text-xs text-white/90"> 12th Mayo 2021 </time>

      <a href="#">
        <h3 className="mt-0.5 text-lg text-white">SALAR DE OLAROZ</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
  </div>
</article>
      </li>

      <li>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg transition-transform duration-300 transform hover:scale-105 hover:cursor-pointer">
  <img
    alt=""
    src={test3}
    className="absolute inset-0 h-full w-full object-cover"
  />

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 from-gray-900/50 to-gray-900/25 hover:from-gray-900/5 hover:to-gray-900/1 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">
      <time dateTime="2022-10-10" className="block text-xs text-white/90"> 2th Feb 2015 </time>

      <a href="#">
        <h3 className="mt-0.5 text-lg text-white">SALAR DE UYUNI</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
  </div>
</article>
      </li>

      <li>
      <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg hover:cursor-pointer  transition-transform duration-300 transform hover:scale-105">
        <div className='overflow-hidden'>

  <img
    alt=""
    src={test4}
    className="absolute inset-0 h-full w-full object-cover "
    />
    </div>

  <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 hover:from-gray-900/5 hover:to-gray-900/1 pt-32 sm:pt-48 lg:pt-64">
    <div className="p-4 sm:p-6">
      <time dateTime="2022-10-10" className="block text-xs text-white/90"> 10th Oct 2002 </time>

      <a href="#">
        <h3 className="mt-0.5 text-lg text-white">SALAR DE LA RIOJA</h3>
      </a>

      <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
        pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
        quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
        atque dignissimos. Molestias explicabo corporis voluptatem?
      </p>
    </div>
  </div>
</article>
      </li>
    </ul>
  </div>
</section>
    
    
    </>  )
}
