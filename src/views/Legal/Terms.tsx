import { useTranslation } from "react-i18next";
import { getTermsTitles } from "../../Info/termsAndConditions";

export const Terms = () => {
  const [t] = useTranslation("global");

  const titles = getTermsTitles(t);

  const handleAnchorClick = (e: any, targetId: any) => {
    e.preventDefault(); // Prevenir el cambio de URL

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
        // Ajusta el desplazamiento aquí
        const offset = 110; // Cantidad de píxeles para desplazarse hacia arriba
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        // Desplazarse suavemente a la sección ajustada
        window.scrollTo({
            top: elementPosition - offset,
            behavior: "smooth",
        });
    }
};
  return (
  //  <section>
  //     <h1 className="lg:text-6xl text-center mt-20 mb-5"</h1>
  //     <h5 className="text-center mb-20">{t("termsAndConditions.vigencia")}</h5>
  //  </section>
  <section >
  <h1 className="lg:text-6xl text-center mt-20 mb-5">{t("termsAndConditions.terminos y condiciones")}</h1>
  <h5 className="text-center mb-20">{t("termsAndConditions.vigencia")}</h5>
  <div className="flex relative">
      {/* Columna de Títulos */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-md mr-4 sticky top-20 h-screen overflow-y-auto">
          <h2 className="text-lg font-semibold mb-4 text-black">{t("termsAndConditions.titles.indice")}</h2>
          <ul className="list-decimal text-black list-inside">
              {titles.map((section, index) => (
                  <li key={index} className="p-5 border-l-4 border-celeste">
                      <a href={`#${section.id}`} className="text-black hover:underline" onClick={(e) => handleAnchorClick(e, section.id)}>
                          {section.text}
                      </a>
                  </li>
              ))}
          </ul>
      </div>

      {/* Contenido de la Política de Privacidad */}
      <div className="w-3/4 p-6 bg-dark-light shadow-md rounded-lg">
         
          <section id="section1">

              <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">1. {t("termsAndConditions.titles.title1")}</h2>
              <p className="mb-4">
                  {t("termsAndConditions.documento.informacion punto 1.p1")}

              </p>

              <div className="list-disc list-inside mb-4">
                  {[
                      {   item: "(i)", 
                          text: t("termsAndConditions.documento.informacion punto 1.punto i"),
                          link: t("termsAndConditions.documento.informacion punto 1.punto i link"),
                          tag: t("termsAndConditions.documento.informacion punto 1.punto i tag")
                      },
                      { item: "(ii)",  text: t("termsAndConditions.documento.informacion punto 1.punto ii"), link: "" },
                      { item: "(iii)", text: t("termsAndConditions.documento.informacion punto 1.punto iii"), link: "" }
                  ].map(({text, link, item, tag}, index) => (
                      <p key={`elem-${index}`}>
                          {item} {text}
                          {link && (
                              <>
                                  <a href={link} className="inline text-blue-500 hover:underline"> {link}</a> <span>{tag}</span>
                              </>
                          )}
                      </p>
                  ))}
              </div>


              <p className="mb-4">
                  {t("termsAndConditions.documento.informacion punto 1.conclusion")}
              </p>
          </section>

          <section id="section2">

              <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">2.  {t("termsAndConditions.titles.title2")}</h2>
            
            <p className="mb-4"> {t("termsAndConditions.documento.informacion punto 2.p1")}</p>
            <p className="mb-4">{t("termsAndConditions.documento.informacion punto 2.p2")} <a href=" https://www.atomico3.io" className="text-blue-500 hover:underline"> https://www.atomico3.io</a> {t("termsAndConditions.documento.informacion punto 2.p3")}</p>

          </section>

          <section id="section3">

              <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">3. {t("termsAndConditions.titles.title3")}</h2>
              
              <p className="mb-4"> {t("termsAndConditions.documento.informacion punto 3.p1")}</p>

          </section>
          <section id="section4">

              <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">4. {t("termsAndConditions.titles.title4")}</h2>
              
              <p className="mb-4">{t("termsAndConditions.documento.informacion punto 4.p1")}</p>
              {[
                  { item: "4. (i)", content: t("termsAndConditions.documento.informacion punto 4.p2") },
                  { item: "", content: t("termsAndConditions.documento.informacion punto 4.p3") },
                  { item: "", content: t("termsAndConditions.documento.informacion punto 4.p4") },
                  { item: "4. (ii)", content: t("termsAndConditions.documento.informacion punto 4.p5") },
                  { item: "", content: t("termsAndConditions.documento.informacion punto 4.p6") },
                  { item: "", content: t("termsAndConditions.documento.informacion punto 4.p7") },
              ].map(({item, content}, index) => (
                      <p key={index}  className="mb-4">
                        <span className="text-blue-500">{item}</span>  {content}
                        </p>
              ))}
          </section>
          <section id="section5">

              <h2 className="text-xl font-semibold mt-6 mb-2 text-blue-500">5. {t("termsAndConditions.titles.title5")}</h2>
              {[
                  { content: t("termsAndConditions.documento.informacion punto 5.p1") },
                  { content: t("termsAndConditions.documento.informacion punto 5.p2") },
                  {  content: t("termsAndConditions.documento.informacion punto 5.p3") },
                  {  content: t("termsAndConditions.documento.informacion punto 5.p4") },
                  {  content: t("termsAndConditions.documento.informacion punto 5.p5") },
              ].map(({content}, index) => (
                  <div key={index} className="mb-4">
                      <p>{content}</p>
                  </div>
              ))}


          </section>

          <section className="mb-8 mt-10" id="section6">
              <h2 className="text-xl font-semibold mb-2 text-blue-500">6.  {t("termsAndConditions.titles.title6")}</h2>
              {[
                  { content: t("termsAndConditions.documento.informacion punto 6.p1") },
                  { content: t("termsAndConditions.documento.informacion punto 6.p2") },
                  {  content: t("termsAndConditions.documento.informacion punto 6.p3") },
                  {  content: t("termsAndConditions.documento.informacion punto 6.p4") },
                  {  content: t("termsAndConditions.documento.informacion punto 6.p5") },
                  {  content: t("termsAndConditions.documento.informacion punto 6.p6") },
                  {  content: t("termsAndConditions.documento.informacion punto 6.p7") },
                  {  content: t("termsAndConditions.documento.informacion punto 6.p8") },
              ].map(({content}, index) => (
                  <div key={index} className="mb-4">
                      <p>{content}</p>
                  </div>
              ))}
          </section>

          <section className="mb-8" id="section7">
              <h2 className="text-xl font-semibold mb-2 text-blue-500">7. {t("termsAndConditions.titles.title7")}</h2>
                  <p className="mb-4">{t("termsAndConditions.documento.informacion punto 7.intro")}</p>
                  <p className="mb-4">{t("termsAndConditions.documento.informacion punto 7.p1")}</p>
                  {[
                  { title: "a)", content: t("termsAndConditions.documento.informacion punto 7.medida1") },
                  { title: "b)", content: t("termsAndConditions.documento.informacion punto 7.medida2") },
                  { title: "c)", content: t("termsAndConditions.documento.informacion punto 7.medida3") },
                  { title: "d)", content: t("termsAndConditions.documento.informacion punto 7.medida4") },
                  { title: "e)", content: t("termsAndConditions.documento.informacion punto 7.medida5") },
                  { title: "f)", content: t("termsAndConditions.documento.informacion punto 7.medida6") },

              ].map((item, index) => (
                  <div key={index} className="mb-4">
                      <p>
                          {item.title && <span className="text-blue-500 ">{item.title} </span>}
                          {item.content}</p>
                  </div>
              ))}
                  <p className="mb-4">{t("termsAndConditions.documento.informacion punto 7.confidencialidad")}</p>
          </section>

          <section className="mb-8" id="section8">
              <h2 className="text-xl font-semibold mb-4 mt-10 text-blue-500">8. {t("termsAndConditions.titles.title8")}</h2>
              {[
                  {  content: t("termsAndConditions.documento.informacion punto 8.p1") },
                  {  content: t("termsAndConditions.documento.informacion punto 8.p2") },
                  {  content: t("termsAndConditions.documento.informacion punto 8.p3") },
                  {  content: t("termsAndConditions.documento.informacion punto 8.p4") },
                  {  content: t("termsAndConditions.documento.informacion punto 8.p5") },

              ].map((item, index) => (
                  <div key={index} className="mb-4">
                      <p>
                          {item.content}</p>
                  </div>
              ))}
          </section>
          <section className="mb-8" id="section9">
              <h2 className="text-xl font-semibold mb-4 mt-10 text-blue-500">9. {t("termsAndConditions.titles.title9")}</h2>
              {[
                  {  content: t("termsAndConditions.documento.informacion punto 9.p1") },
                  {  content: t("termsAndConditions.documento.informacion punto 9.p2") },

              ].map((item, index) => (
                  <div key={index} className="mb-4">
                      <p>
                          {item.content}</p>
                  </div>
              ))}
          </section>  
          <section className="mb-8" id="section10">
              <h2 className="text-xl font-semibold mb-4 mt-10 text-blue-500">10. {t("termsAndConditions.titles.title10")}</h2>
            
              <p className="mb-4">{ t("termsAndConditions.documento.informacion punto 10.p1") }</p>
              <p className="mb-3">{ t("termsAndConditions.documento.informacion punto 10.p2") }</p>
              {[
                  { item: "i)", text: t("termsAndConditions.documento.informacion punto 10.item i") },
                  { item: "ii)", text: t("termsAndConditions.documento.informacion punto 10.item ii") },
                  { item: "iii)", text: t("termsAndConditions.documento.informacion punto 10.item iii") },
              ].map((elem, index) => (
                  <div key={index} className="mb-4">
                      <p><span className="text-blue-500"> {elem.item} </span> {elem.text}</p>
                  </div>
              ))}
          </section> 
          <section className="mb-8" id="section11">
              <h2 className="text-xl font-semibold mb-4 mt-10 text-blue-500">11. {t("termsAndConditions.titles.title11")}</h2>
              {[
                  {  content: t("termsAndConditions.documento.informacion punto 11.p1") },
                  {  content: t("termsAndConditions.documento.informacion punto 11.p2") },
                  {  content: t("termsAndConditions.documento.informacion punto 11.p3") },
                  {  content: t("termsAndConditions.documento.informacion punto 11.p4") },
                  {  content: t("termsAndConditions.documento.informacion punto 11.p5") },
                  {  content: t("termsAndConditions.documento.informacion punto 11.p6") },
                  {  content: t("termsAndConditions.documento.informacion punto 11.p7") },


              ].map((item, index) => (
                  <div key={index} className="mb-4">
                      <p>
                          {item.content}</p>
                  </div>
              ))}
          </section> 

          <section className="mb-8" id="section12">
              <h2 className="text-xl font-semibold mb-2 text-blue-500">12. {t("termsAndConditions.titles.title12")}    </h2>
             
              {[
                  {  content: t("termsAndConditions.documento.informacion punto 12.p1") },
                  {  content: t("termsAndConditions.documento.informacion punto 12.p2") },
                  {  content: t("termsAndConditions.documento.informacion punto 12.p3") },

              ].map((item, index) => (
                  <div key={index} className="mb-4">
                      <p> {item.content}</p>
                  </div>
              ))}

          <p className="mb-4 "><span className="text-blue-500 ">a)</span> {t("termsAndConditions.documento.informacion punto 12.a")}</p>
          <p className="mb-4"><span className="text-blue-500 ">b) </span>{t("termsAndConditions.documento.informacion punto 12.b")} <a target="_blank" href="http://www.buenosaires.gob.ar/defensaconsumidor/direccion-general" className="text-blue-500 hover:underline">{t("termsAndConditions.documento.informacion punto 12.b link")}</a> {t("termsAndConditions.documento.informacion punto 12.b.1")} </p>
          <p className="mb-4"><span className="text-blue-500 ">c) </span>{t("termsAndConditions.documento.informacion punto 12.c")}</p>


          </section>
          <section className="mb-8" id="section13">
              <h2 className="text-xl font-semibold mb-2 text-blue-500">13. {t("termsAndConditions.titles.title13")}   </h2>
              {[
                  {  content: t("termsAndConditions.documento.informacion punto 13.p1") },
                  {  content: t("termsAndConditions.documento.informacion punto 13.p2") },
                  {  content: t("termsAndConditions.documento.informacion punto 13.p3") },
              ].map((item, index) => (
                  <div key={index} className="mb-4">
                      <p> {item.content}</p>
                  </div>
              ))}
          </section>

      </div>
  </div>
</section>
  );
};
