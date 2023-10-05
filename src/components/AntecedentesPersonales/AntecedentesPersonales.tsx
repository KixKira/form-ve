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
    <div className="sections">
      <h2 className="font-sans">Antecedentes Personales</h2>
      <div className="mt-14 w-full">
        <div className="input-wrapper">
          <label className="label-input w-full">
            Sufre de alguna de estas enfermedades?
          </label>
          <div className="mt-3"></div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              id="hipertension"
              value="HIPERTENSION"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("HIPERTENSION")}
            />
            <label htmlFor="hipertencion" className="label-checkbox font-sans">
              Hipertension
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              id="diabetes"
              value="DIABETES"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("DIABETES")}
            />
            <label htmlFor="diabetes" className="label-checkbox font-sans">
              Diabetes
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              id="tiroides"
              value="TIROIDES"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("TIROIDES")}
            />
            <label htmlFor="tiroides" className="label-checkbox font-sans">
              Tiroides
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              id="colesterol"
              value="COLESTEROL"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("COLESTEROL")}
            />
            <label htmlFor="colesterol" className="label-checkbox font-sans">
              Colesterol Elevado
            </label>
          </div>
          <div className="input-wrapper">
            <input
              type="checkbox"
              id="otro"
              value="OTRO"
              onChange={manejarCambioEnfermedades}
              checked={enfermedades.includes("OTRO")}
            />
            <label htmlFor="otro" className="label-checkbox font-sans">
              Otro:
            </label>
            {enfermedades.includes("OTRO") && (
              <input
                type="text"
                id="otroTexto"
                value={otraEnfermedad}
                onChange={manejarCambioOtraEnfermedad}
                onClick={manejarClickInput}
                className="ml-2 input-field"
                placeholder="Especificar que otra enfermedad padece"
              />
            )}
          </div>
          <div className="input-wrapper">
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
            <label htmlFor="ninguna" className="label-checkbox font-sans">
              Ninguna
            </label>
          </div>
          {enfermedades.length > 0 && !enfermedades.includes("NINGUNA") && (
            <div className="input-wrapper">
              <label htmlFor="medicamentos" className="label-input">
                Favor enlistar los medicamentos:
              </label>
              <input
                type="text"
                id="medicamentos"
                value={medicamentos}
                onChange={manejarCambioMedicamentos}
                required
                className="ml-2 input-field"
                placeholder="Medicamentos"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}