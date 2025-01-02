import { useState } from "react";
import emailjs from 'emailjs-com';
import atomicLogo from '../assets/Atomico.png'
import { useTranslation } from "react-i18next";
interface FormProps {
  documentType: string;
  handleForm: () => void; // Tipar la función
}

export const Form: React.FC<FormProps> = ({handleForm, documentType}: FormProps) => {

  console.log('documentType (on render):', documentType);
  const [t] = useTranslation("global")

  const [showLoading, setShowLoading] = useState(false)
  // Estado para los campos del formulario
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    documentType
  });

  // const [message, setMessage] = useState('');
  // const [loading, setLoading] = useState(false);

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

  };

  // Función para manejar el envío del formulario
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setShowLoading(true)
    console.log(formData);

    // Parámetros para enviar por EmailJS
    const emailParams = {
      from_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      documentType: formData.documentType
    };

    // Enviar el email usando EmailJS

    emailjs
      .send(
        'service_mn0qbtj', // (service_id)
        'template_6yldnub', //(template_id)
        emailParams,
        'uJWGoBXmCBWYLpGfC' // (user_id)
      )
      .then(
        (response) => {
          console.log('Email enviado correctamente', response.status, response.text);
          // setMessage('Formulario enviado con éxito');
          console.log('DOCUMENTTYPE:', documentType)
          if (response.status >= 200 && response.status <= 200) {

            if (documentType == "brochure") {
              window.open('https://drive.google.com/uc?export=download&id=1GDVfVh34bo7ZvaVWjvwvmqYshgMF3zWf')
            }
            if (documentType == "whitepaper") {
              window.open('https://drive.google.com/uc?export=download&id=1nGFGAarX3gzUM2ydfFoRhAYQvV0SS_hV')
            }

            setShowLoading(false)
            handleForm()
          }
        },
        (error) => {
          console.error('Error al enviar el email', error);
          // alert
          // setMessage('Error al enviar el formulario');
        }
      )
      .finally(() => setShowLoading(false));
  };

  if (showLoading) return (
    <>
      <div className="p-3 fixed inset-0 z-2 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className=" bg-dark-light border border-celeste rounded-lg shadow-lg max-h-[550px] p-5">
          <img src={atomicLogo} alt="" className="max-w-[125px] mx-auto" />
          <h1 className="ml-3 text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Cargando...
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center sm:text-sm text-gray-200">
            El documento se descargará en breve
          </p>


        </div>
      </div>

    </>
  )
  return (
    <>
      <div className="p-3 fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className=" bg-dark-light border border-celeste rounded-lg shadow-lg max-h-[550px] p-5">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            {t("form.Ingrese sus datos")}
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center sm:text-sm text-gray-200">
            {t("form.Ingrese sus datos p1")}
          </p>

          <form action="#" className="mt-2" onSubmit={handleSubmit}>
            {/* <p className="text-center text-lg font-medium">Sign in to your account</p> */}

            <div>
              <label htmlFor="firstName" className="">
                {t("form.Nombre")}
              </label>
              <div className="relative">
                <input
                  id="firstName"
                  name="firstName"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                  type="text"
                  className="w-full text-black rounded-lg border-gray-200 p-2 text-sm shadow-sm"
                  placeholder=""
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                </span>
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="lastName" className="">
              {t("form.Apellido")}
                
              </label>
              <div className="relative">
                <input
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  value={formData.lastName}
                  required
                  type="text"
                  className="w-full text-black rounded-lg border-gray-200 p-2 text-sm shadow-sm"
                  placeholder=""
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                </span>
              </div>
            </div>

            <div className="mt-2">
              <label htmlFor="email" className="">
              {t("form.Email")}
                
              </label>
              <div className="relative">
                <input
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formData.email}

                  required
                  type="email"
                  className="w-full text-black rounded-lg border-gray-200 p-2 text-sm shadow-sm"
                  placeholder=""
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                </span>
              </div>
            </div>
            <div className="mt-2">
              <label htmlFor="phone" className="">
              {t("form.Teléfono")}
              </label>
              <div className="relative">
                <input
                  id="phone"
                  name="phone"

                  onChange={handleChange}
                  type="text"
                  className="w-full text-black rounded-lg border-gray-200 p-2 text-sm shadow-sm"
                  placeholder=""
                  value={formData.phone}

                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">

                </span>
              </div>
            </div>
            <div className="flex mt-4 ">

              <button
                // type="text"
                onClick={() => handleForm()}
                className=" bg-red-400 block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                            {t("form.Cancelar")}

              </button>
              <button
                type="submit"
                onClick={handleSubmit}
                className="ml-2 block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
              >
                           {t("form.Aceptar")}

              </button>
            </div>

          </form>
        </div>
      </div>

    </>
  );
}
// function setLoading(arg0: boolean): void {
//   console.log(arg0)
//   throw new Error("Function not implemented.");
// }

