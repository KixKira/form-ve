import React from "react";

interface BienestarProps {
  nivelBienestar: string;
  setNivelBienestar: React.Dispatch<React.SetStateAction<string>>;
  nivelSalud: string;
  setNivelSalud: React.Dispatch<React.SetStateAction<string>>;
}

export default function Bienestar(props: BienestarProps) {
  const { nivelBienestar, setNivelBienestar, nivelSalud, setNivelSalud } =
    props;

    function puntajeBienestar() {
      let points = 0
      if (nivelBienestar.includes("BUENO")) {
        points += 2;
      } else if (nivelBienestar.includes("REGULAR")) {
        points += 3;
      } else if (nivelBienestar.includes("MALO")) {
        points += 4;
      }

      if (nivelSalud.includes("BUENO")) {
        points += 2;
      } else if (nivelSalud.includes("REGULAR")) {
        points += 3;
      } else if (nivelSalud.includes("MALO")) {
        points += 4;
      }

      return points;
    }

    const puntajeBienestarTotal = puntajeBienestar();

    return (
      <div className="sections">
        <h2 className="font-sans">Bienestar</h2>
        <div className="mt-14 w-full">
          <div className="input-wrapper w-96">
            <label className="label-input">Nivel de bienestar:</label>
            <div className="mt-3"></div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="bienestarEx"
                    value="EXCELENTE"
                    onChange={(evento) =>
                      setNivelBienestar(evento.target.value)
                    }
                    checked={nivelBienestar === "EXCELENTE"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="bienestarEx"
                    className="labelRadio dark:text-gray-500"
                  >
                    Excelente
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="bienestarBu"
                    value="BUENO"
                    onChange={(evento) =>
                      setNivelBienestar(evento.target.value)
                    }
                    checked={nivelBienestar === "BUENO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="bienestarBu"
                    className="labelRadio dark:text-gray-500"
                  >
                    Bueno
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="bienestarRe"
                    value="REGULAR"
                    onChange={(evento) =>
                      setNivelBienestar(evento.target.value)
                    }
                    checked={nivelBienestar === "REGULAR"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="bienestarRe"
                    className="labelRadio dark:text-gray-500"
                  >
                    Regular
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="bienestarMa"
                    value="MALO"
                    onChange={(evento) =>
                      setNivelBienestar(evento.target.value)
                    }
                    checked={nivelBienestar === "MALO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="bienestarMa"
                    className="labelRadio dark:text-gray-500"
                  >
                    Malo
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="input-wrapper w-40">
            <label className="label-input w-full">Nivel de salud:</label>
            <div className="mt-3"></div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="SaludEx"
                    value="EXCELENTE"
                    onChange={(evento) => setNivelSalud(evento.target.value)}
                    checked={nivelSalud === "EXCELENTE"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="SaludEx"
                    className="labelRadio dark:text-gray-500"
                  >
                    Excelente
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="saludBu"
                    value="BUENO"
                    onChange={(evento) => setNivelSalud(evento.target.value)}
                    checked={nivelSalud === "BUENO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="saludBu"
                    className="labelRadio dark:text-gray-500"
                  >
                    Bueno
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="saludRe"
                    value="REGULAR"
                    onChange={(evento) => setNivelSalud(evento.target.value)}
                    checked={nivelSalud === "REGULAR"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="saludRe"
                    className="labelRadio dark:text-gray-500"
                  >
                    Regular
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="saludMa"
                    value="MALO"
                    onChange={(evento) => setNivelSalud(evento.target.value)}
                    checked={nivelSalud === "MALO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="saludMa"
                    className="labelRadio dark:text-gray-500"
                  >
                    Malo
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>Tu puntaje es de: {puntajeBienestarTotal}</p>
        </div>
      </div>
    );
}