import foto from '../assets/foto-karla.jpg';

const Header = () => {
  return (
    <header className="bg-primary text-white text-center py-4">
      <img
        src={foto}
        alt="Foto de Karla"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "4px solid white",
          objectFit: "cover",
          marginBottom: "10px"
        }}
      />
      <h1 className="fw-bold">Karla Waleska Rodríguez Arévalo</h1>
      <nav className="d-flex justify-content-center flex-wrap mt-3">
        <a href="#perfil" className="text-white mx-3 text-decoration-none">Perfil</a>
        <a href="#formacion" className="text-white mx-3 text-decoration-none">Formación</a>
        <a href="#experiencia" className="text-white mx-3 text-decoration-none">Experiencia</a>
        <a href="#habilidades" className="text-white mx-3 text-decoration-none">Habilidades</a>
        <a href="#proyectos" className="text-white mx-3 text-decoration-none">Proyectos</a>
        <a href="#contacto" className="text-white mx-3 text-decoration-none">Contacto</a>
      </nav>
    </header>
  );
};

export default Header;
