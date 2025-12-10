import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-pink-50">

        {/* Contenido */}
        <div className="relative z-10 bg-white/50 backdrop-blur-sm p-10 rounded-2xl shadow-lg max-w-lg w-full text-center m-6">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
            Contacto
          </h2>

          <p className="text-gray-700 mb-4">
            Puedes ponerte en contacto conmigo aquí:
          </p>

          <p className="text-lg text-gray-900 font-semibold mb-2">
            📧 Email:
          </p>
          <a href="mailto:noeliateal@gmail.com" className="text-blue-400 hover:underline mb-6 block">
            noeliateal@gmail.com
          </a>


          <p className="text-lg text-gray-900 font-semibold mb-2">
            💻 GitHub:
          </p>
          <a
            href="https://github.com/noeliateal"
            target="_blank"
            className="text-blue-400 hover:underline"
          >
            Mi GitHub
          </a>
        </div>

      </div>
    </Layout>
  );
}
