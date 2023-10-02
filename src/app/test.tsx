import { useState } from "react";

export default function Encuesta() {
  const [nombre, setNombre] = useState("");
  const [fechaHora, setFechaHora] = useState(new Date().toLocaleString());
  const [cedulaPasaporte, setCedulaPasaporte] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [sexo, setSexo] = useState("");
  const [embarazada, setEmbarazada] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ocupacion, setOcupacion] = useState("");
  const [enfermedades, setEnfermedades] = useState([]);
  const [medicamentos, setMedicamentos] = useState("");

  function manejarEnvio(evento) {
    evento.preventDefault();
    // Aquí iría la lógica para enviar los datos a un servidor o almacenarlos localmente
  }

  function calcularPuntosEnfermedades() {
    let puntos = 0;

    if (enfermedades.includes("NINGUNA")) {
      puntos += 0;
    } else if (enfermedades.length === 1 && enfermedades.includes("OTRO")) {
      puntos += 0;
    } else if (enfermedades.length === 1) {
      puntos += 1;
    } else {
      puntos += 2;
    }

    return puntos;
  }

  return (
    <form onSubmit={manejarEnvio}>
      <h2>DATOS PERSONALES</h2>
      <div>
        <label htmlFor="nombre">Nombre completo:</label>
        <input type="text" id="nombre" value={nombre} onChange={(evento) => setNombre(evento.target.value)} required />
      </div>
      <div>
        <label htmlFor="fechaHora">Hora y Fecha:</label>
        <input type="text" id="fechaHora" value={fechaHora} readOnly />
      </div>
      <div>
        <label htmlFor="cedulaPasaporte">Cédula o pasaporte:</label>
        <input type="text" id="cedulaPasaporte" value={cedulaPasaporte} onChange={(evento) => setCedulaPasaporte(evento.target.value)} required />
      </div>
      <div>
        <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
        <input type="date" id="fechaNacimiento" value={fechaNacimiento} onChange={(evento) => setFechaNacimiento(evento.target.value)} required />
      </div>
      <div>
        <label htmlFor="sexo">Sexo:</label>
        <select id="sexo" value={sexo} onChange={(evento) => setSexo(evento.target.value)} required>
          <option value="">Seleccione una opción</option>
          <option value="MASCULINO">Masculino</option>
          <option value="FEMENINO">Femenino</option>
        </select>
      </div>
      {sexo === "FEMENINO" && (
        <div>
          <label htmlFor="embarazada">¿Se encuentra embarazada?</label>
          <select id="embarazada" value={embarazada} onChange={(evento) => setEmbarazada(evento.target.value)} required>
            <option value="">Seleccione una opción</option>
            <option value="SI">Sí</option>
            <option value="NO">No</option>
          </select>
          {embarazada === "SI" && <p>Gracias por su tiempo.</p>}
        </div>
      )}
      {sexo !== "FEMENINO" && (
        <>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" value={email} onChange={(evento) => setEmail(evento.target.value)} required />
          </div>
          <div>
            <label htmlFor="telefono">Teléfono:</label>
            <input type="tel" id="telefono" value={telefono} onChange={(evento) => setTelefono(evento.target.value)} required />
          </div>
          <div>
            <label htmlFor="ocupacion">Ocupación:</label>
            <input type="text" id="ocupacion" value={ocupacion} onChange={(evento) => setOcupacion(evento.target.value)} required />
          </div>
        </>
      )}
      <h2>ANTECEDENTES PERSONALES</h2>
      <div>
        <label>Enfermedades crónicas:</label>
        <div>
          <input type="checkbox" id="ninguna" value="NINGUNA" onChange={(evento) => setEnfermedades((prevEnfermedades) => prevEnfermedades.includes("NINGUNA") ? prevEnfermedades.filter((enfermedad) => enfermedad !== "NINGUNA") : ["NINGUNA"])} />
          <label htmlFor="ninguna">Ninguna</label>
        </div>
        <div>
          <input type="checkbox" id="hipertension" value="HIPERTENSION" onChange={(evento) => setEnfermedades((prevEnfermedades) => prevEnfermedades.includes("HIPERTENSION") ? prevEnfermedades.filter((enfermedad) => enfermedad !== "HIPERTENSION") : [...prevEnfermedades, "HIPERTENSION"])} />
          <label htmlFor="hipertension">Hipertensión</label>
        </div>
        <div>
          <input type="checkbox" id="diabetes" value="DIABETES" onChange={(evento) => setEnfermedades((prevEnfermedades) => prevEnfermedades.includes("DIABETES") ? prevEnfermedades.filter((enfermedad) => enfermedad !== "DIABETES") : [...prevEnfermedades, "DIABETES"])} />
          <label htmlFor="diabetes">Diabetes</label>
        </div>
        <div>
          <input type="checkbox" id="asma" value="ASMA" onChange={(evento) => setEnfermedades((prevEnfermedades) => prevEnfermedades.includes("ASMA") ? prevEnfermedades.filter((enfermedad) => enfermedad !== "ASMA") : [...prevEnfermedades, "ASMA"])} />
          <label htmlFor="asma">Asma</label>
        </div>
        <div>
          <input type="checkbox" id="otro" value="OTRO" onChange={(evento) => setEnfermedades((prevEnfermedades) => prevEnfermedades.includes("OTRO") ? prevEnfermedades.filter((enfermedad) => enfermedad !== "OTRO") : [...prevEnfermedades, "OTRO"])} />
          <label htmlFor="otro">Otro:</label>
          <input type="text" id="otroTexto" value={enfermedades.includes("OTRO") ? enfermedades.find((enfermedad) => enfermedad === "OTRO_TEXTO") : ""} onChange={(evento) => setEnfermedades((prevEnfermedades) => prevEnfermedades.map((enfermedad) => enfermedad === "OTRO_TEXTO" ? evento.target.value : enfermedad))} />
        </div>
      </div>
      {enfermedades.length > 0 && !enfermedades.includes("NINGUNA") && (
        <div>
          <label htmlFor="medicamentos">Favor enlistar los medicamentos:</label>
          <input type="text" id="medicamentos" value={medicamentos} onChange={(evento) => setMedicamentos(evento.target.value)} required />
        </div>
      )}
      <button type="submit">Enviar</button>
    </form>
  );
}