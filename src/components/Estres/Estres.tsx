import React from "react";

interface EstresProps {
  sienteEstres: boolean;
  setSienteEstres: React.Dispatch<React.SetStateAction<boolean>>;
  nivelEstres: number | null;
  setNivelEstres: React.Dispatch<React.SetStateAction<number | null>>;
  sintomasSaludMental: string;
  setSintomasSaludMental: React.Dispatch<React.SetStateAction<string>>;
  capacidadModificarEstiloVida: boolean;
  setCapacidadModificarEstiloVida: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Estres(props: EstresProps) {
    const {
        sienteEstres,
        setSienteEstres,
        nivelEstres,
        setNivelEstres,
        sintomasSaludMental,
        setSintomasSaludMental,
        capacidadModificarEstiloVida,
        setCapacidadModificarEstiloVida,
    } = props;
    
    return (
      <div className="divisorParent">
        <h2>Estres y salud mental</h2>
        <div className="divisorQuestions md:w-30 md:mb-0">
          <label className="labelSection">Se siente estresado?</label>
          <div className="divisorQuestions md:w-30 md:mb-0">
            <div className="flex">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="sienteEstresSi"
                  value="SI"
                  onChange={() => setSienteEstres(true)}
                  checked={sienteEstres}
                  className="radioStyle"
                />
                <label
                  htmlFor="sienteEstresSi"
                  className="labelRadio dark:text-gray-500"
                >
                  Si
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="sienteEstresNo"
                  value="NO"
                  onChange={() => setSienteEstres(false)}
                  checked={!sienteEstres}
                  className="radioStyle"
                />
                <label
                  htmlFor="sienteEstresNo"
                  className="labelRadio dark:text-gray-500"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
        {sienteEstres && (
          <div className="divisorQuestions md:w-30 md:mb-0">
            <label className="labelSection">
              Calificar del 1 al 10 el nivel de estres percibido
            </label>
            <div>
              <input
                type="number"
                id="nivelEstres"
                min="1"
                max="10"
                value={nivelEstres ?? ""}
                onChange={(evento) =>
                  setNivelEstres(Number(evento.target.value))
                }
                className="appearance-none w-14 bg-gray-200 text-gray-700 border rounded py-1 px-2 mb-3 leading-tight"
                placeholder="10"
              />
            </div>
          </div>
        )}
        <div className="divisorQuestions md:w-30 md:mb-0">
          <label className="labelSection">Tiene sintomas de:</label>
          <div className="divisorQuestions md:w-30 md:mb-0">
            <div className="flex">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="sintomaAnsiedad"
                  value="ANSIEDAD"
                  onChange={(evento) =>
                    setSintomasSaludMental(evento.target.value)
                  }
                  checked={sintomasSaludMental === "ANSIEDAD"}
                  className="radioStyle"
                />
                <label
                  htmlFor="sintomaAnsiedad"
                  className="labelRadio dark:text-gray-500"
                >
                  Ansiedad
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="sintomaDepresion"
                  value="DEPRESION"
                  onChange={(evento) =>
                    setSintomasSaludMental(evento.target.value)
                  }
                  checked={sintomasSaludMental === "DEPRESION"}
                  className="radioStyle"
                />
                <label
                  htmlFor="sintomaDepresion"
                  className="labelRadio dark:text-gray-500"
                >
                  Depresion
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="sintomaNinguna"
                  value="NINGUNA"
                  onChange={(evento) =>
                    setSintomasSaludMental(evento.target.value)
                  }
                  checked={sintomasSaludMental === "NINGUNA"}
                  className="radioStyle"
                />
                <label
                  htmlFor="sintomaNinguna"
                  className="labelRadio dark:text-gray-500"
                >
                  Ninguna
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="divisorQuestions md:w-30 md:mb-0">
          <label className="labelSection">
            Siente que es capaz de modificar su estilo de vida para ser mas
            saludable?
          </label>
          <div className="divisorQuestions md:w-30 md:mb-0">
            <div className="flex">
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="modificarEstiloSi"
                  value="SI"
                  onChange={() => setCapacidadModificarEstiloVida(true)}
                  checked={capacidadModificarEstiloVida}
                  className="radioStyle"
                />
                <label
                  htmlFor="modificarEstiloSi"
                  className="labelRadio dark:text-gray-500"
                >
                  Si
                </label>
              </div>
              <div className="flex items-center mr-4">
                <input
                  type="radio"
                  id="modificarEstiloNo"
                  value="NO"
                  onChange={() => setCapacidadModificarEstiloVida(false)}
                  checked={!capacidadModificarEstiloVida}
                  className="radioStyle"
                />
                <label
                  htmlFor="modificarEstiloNo"
                  className="labelRadio dark:text-gray-500"
                >
                  No
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}