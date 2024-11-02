
export const LitioInfo = () => {
  return (
   <>

<section className="h-screen overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
  <div className="p-8 md:p-12 lg:px-16 lg:py-24">
    <div className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h2 className="text-2xl font-bold text-gray-900 md:text-3xl text-left">
       Información sobre el Litio
      </h2>

      <p className="hidden text-gray-500 md:mt-4 md:block text-justify">
      El litio es un elemento clave en la tecnología moderna y la transición hacia energías sostenibles, impulsando la demanda de baterías para dispositivos electrónicos y vehículos eléctricos. Conocer su potencial es esencial para entender las tendencias del mercado y las oportunidades de inversión. Te invitamos a explorar la información en nuestra página para descubrir cómo el litio está transformando nuestra economía y estilo de vida.
      </p>
    </div>
  </div>

  <img
    alt=""
    src="https://bynder.aggreko.com/transform/ce8c8b8e-7b00-44b3-9112-af9532b721bc/minas-de-litio-argentina-bolivia-aggreko-007-jpg"
    className="h-full w-full object-cover sm:h-[calc(100%_-_2rem)] sm:self-end sm:rounded-ss-[30px] md:h-[calc(100%_-_4rem)] md:rounded-ss-[60px]"
  />
</section>
<section className="h-screen bg-white">
<div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
  <div className="mx-auto max-w-3xl text-center">
    <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Estadístiscas sobre el litio</h2>

    <p className="mt-4 text-gray-500 sm:text-xl">
    Conoce las cifras clave que impulsan la demanda de litio y su papel fundamental en la transición hacia un futuro sostenible.
    </p>
  </div>

  <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">($USD/ kg.)</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">10.78E
 </dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500"></dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">24</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Ventas</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">86k</dd>
    </div>

    <div className="flex flex-col rounded-lg bg-blue-50 px-4 py-8 text-center">
      <dt className="order-last text-lg font-medium text-gray-500">Reservas en Argentina</dt>

      <dd className="text-4xl font-extrabold text-blue-600 md:text-5xl">64%</dd>
    </div>
  </dl>
</div>
</section>

   </>
  );
};

