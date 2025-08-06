export default function Navbar() {
  return (
    <header className="bg-black text-white shadow-md fixed top-0 left-0 w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-end items-center">
        <ul className="flex space-x-8 text-sm md:text-base">
          <li>
            <a href="#inicio" className="hover:text-pink-400 transition">
              Início
            </a>
          </li>
          <li>
            <a href="#projetos" className="hover:text-pink-400 transition">
              Projetos
            </a>
          </li>
          <li>
            <a href="#sobre" className="hover:text-pink-400 transition">
              Sobre
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}