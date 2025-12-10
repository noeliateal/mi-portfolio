import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-10 border-t border-gray-200 mt-20">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-6 text-3xl text-gray-700">
          
          {/* Instagram */}
          <a
            href="https://instagram.com/noeliateal"
            target="_blank"
            className="hover:text-black transition"
          >
            <FaInstagram />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/noeliateal"
            target="_blank"
            className="hover:text-black transition"
          >
            <FaLinkedin />
          </a>
        </div>

        <p className="text-gray-500 text-sm mt-2">
          © {new Date().getFullYear()} Noelia - Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
