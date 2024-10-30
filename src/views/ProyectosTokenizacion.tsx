// import imagen1 from '../assets/proyectosAssets/1.jpg'
import imagen1 from '../assets/proyectosAssets/4.jpg'
import { Proyectos } from '../components/ProyectosTokenizacion/Proyectos'


export const ProyectosTokenizacion = () => {
    return (
<>
        <section
            style={{ backgroundImage: `url(${imagen1})` }}
            className="relative bg-cover bg-center bg-no-repeat"
        >

            {/* <section
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
> */}
            <div
                className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l "
            ></div>

            <div
                className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8 "
            >
                <div className="bg-gray-500/25 p-10 max-w-xl flex flex-col justify-center items-center text-center ltr:sm:text-left rtl:sm:text-right">
                    <h1 className="text-3xl font-extrabold sm:text-5xl">
                        Proyectos de 

                        <strong className="block font-extrabold text-dark-light">tokenización </strong>
                    </h1>

                    <p className="mt-4 max-w-lg sm:text-xl/relaxed">
                        En esta sección encontrarás los diferentes proyectos de tokenización mineros que hemos implementado.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-4 text-center">
                        <a
                            href="#"
                            className="block w-full rounded bg-dark-light px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                        >
                            Saber más
                        </a>

                        <a
                            href="#"
                            className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-dark-light shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                        >
                            Tokenizar mi proyecto
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <Proyectos/>
        </>
    )
}
