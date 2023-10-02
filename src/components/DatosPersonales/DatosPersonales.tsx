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
    setOcupacion
  } = props;

  const [fechaHora, setFechaHora] = useState("");

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaHora(new Date().toLocaleDateString());
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="flex flex-wrap mx-3 mb-6 mt-6">
      <h2>Datos personales</h2>
      <div>
        <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
          <label
            htmlFor="nombre"
            className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Nombre completo:
          </label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(evento) => setNombre(evento.target.value)}
            required
            className="appearance-none w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Bashir Dali Al-Hassan Amrabat"
          />
          <p className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="fechaHora"
              className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Fecha:
            </label>
            <input
              type="text"
              id="fechaHora"
              value={fechaHora}
              readOnly
              className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="cedulaPasaporte"
              className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Cédula o pasaporte:
            </label>
            <input
              type="text"
              id="cedulaPasaporte"
              value={cedulaPasaporte}
              onChange={(evento) => setCedulaPasaporte(evento.target.value)}
              required
              className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              placeholder="001-0000000-1"
            />
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="fechaNacimiento"
              className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Fecha de nacimiento:
            </label>
            <input
              type="date"
              id="fechaNacimiento"
              value={fechaNacimiento}
              onChange={(evento) => setFechaNacimiento(evento.target.value)}
              required
              className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              htmlFor="sexo"
              className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            >
              Sexo:
            </label>
            <select
              id="sexo"
              value={sexo}
              onChange={(evento) => setSexo(evento.target.value)}
              required
              className="block appearance-none w-full bg-gray-200 border rounded py-3 px-4 mb-3 hover:border-gray-500 leading-tight focus:outline-none"
            >
              <option value="">Seleccione una opción</option>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMENINO">Femenino</option>
            </select>
          </div>
        </div>
        {sexo === "FEMENINO" && (
          <div className="flex flex-wrap">
            <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
              <label
                htmlFor="embarazada"
                className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                ¿Se encuentra embarazada?
              </label>
              <select
                id="embarazada"
                value={embarazada}
                onChange={(evento) => setEmbarazada(evento.target.value)}
                required
                className="block appearance-none w-full bg-gray-200 border rounded py-3 px-4 mb-3 hover:border-gray-500 leading-tight focus:outline-none"
              >
                <option value="">Seleccione una opción</option>
                <option value="SI">Sí</option>
                <option value="NO">No</option>
              </select>
              {embarazada === "SI" && (
                <p className="text-gray-900 font-bold text-xl">
                  Gracias por su tiempo.
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      {(sexo === "MASCULINO" || embarazada === "NO") && (
        <>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="email"
                className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
                required
                className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="mail@example.com"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                htmlFor="telefono"
                className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Teléfono:
              </label>
              <input
                type="tel"
                id="telefono"
                value={telefono}
                onChange={(evento) => setTelefono(evento.target.value)}
                required
                className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="1-809 829849"
              />
            </div>
            <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
              <label
                htmlFor="ocupacion"
                className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              >
                Ocupación:
              </label>
              <input
                type="text"
                id="ocupacion"
                value={ocupacion}
                onChange={(evento) => setOcupacion(evento.target.value)}
                required
                className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                placeholder="Ingeniero en Informática"
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DatosPersonales;