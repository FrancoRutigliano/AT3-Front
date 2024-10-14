import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const Terms = () => {
  const [t] = useTranslation("global");

  // Obtener la ruta actual para subrayar el enlace activo
  const location = useLocation();

  const links = [
    { path: "/terminos-y-condiciones", label: "Términos y Condiciones" },
    { path: "/politica-de-privacidad", label: "Política de Privacidad" },
    { path: "/politica-de-cookies", label: "Política de Cookies" },
  ];

  return (
    <nav className="mt-20">
      <ul className="flex justify-center py-5 space-x-10">
        {links.map((link) => (
          <li key={link.path}>
            <Link
              to={link.path}
              className={`text-white underline transition-colors duration-300 ${
                location.pathname === link.path ? "text-blue-500" : ""
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
