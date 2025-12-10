import Link from "next/link";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">

      {/* Header minimalista */}
      <header className="bg-white border-b border-gray-200">
        <nav className="max-w-4xl mx-auto flex gap-10 justify-center py-4 text-gray-700 font-medium">
          <Link href="/" className="hover:text-black transition">Home</Link>
          <Link href="/about" className="hover:text-black transition">Sobre mí</Link>
          <Link href="/projects" className="hover:text-black transition">Proyectos</Link>
          <Link href="/contact" className="hover:text-black transition">Contacto</Link>
        </nav>
      </header>

      {/* Contenido */}
      <main className="flex-1">{children}</main>

      {/* Footer minimalista */}
      <Footer />
      
    </div>
  );
}

