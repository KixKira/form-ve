import React, { useEffect, useState } from "react";

interface DatosPersonalesProps {
  nombre: string;
  setNombre: (nombre: string) => void;
  cedulaPasaporte: string;
  setCedulaPasaporte: (cedulaPasaporte: string) => void;
  fechaNacimiento: string;
  setFechaNacimiento: (fechaNacimiento: string) => void;
  sexo: string;
  setSexo: (sexo: string) => void;
  embarazada: string;
  setEmbarazada: (embarazada: string) => void;
  email: string;
  setEmail: (email: string) => void;
  telefono: string;
  setTelefono: (telefono: string) => void;
  ocupacion: string;
  setOcupacion: (ocupacion: string) => void;
  avanzarComponente: () => void;
}

const DatosPersonales: React.FC<DatosPersonalesProps> = (props) => {
  const {
    nombre,
    setNombre,
    cedulaPasaporte,
    setCedulaPasaporte,
    fechaNacimiento,
    setFechaNacimiento,
    sexo,
    setSexo,
    embarazada,
    setEmbarazada,
    email,
    setEmail,
    telefono,
    setTelefono,
    ocupacion,
    setOcupacion,
    avanzarComponente
  } = props;

  const [fechaHora, setFechaHora] = useState("");
  const [botonHabilitado, setBotonHabilitado] = useState(false);
  const [nombreError, setNombreError] = useState("");
  const [cedulaPasaporteError, setCedulaPasaporteError] = useState("");
  const [fechaNacimientoError, setFechaNacimientoError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [telefonoError, setTelefonoError] = useState("");
  const [sexoError, setSexoError] = useState("");
  const [embazarazadaError, setEmbarazadaError] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaHora(new Date().toLocaleDateString('es-ES'));
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    if (sexo === "MASCULINO" || embarazada === "NO") {
      setBotonHabilitado(true);
    } else {
      setBotonHabilitado(false);
    }
  }, [sexo, embarazada]);

  const validarCamposRequeridos = () => {
    console.log(validarCamposRequeridos);
    let esValido = true;

    if (!nombre) {
      setNombreError("Este campo es requerido");
      console.log("Nombre vacio");
      esValido = false;
    } else {
      setNombreError("");
    }

    if (!cedulaPasaporte) {
      setCedulaPasaporteError("Este campo es requerido");
      esValido = false;
    } else {
      setCedulaPasaporteError("");
    }

    if (!fechaNacimiento) {
      setFechaNacimientoError("Este campo es requerido");
      esValido = false;
    } else {
      setFechaNacimientoError("");
    }

    if (!email) {
      setEmailError("Este campo es requerido");
      esValido = false;
    } else {
      setEmailError("");
    }

    if (!telefono) {
      setTelefonoError("Este campo es requerido");
      esValido = false;
    } else {
      setTelefonoError("");
    }

    if (sexo === "") {
      setSexoError("Este campo es requerido");
      esValido = false;
    } else {
      setSexoError("");
    }

    if (embarazada === "") {
      setEmbarazadaError("Este campo es requerido");
      esValido = false;
    } else {
      setEmbarazadaError("");
    }

    return esValido;
  };
  
  const avanzar = () => {
    if (embarazada === "SI") {
      alert("Gracias por su tiempo");
    } else {
      if (validarCamposRequeridos()) {
        avanzarComponente();
      }
    }
  };

  return (
    <div className="sections">
      <h2 className="font-sans">Datos personales</h2>
      <div className="mt-14">
        <div className="input-wrapper">
          <label htmlFor="nombre" className="label-input">
            Nombre completo:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            required
            className="input-field focus:text-black"
            placeholder="John Doe"
          />
          {nombreError && <span className="text-red-500">{nombreError}</span>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="fechaHora" className="label-input">
            Fecha:
          </label>
          <input
            type="text"
            id="fechaHora"
            value={fechaHora}
            readOnly
            className="input-field w-32"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="cedulaPasaporte" className="label-input">
            Cédula o pasaporte:
          </label>
          <input
            type="text"
            id="cedulaPasaporte"
            value={cedulaPasaporte}
            onChange={(evento) => setCedulaPasaporte(evento.target.value)}
            required
            className="input-field"
            placeholder="001-0000000-1"
          />
          {cedulaPasaporteError && <span className="text-red-500">{cedulaPasaporteError}</span>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="fechaNacimiento" className="label-input">
            Fecha de nacimiento:
          </label>
          <input
            type="date"
            id="fechaNacimiento"
            value={(fechaNacimiento)}
            onChange={(evento) => setFechaNacimiento(evento.target.value)}
            required
            className="input-field"
          />
          {fechaNacimientoError && <span className="text-red-500">{fechaNacimientoError}</span>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="email" className="label-input">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
            required
            className="input-field"
            placeholder="mail@example.com"
          />
          {emailError && <span className="text-red-500">{emailError}</span>}
        </div>
      </div>
      <div className="mt-8">
        <div className="input-wrapper">
          <label htmlFor="telefono" className="label-input">
            Teléfono:
          </label>
          <input
            type="tel"
            id="telefono"
            value={telefono}
            onChange={(evento) => setTelefono(evento.target.value)}
            required
            className="input-field"
            placeholder="1-809 829849"
          />
          {telefonoError && <span className="text-red-500">{telefonoError}</span>}
        </div>
        <div className="input-wrapper">
          <label htmlFor="ocupacion" className="label-input">
            Ocupación:
          </label>
          <input
            type="text"
            id="ocupacion"
            value={ocupacion}
            onChange={(evento) => setOcupacion(evento.target.value)}
            className="input-field"
            placeholder="Ingeniero en Informática"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="sexo" className="label-input">
            Sexo:
          </label>
          <select
            id="sexo"
            value={sexo}
            onChange={(evento) => setSexo(evento.target.value)}
            required
            className="appearance-none leading-tight input-field"
          >
            <option value="">Seleccione una opción</option>
            <option value="MASCULINO">Masculino</option>
            <option value="FEMENINO">Femenino</option>
          </select>
          {sexoError && <span className="text-red-500">{sexoError}</span>}
        </div>
        {sexo === "FEMENINO" && (
          <div className="input-wrapper">
            <label htmlFor="embarazada" className="label-input">
              ¿Esta embarazada?
            </label>
            <select
              id="embarazada"
              value={embarazada}
              onChange={(evento) => setEmbarazada(evento.target.value)}
              required
              className="appearance-none leading-tight input-field"
            >
              <option value="">Seleccione una opción</option>
              <option value="SI">Sí</option>
              <option value="NO">No</option>
            </select>
            {embazarazadaError && <span className="text-red-500">{embazarazadaError}</span>}
          </div>
        )}
        {embarazada === "SI" && (
          <button
            onClick={avanzar}
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
          >
            Enviar
          </button>
        )}
        {(sexo === "MASCULINO" || embarazada === "NO") && (
          <button
            onClick={avanzarComponente}
            className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
              botonHabilitado ? "" : "opacity-50 cursor-not-allowed"
            }`}
            disabled={!botonHabilitado}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

export default DatosPersonales;