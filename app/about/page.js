import Image from "next/image";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto py-20 px-6 text-gray-800">

        <div className="relative w-full h-62 mb-10">
          <Image
            src="/images/frase-aboutme.png"
            alt="Foto de Noeli"
            fill
            className="object-cover rounded-xl shadow-md"
          />
        </div>

        <h2 className="text-4xl text-[#573530] font-extrabold mb-6">Sobre mí</h2>

        <p className="text-lg leading-relaxed mb-6">
          Soy estudiante de Tecnología Digital y Multimedia en la UPV. Me apasiona crear experiencias web modernas, limpias y funcionales.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Tengo destreza con HTML, CSS, JavaScript, GitHub y estoy aprendiendo nuevas herramientas para poder trabajar en proyectos profesionales.
        </p>

        <p className="text-lg leading-relaxed">
          Me considero una persona creativa, curiosa y con muchas ganas de aprender tecnologías nuevas. Además, completé un curso en Inteligencia 
          Artificial que me permitió profundizar en modelos de aprendizaje automático, lo cual despertó aún más mi interés por este campo. 
        </p>
      </div>
    </Layout>
  );
}
