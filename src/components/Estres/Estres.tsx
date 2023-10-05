import React, { useState } from "react";
import Rating from "@/Rating/rating";

interface EstresProps {
  sienteEstres: boolean;
  setSienteEstres: React.Dispatch<React.SetStateAction<boolean>>;
  sintomasSaludMental: string;
  setSintomasSaludMental: React.Dispatch<React.SetStateAction<string>>;
  capacidadModificarEstiloVida: boolean;
  setCapacidadModificarEstiloVida: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Estres(props: EstresProps) {
    const {
        sienteEstres,
        setSienteEstres,
        sintomasSaludMental,
        setSintomasSaludMental,
        capacidadModificarEstiloVida,
        setCapacidadModificarEstiloVida,
    } = props;

    const [ratingValue, setRatingValue] = useState(undefined);

    const handleRatingAction = (value: any) => {
      if (Number.isInteger(value)) {
        setRatingValue(value);
      }
    };
    
    return (
      <div className="sections">
        <h2 className="font-sans">Estres y salud mental</h2>
        <div className="mt-14 w-1/4">
          <div className="input-wrapper w-full">
            <label className="label-input">Se siente estresado?</label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
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
        </div>
        <div className="mt-14 w-1/4">
          <div className="input-wrapper">
            <label className="label-input">Tiene sintomas de:</label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
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
        </div>
        <div className="mt-14 w-2/4">
          <div className="input-wrapper w-full">
            <label className="label-input">
              Siente que es capaz de modificar su estilo de vida para ser mas
              saludable?
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
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
        {sienteEstres && (
          <>
            <div className="mt-6 w-1/3">
              <div className="input-wrapper w-full">
                <label className="label-input">
                  Calificar del 1 al 10 el nivel de estres percibido
                </label>
                <div className="mt-3"></div>
                <div className="w-full px-3 mb-6 md:mb-0">
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <Rating
                        iconSize="l"
                        showOutOf={true}
                        enableUserInteraction={true}
                        onClick={handleRatingAction}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    );
}