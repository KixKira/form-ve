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

    return (
      <div className="flex flex-wrap mx-3 mb-6 mt-6">
        <h2>Bienestar</h2>
        <div>
          <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
            <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Nivel de bienestar:
            </label>
            <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
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
                  <label htmlFor="bienestarEx" className="labelRadio dark:text-gray-500">
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
                  <label htmlFor="bienestarBu" className="labelRadio dark:text-gray-500">
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
                  <label htmlFor="bienestarRe" className="labelRadio dark:text-gray-500">
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
                  <label htmlFor="bienestarMa" className="labelRadio dark:text-gray-500">
                    Malo
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-30 px-3 mb-6 md:mb-0 mt-2">
          <label className="uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
            Nivel de salud:
          </label>
          <div className="w-full md:w-30 px-3 mb-6 md:mb-0">
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
                <label htmlFor="SaludEx" className="labelRadio dark:text-gray-500">
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
                <label htmlFor="saludBu" className="labelRadio dark:text-gray-500">
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
                <label htmlFor="saludRe" className="labelRadio dark:text-gray-500">
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
                <label htmlFor="saludMa" className="labelRadio dark:text-gray-500">
                  Malo
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}