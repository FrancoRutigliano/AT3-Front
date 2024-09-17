
export const Faq = () => {
  return (
    <>
    <h1 className="lg:text-6xl font-medium sm:text-4xl bg-custom-gradient bg-clip-text text-transparent  text-center my-20">Faq</h1>
    <div className="space-y-4 lg:w-2/3 lg:mx-auto">
  <details
    className="group rounded-lg bg-gray-50 p-6 bg-dark-light [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 lg:text-2xl     text-white"
    >
      <h2 className="font-medium text-celeste">What is Atómico3?</h2>

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
    It is a lithium-based token.
    </p>
  </details>

  <details
    className="group rounded-lg bg-dark-light  p-6 dark:bg-gray-900 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 text-white dark:text-white"
    >
      <h2 className="font-medium text-celeste lg:text-2xl">Why don't I see the price of Atómico3 reflected in my wallet?</h2>

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

    <p className="mt-4 leading-relaxed text-white dark:text-gray-200 lg:text-lg">
    The token is currently on the waiting list to be listed on CoinMarketCap, which is why the price will be reflected soon.
    </p>
  </details>
  
</div>
    </>
  )
}
