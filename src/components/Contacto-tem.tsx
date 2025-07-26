import { useState } from "react";

const Contacto = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !email || !mensaje) {
      setError("Todos los campos son obligatorios");
    } else {
      setError("");
      alert("¡Gracias por contactarme!");
    }
  };

  return (
    <section id="contacto" className="container-fluid px-5 py-4">
      <h2>Contacto</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" className="form-control mb-2"
          value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <input type="email" placeholder="Correo" className="form-control mb-2"
          value={email} onChange={(e) => setEmail(e.target.value)} />
        <textarea placeholder="Mensaje" className="form-control mb-2"
          value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
        <button className="btn btn-primary">Enviar</button>
      </form>
    </section>
  );
};

export default Contacto;
