import React, { useState } from "react";

interface AntecedentesPersonalesProps {
  enfermedades: string[];
  setEnfermedades: React.Dispatch<React.SetStateAction<string[]>>;
  medicamentos: string;
  setMedicamentos: React.Dispatch<React.SetStateAction<string>>;
}

export default function AntecedentesPersonales(props: AntecedentesPersonalesProps) {
  const { enfermedades, setEnfermedades, medicamentos, setMedicamentos } =
    props;

  const [otraEnfermedad, setOtraEnfermedad] = useState("");

  function manejarCambioEnfermedades(
    evento: React.ChangeEvent<HTMLInputElement>
  ) {
    const opcion = evento.target.value;
    if (opcion === "OTRO") {
      setOtraEnfermedad("");
      setEnfermedades((prevEnfermedades: string[]) => [
        ...prevEnfermedades,
        "OTRO",
      ]);
    } else {
      setEnfermedades((prevEnfermedades: string[]) =>
        prevEnfermedades.includes(opcion)
          ? prevEnfermedades.filter(
              (enfermedad: string) => enfermedad !== opcion
            )
          : [...prevEnfermedades, opcion]
      );
    }
  }

  function manejarCambioOtraEnfermedad(
    evento: React.ChangeEvent<HTMLInputElement>
  ) {
    setOtraEnfermedad(evento.target.value);
    setEnfermedades((prevEnfermedades: string[]) => {
      const nuevasEnfermedades = [...prevEnfermedades];
      const indice = nuevasEnfermedades.indexOf("OTRO");
      if (indice >= 0) {
        if (evento.target.value) {
          nuevasEnfermedades[indice] = evento.target.value;
        } else {
          nuevasEnfermedades.splice(indice, 1);
        }
      }
      return nuevasEnfermedades;
    });
  }

  function manejarCambioMedicamentos(
    evento: React.ChangeEvent<HTMLInputElement>
  ) {
    setMedicamentos(evento.target.value);
  }

  function manejarClickInput(evento: React.MouseEvent<HTMLInputElement>) {
    evento.stopPropagation();
  }

  return (
    <div className="flex flex-wrap mx-3 mb-6 mt-6">
      <h2>Antecedentes Personales</h2>
      <div>
        <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Sufre de alguna de estas enfermedades?
          </label>
          <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
            <input
              type="checkbox"
              id="hipertension"
              value="HIPERTENSION"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("HIPERTENSION")}
            />
            <label
              htmlFor="hipertencion"
              className="tracking-wide text-gray-900 text-lg ml-2"
            >
              Hipertension
            </label>
          </div>
          <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
            <input
              type="checkbox"
              id="diabetes"
              value="DIABETES"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("DIABETES")}
            />
            <label
              htmlFor="diabetes"
              className="tracking-wide text-gray-900 text-lg ml-2"
            >
              Diabetes
            </label>
          </div>
          <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
            <input
              type="checkbox"
              id="tiroides"
              value="TIROIDES"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("TIROIDES")}
            />
            <label
              htmlFor="tiroides"
              className="tracking-wide text-gray-900 text-lg ml-2"
            >
              Tiroides
            </label>
          </div>
          <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
            <input
              type="checkbox"
              id="colesterol"
              value="COLESTEROL"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("COLESTEROL")}
            />
            <label
              htmlFor="colesterol"
              className="tracking-wide text-gray-900 text-lg ml-2"
            >
              Colesterol Elevado
            </label>
          </div>
          <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
            <input
              type="checkbox"
              id="otro"
              value="OTRO"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("OTRO")}
            />
            <label
              htmlFor="otro"
              className="tracking-wide text-gray-900 text-lg ml-2"
            >
              Otro:
            </label>
            {enfermedades.includes("OTRO") && (
              <input
                type="text"
                id="otroTexto"
                value={otraEnfermedad}
                onChange={manejarCambioOtraEnfermedad}
                onClick={manejarClickInput}
                className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-1 px-2 mb-3 leading-tight"
                placeholder="Especificar que otra enfermedad padece"
              />
            )}
          </div>
          <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
            <input
              type="checkbox"
              id="ninguna"
              value="NINGUNA"
              onChange={(evento) =>
                setEnfermedades((prevEnfermedades) =>
                  prevEnfermedades.includes("NINGUNA")
                    ? prevEnfermedades.filter(
                        (enfermedad) => enfermedad !== "NINGUNA"
                      )
                    : ["NINGUNA"]
                )
              }
            />
            <label
              htmlFor="ninguna"
              className="tracking-wide text-gray-900 text-lg ml-2"
            >
              Ninguna
            </label>
          </div>
        </div>
      </div>
      {enfermedades.length > 0 && !enfermedades.includes("NINGUNA") && (
        <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
          <label
            htmlFor="medicamentos"
            className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Favor enlistar los medicamentos:
          </label>
          <input
            type="text"
            id="medicamentos"
            value={medicamentos}
            onChange={manejarCambioMedicamentos}
            required
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            placeholder="Medicamentos"
          />
        </div>
      )}
    </div>
  );
}