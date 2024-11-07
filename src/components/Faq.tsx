import React from "react"
import { useTranslation } from "react-i18next"

export const Faq = React.forwardRef<HTMLDivElement>((_props, ref: any) => {

  const [t] = useTranslation("global")
  return (
    <>
    <h1 id="faq" ref={ref} className="text-3xl  lg:text-6xl font-bold sm:text-4xl bg-custom-gradient bg-clip-text text-transparent  text-center mb-12 mt-20 lg:mt-20 lg:mb-20 lg:py-2">{t("faq.preguntas frecuentes")}</h1>
    <div className="space-y-4 lg:w-2/3 lg:mx-auto px-4">
  <details
    className="group rounded-lg  p-6 bg-dark-light [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 lg:text-2xl     text-white"
    >
      <h2 className="font-medium text-celeste">{t("faq.que es atomico")} </h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white lg:text-lg">
   {t("faq.que es atomico descripcion")}
    </p>
  </details>

  <details
    className="group rounded-lg bg-dark-light  p-6  [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 text-white "
    >
      <h2 className="font-medium text-celeste lg:text-2xl">{t("faq.¿Por qué no veo reflejado el precio de Atómico3 en mi billetera?")}</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white  lg:text-lg">
    {t("faq.El token se encuentra en lista de espera en CoinMarketCap")}
    </p>
  </details>
  <details
    className="group rounded-lg bg-dark-light  p-6  [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 text-white "
    >
      <h2 className="font-medium text-celeste lg:text-2xl">{t("faq.¿Dónde puedo ver la valuación de Atómico3?")}</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white  lg:text-lg">
  {t("faq.Puedes ver la valuación actual de Atómico3 en Dex descentralizadas como Quickswap")}
    </p>
  </details>
  <details
    className="group rounded-lg bg-dark-light  p-6  [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 text-white "
    >
      <h2 className="font-medium text-celeste lg:text-2xl">{t("faq.¿Por qué el token Atómico3 no tiene liquidez?")}</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white  lg:text-lg">
    {t("faq.El token fue lanzado el 12 de agosto y la liquidez formal será inyectada cuando éste sea listado en CoinMarketCap (para lo cual estamos trabajando)")}


    </p>
  </details>
  <details
    className="group rounded-lg bg-dark-light  p-6  [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 text-white "
    >
      <h2 className="font-medium text-celeste lg:text-2xl">{t("faq.¿Cuál es el contrato de Atómico3?")}</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white  lg:text-lg break-words">
   {t("faq.El contrato de token es el siguiente en la red Polygon")}

    </p>
  </details>
  <details
    className="group rounded-lg bg-dark-light  p-6  [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 text-white "
    >
      <h2 className="font-medium text-celeste lg:text-2xl">{t("faq.¿Proyección del precio de Atómico3 en el futuro?")}</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white  lg:text-lg">
   {t("faq.Se comportará en relación al precio de carbonato de litio internacional (li2co3)")}
    <br />
    {/* {t("faq.Link para consultar el precio actual del carbonato de litio")} <a href="https://es.investing.com/commodities/lithium-carbonate-99.5-min-china-futures?utm_source=investing_app&utm_medium=share_link&utm_campaign=share_instrument" className="text-blue-500 underline" target="_blank">{t("faq.Click aquí")}</a>  */}
      
    </p>
  </details>
  <details
    className="group rounded-lg bg-dark-light  p-6  [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 text-white "
    >
      <h2 className="font-medium text-celeste lg:text-2xl">{t("faq.¿Ya puedo hacer staking de los AT3 que adquirí?")}</h2>

      <span className="relative size-5 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-100 group-open:opacity-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 opacity-0 group-open:opacity-100"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-white  lg:text-lg">
    {t("faq.Si puedo")}
    </p>
  </details>
  

</div>
    </>
  )
})
