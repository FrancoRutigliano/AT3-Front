import { useTranslation } from "react-i18next";

export const ConnectWallet = () => {
  const [t] = useTranslation("global")

  return (
    <>
      <section className="relative">
        {/* Borde gradiente superior */}
        <div className="absolute top-0 left-0 right-0 h-12 lg:h-44" style={{
          backgroundImage: 'linear-gradient(to bottom, #00000C, #000024)',
        }}></div>

        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 pt-24   md:pt-64">
          <div className="max-w-3xl">
            <h2 className=" text-center lg:text-left bg-custom-gradient bg-clip-text text-transparent text-3xl lg:text-6xl font-bold bg-red-500">
              {t("como invertir.conectar tu wallet")}
            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* <div className=" relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <iframe className="mx-auto rounded-xl" width="560" height="315" src="https://www.youtube.com/embed/rDTr2LqAx9s?si=oH3LD_T0Wd7OqAob" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div> */}
            <div className="relative overflow-hidden pb-[56.25%] h-0 max-w-[600px] w-full mx-auto">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/rDTr2LqAx9s?si=oH3LD_T0Wd7OqAob"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen>
              </iframe>
            </div>


            <div className="lg:py-16">
              <article className="lg:space-y-4 text-gray-200">
                <p className="text-center lg:text-left text-md lg:text-2xl">
                  {t("como invertir.conectar tu wallet p1")}
                </p>
                <p className="text-center lg:text-left text-md lg:text-2xl">
                  {t("como invertir.conectar tu wallet p2")}

                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
