const Header = () => {
  return (
    <header className=" pt-4 pb-4 bg-[#C60428] flex flex-col md:flex-row items-center justify-between px-4 w-full h-auto md:h-24 ">
      <div className="flex items-center mb-4 md:mb-1">
        <a href="#">
          <img
            src="images/escudo.png"
            alt="logo-junior"
            className="w-10 h-auto md:w-14 ml-4 md:ml-32"
          />
        </a>
        <h1 className="text-white text-lg ml-2">
          <strong>JUNIOR </strong>
          <span className="text-sm block md:inline">unofficial store</span>
        </h1>
      </div>
      <nav className="w-full md:w-auto">
        <ul className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-10">
          <li><a href="#introduction" className="text-white hover:text-custom-yellow">Introducción</a></li>
          <li><a href="#diagnosis" className="text-white hover:text-custom-yellow">Diagnóstico</a></li>
          <li><a href="#identity" className="text-white hover:text-custom-yellow">Identidad</a></li>
          <li><a href="#objectives" className="text-white hover:text-custom-yellow mr-0 md:mr-32">Objetivos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
