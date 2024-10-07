import { useState } from "react";
import emailjs from 'emailjs-com';


export const Form = () => {

// Estado para los campos del formulario
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  documentType: 'whitepaper' 
});

const [message, setMessage] = useState('');
const [loading, setLoading] = useState(false);

// Manejar cambios en los campos del formulario

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value,
  }));
  
};

// Función para manejar el envío del formulario
const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);
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
        setMessage('Formulario enviado con éxito');
      },
      (error) => {
        console.error('Error al enviar el email', error);
        setMessage('Error al enviar el formulario');
      }
    )
    .finally(() => setLoading(false));
};

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
        <div className=" bg-dark-light border border-celeste rounded-lg shadow-lg  p-5">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Ingrese sus datos
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-200">
            Una vez ingresado sus datos el documento se descargará automáticamente. <br /> ¡Muchas Gracias!
          </p>

          <form action="#" className="mb-0 space-y-4 p-4" onSubmit={handleSubmit}>
            {/* <p className="text-center text-lg font-medium">Sign in to your account</p> */}            

            <div>
              <label htmlFor="password" className="">Nombre</label>
              <div className="relative">
                <input
                  name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                required
                  type="text"
                  className="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Carlos González"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="">Apellido </label>
              <div className="relative">
                <input
                  name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                required
                  type="text"
                  className="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Carlos González"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                 
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="">Email</label>
              <div className="relative">
                <input
                  name="email"

                onChange={handleChange}
                value={formData.email}

                  required
                  type="email"
                  className="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="carlosgonzalez@email.com"
                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                
                </span>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="">Teléfono</label>
              <div className="relative">
                <input
                  name="phone"

                onChange={handleChange}
                  type="text"
                  className="w-full text-black rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter password"
                  value={formData.phone}

                />
                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                  
                </span>
              </div>
            </div>
            <button
              type="submit"
              // onClick={handleSubmit}
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Aceptar
            </button>
            <button
              type="submit"
              className=" bg-red-400 block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Cancelar
            </button>
            
          </form>
        </div>
      </div>
    </>
  );
}
