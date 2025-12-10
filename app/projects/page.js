import Layout from "../components/Layout";

export default function Projects() {
  const proyectos = [
    {
      nombre: "PORTFOLIO✨",
      descripcion:
        "Este portfolio está hecho con React y Next.js, nuevas herramientas que estoy aprendiendo.",
      link: "https://github.com/noeliateal/mi-portfolio",
    },
    {
      nombre: "DESARROLLO WEB",
      descripcion:
        "Dos diferentes páginas web creadas con HTML, CSS y JavaScript para la asignatura de Tecnologías Web.",
      link: "https://github.com/noeliateal/paginas-web",
    },
    {
      nombre: "PROYECTO VISIÓN ARTIFICIAL",
      descripcion:
        "Reconocimiento de emociones faciales usando Jupyter Notebook, Keras y modelo CNN. Incluye dataset, entrenamiento y análisis de resultados.",
      link: "https://github.com/noeliateal/vision-artificial",
    },
    {
      nombre: "ESPACIO 3D",
      descripcion:
        "Proyecto de la asignatura de Diseño Gráfico: modelado y renderizado de una habitación en 3D.",
      link: "https://drive.google.com/drive/folders/11crpDOZevY1bha2xPhIBbY1dpAMgHJtT?usp=sharing", // GOOGLE DRIVE
    },
    {
      nombre: "CORTOMETRAJE",
      descripcion:
        "Asignatura de Narración y Lenguaje Audiovisual. Dirigido, escrito y filmado por mis compañeros y por mí.",
      link: "https://youtu.be/cnCir0hgDSs?si=7XuJGqEKqZOvwnox", // YOUTUBE
    },
  ];

  // 🎨 Colores pastel para cada card
  const colores = [
    "bg-[#F5FFF9]",
    "bg-[#F5FFF9]",
    "bg-[#F5FFF9]",
    "bg-[#F5FFF9]",
    "bg-[#F5FFF9]",
  ];

  // ✔️ Función que detecta el tipo de enlace y devuelve el texto adecuado
  const textoBoton = (url) => {
    if (!url) return "";

    if (url.includes("github.com")) return "Ver en GitHub";
    if (url.includes("youtube.com") || url.includes("youtu.be"))
      return "Ver en YouTube";
    if (url.includes("drive.google.com")) return "Ver en Google Drive";

    return "Ver proyecto";
  };

  return (
    <Layout>
      <div className="max-w-5xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-extrabold text-[#5C966D] mb-8 text-center">
          Mis Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {proyectos.map((proyecto, index) => (
            <div
                key={index}
                className={`
                    ${colores[index % colores.length]} 
                    rounded-xl shadow-md p-6 hover:scale-105 transition transform
                    ${index === proyectos.length - 1 ? "md:col-span-2 md:w-1/2 md:mx-auto" : ""}
                `}
            >

              <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                {proyecto.nombre}
              </h3>
              <p className="text-gray-700 mb-4">{proyecto.descripcion}</p>

              {proyecto.link && (
                <a
                  href={proyecto.link}
                  target="_blank"
                  className="text-[#5C966D] font-semibold hover:underline"
                >
                  {textoBoton(proyecto.link)}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
