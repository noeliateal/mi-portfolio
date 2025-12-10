import Image from "next/image";
import Layout from "./components/Layout";

export default function Home() {
  return (
    <Layout>
      <div className="flex flex-col md:flex-row items-center gap-12 py-24 px-6 max-w-4xl mx-auto">
        
        {/* FOTO */}
        <div className="w-80 h-80 relative">
          <Image
            src="/images/noelia.jpg" 
            alt="Foto de Noeli"
            fill
            className="object-cover rounded-full shadow-lg"
          />
        </div>

        {/* TEXTO */}
        <div className="flex-1">
          <h1 className="text-5xl font-extrabold text-pink-300 mb-4">
            ¡Hola! soy Noelia
          </h1>
          <p className="text-gray-900 text-lg max-w-md">
            Estudiante de Tecnología Digital y Multimedia en la UPV, interesada en el desarrollo web y diseño digital.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="/projects"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition"
            >
              Ver proyectos
            </a>

            <a
              href="/contact"
              className="px-6 py-3 border border-gray-900 text-gray-900 rounded-lg hover:bg-gray-100 transition"
            >
              Contacto
            </a>
          </div>
        </div>

      </div>
    </Layout>
  );
}
