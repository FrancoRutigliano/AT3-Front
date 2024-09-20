import { useTranslation } from "react-i18next"

export const Terms = () => {
  const [t] = useTranslation("global")


  return (
    <>
      
      <h1 className="text-xl  font-bold lg:text-6xl lg:px-10 text-center mt-24 mb-16 lg:mt-44 lg:mb-28 bg-custom-gradient bg-clip-text text-transparent">{t("terms.Términos y condiciones de pago del token AT3")}</h1>
      <div className="space-y-4 lg:px-10 px-5">
        <details
          className="group border-s-4 border-celeste bg-dark-light p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden "
          open
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-sm lg:text-2xl font-medium text-celeste">
            {t("terms.General")}
            </h2>

            <span
              className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="text-[1rem} mt-4 leading-relaxed text-gray-300 ">
          {t("terms.General descripcion")}
          </p>
        </details>

          <details
            className="group border-s-4 border-celeste bg-dark-light p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-1.5">
              <h2 className="text-sm lg:text-2xl font-medium text-celeste">
              {t("terms.El token AT3 como método de pago")}
              </h2>

              <span
                className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="text-[1rem} mt-4 leading-relaxed text-gray-300">
            {t("terms.El token AT3 como método de pago p1")}<br />
            <br />
            {t("terms.El token AT3 como método de pago p2")}
            
              <br />
              <br />
              <span className="font-bold text-celeste">{t("terms.nota importante")}:</span> {t("terms.nota importante descripcion")}
            </p>
          </details>



        <details
          className="group border-s-4 border-celeste bg-dark-light p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-sm lg:text-2xl font-medium text-celeste">
             {t("terms.Comisiones de la red del token AT3")}
            </h2>

            <span
              className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="text-[1rem} mt-4 leading-relaxed text-gray-300">
            {t("terms.Comisiones de la red del token AT3 descripcion")}
        
          </p>
        </details>

        <details
          className="group border-s-4 border-celeste bg-dark-light p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-sm lg:text-2xl font-medium text-celeste">
             {t("terms.Soporte de pago de tokens AT3")}
            </h2>

            <span
              className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="text-[1rem} mt-4 leading-relaxed text-gray-300">
          {t("terms.Soporte de pago de tokens AT3 descripcion p1")}
          <br />
            <span className="text-celeste">
            {t("terms.Soporte de pago de tokens AT3 descripcion p2")}

            </span>
          </p>
        </details>

        <details
          className="group border-s-4 border-celeste bg-dark-light p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-sm lg:text-2xl font-medium text-celeste">
             {t("terms.Transacciones completadas una vez confirmadas")}
            </h2>

            <span
              className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="text-[1rem} mt-4 leading-relaxed text-gray-300">
          {t("terms.Transacciones completadas una vez confirmadas descripcion")}

          </p>
        </details>

        <details
          className="group border-s-4 border-celeste bg-dark-light p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-sm lg:text-2xl font-medium text-celeste">
             {t("terms.Pagos insuficientes y excesivos")}
            </h2>

            <span
              className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="text-[1rem} mt-4 text-gray-300">
          {t("terms.Pagos insuficientes y excesivos p1")}
          <br />
          {t("terms.Pagos insuficientes y excesivos p2")}
          <br />
            <span className="text-celeste"> {t("terms.En cuanto a los pagos finales")}: </span> <br />
            <span className="text-celeste">  (i)</span> {t("terms.i")} <br />
            <span className="text-celeste"> (ii) </span>  {t("terms.ii")}
          </p>
        </details>

        <details
          className="group border-s-4 border-celeste bg-dark-light p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="text-sm lg:text-2xl font-medium text-celeste">
            Payments with AT3 Token are Final
            </h2>

            <span
              className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="text-[1rem} mt-4 text-gray-300">
            Once you initiate an AT3 token transaction, the transaction cannot be reversed. This is inherent in the nature of the AT3 token network and is not a policy set by us.  <br />
            <span className="text-celeste"> YOU ARE RESPONSIBLE FOR VERIFYING THAT YOU HAVE ENTERED THE CORRECT AT3 TOKEN ADDRESS IN THE RECIPIENT FIELD AND THE CORRECT AT3 TOKEN PRICE IN THE AMOUNT FIELD IN YOUR DIGITAL WALLET SOFTWARE.</span>
          </p>
        </details>

        <details
          className="group border-s-4 border-celeste bg-dark-light p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5">
            <h2 className="lg:text-2xl font-medium text-celeste">
            AT3 Token Network Protocols
            </h2>

            <span
              className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3 dark:bg-gray-800 dark:text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </summary>

          <p className="text-[1rem} mt-4 text-gray-300">
          We do not own or control the underlying software protocols that govern the operation of the AT3 token network. The AT3 token network protocols are open source and may be used, copied, modified and distributed by anyone. We are not responsible for the operation of the AT3 token network protocols. The AT3 token network protocols are subject to sudden changes in operating rules (e.g., forks), and such changes may materially affect the value, function and/or even the name of the AT3 token.
          </p>
        </details>




      </div>

    </>
  )
}