
export const NoticiasLitio = () => {
    return (
        <>
            {/*
  Heads up! 👋

  This component comes with some `rtl` classes. Please remove them if they are not needed in your project.
*/}

            <section className="bg-gray-50">
                <div className="mx-auto max-w-screen-2xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                    <div className="md:flex md:items-end md:justify-between">
                        <div className="max-w-xl">
                            <h2 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-5xl">
                                Noticias sobre el Litio
                            </h2>

                            <p className="mt-6 max-w-lg leading-relaxed text-gray-700">
                                Descubre las últimas tendencias sobre el litio y mantene actualizado
                            </p>
                        </div>

                        <a
                            href="#"
                            className="mt-6 inline-flex shrink-0 items-center gap-2 rounded-full border border-rose-600 px-5 py-3 text-celeste transition hover:bg-rose-600 hover:text-white md:mt-0"
                        >
                            <span className="font-medium"> Leer más noticias</span>

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-4 rtl:rotate-180"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                                />
                            </svg>
                        </a>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
                        <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8">
                        </blockquote>
                    </div>
                </div>
            </section>
        </>
    )
}
