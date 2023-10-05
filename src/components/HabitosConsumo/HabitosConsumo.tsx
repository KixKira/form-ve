import React from "react";

interface HabitosConsumoProps {
    fumadorActivo: boolean;
    setFumadorActivo: React.Dispatch<React.SetStateAction<boolean>>;
    tipoFumador: string[];
    setTipoFumador: React.Dispatch<React.SetStateAction<string[]>>;
    frecuenciaFumador: string;
    setFrecuenciaFumador: React.Dispatch<React.SetStateAction<string>>;
    viveConFumador: boolean;
    setViveConFumador: React.Dispatch<React.SetStateAction<boolean>>;
    consumeAlcohol: boolean;
    setConsumeAlcohol: React.Dispatch<React.SetStateAction<boolean>>;
    frecuenciaAlcohol: string;
    setFrecuenciaAlcohol: React.Dispatch<React.SetStateAction<string>>;
}

export default function HabitosConsumo(props: HabitosConsumoProps) {
    const {
      fumadorActivo,
      setFumadorActivo,
      tipoFumador,
      setTipoFumador,
      frecuenciaFumador,
      setFrecuenciaFumador,
      viveConFumador,
      setViveConFumador,
      consumeAlcohol,
      setConsumeAlcohol,
      frecuenciaAlcohol,
      setFrecuenciaAlcohol,
    } = props;

    return (
      <div className="sections">
        <h2 className="font-sans">Habitos de consumo</h2>
        <div className="mt-14 w-full">
          <div className="input-wrapper w-40">
            <label className="label-input">Fumador activo:</label>
            <div className="mt-3"></div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="fumadorSi"
                    value="SI"
                    onChange={() => setFumadorActivo(true)}
                    checked={fumadorActivo}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="fumadorSi"
                    className="labelRadio dark:text-gray-500"
                  >
                    Si
                  </label>
                </div>
                <div className="flex items-center mr-0">
                  <input
                    type="radio"
                    id="fumadorNo"
                    value="NO"
                    onChange={() => setFumadorActivo(false)}
                    checked={!fumadorActivo}
                    className="radioStyle"
                  />
                </div>
                <label
                  htmlFor="fumadorNo"
                  className="labelRadio dark:text-gray-500"
                >
                  No
                </label>
              </div>
            </div>
          </div>
          <div className="input-wrapper w-56">
            <label className="label-input w-full">
              Consume bebidas alcoholicas:
            </label>
            <div className="mt-3"></div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="consumeAlcoholSi"
                    value="SI"
                    onChange={() => setConsumeAlcohol(true)}
                    checked={consumeAlcohol}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="consumeAlcoholSi"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                  >
                    Si
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="consumeAlcoholNo"
                    value="NO"
                    onChange={() => setConsumeAlcohol(false)}
                    checked={!consumeAlcohol}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="consumeAlcoholNo"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
          {fumadorActivo && (
            <div className="mt-14 w-full">
              <div className="input-wrapper">
                <label className="label-input w-full">
                  Especificar que fuma:
                </label>
                <div className="mt-3"></div>
                <div className="input-wrapper">
                  <input
                    type="checkbox"
                    id="cigarrillo"
                    value="CIGARRILLO"
                    onChange={(evento) =>
                      setTipoFumador((prevTipoFumador) =>
                        evento.target.checked
                          ? [...prevTipoFumador, evento.target.value]
                          : prevTipoFumador.filter(
                              (tipo) => tipo !== evento.target.value
                            )
                      )
                    }
                    checked={tipoFumador.includes("CIGARRILLO")}
                  />
                  <label
                    htmlFor="cigarrillo"
                    className="label-checkbox font-sans"
                  >
                    Cigarrillo
                  </label>
                </div>
                <div className="input-wrapper">
                  <input
                    type="checkbox"
                    id="tabaco"
                    value="TABACO"
                    onChange={(evento) =>
                      setTipoFumador((prevTipoFumador) =>
                        evento.target.checked
                          ? [...prevTipoFumador, evento.target.value]
                          : prevTipoFumador.filter(
                              (tipo) => tipo !== evento.target.value
                            )
                      )
                    }
                    checked={tipoFumador.includes("TABACO")}
                  />
                  <label htmlFor="tabaco" className="label-checkbox font-sans">
                    Tabaco
                  </label>
                </div>
                <div className="input-wrapper">
                  <input
                    type="checkbox"
                    id="vaper"
                    value="VAPER"
                    onChange={(evento) =>
                      setTipoFumador((prevTipoFumador) =>
                        evento.target.checked
                          ? [...prevTipoFumador, evento.target.value]
                          : prevTipoFumador.filter(
                              (tipo) => tipo !== evento.target.value
                            )
                      )
                    }
                    checked={tipoFumador.includes("VAPER")}
                  />
                  <label htmlFor="vaper" className="label-checkbox font-sans">
                    Vaper
                  </label>
                </div>
                <div className="input-wrapper">
                  <input
                    type="checkbox"
                    id="otros"
                    value="OTROS"
                    onChange={(evento) =>
                      setTipoFumador((prevTipoFumador) =>
                        evento.target.checked
                          ? [...prevTipoFumador, evento.target.value]
                          : prevTipoFumador.filter(
                              (tipo) => tipo !== evento.target.value
                            )
                      )
                    }
                    checked={tipoFumador.includes("OTROS")}
                  />
                  <label htmlFor="vaper" className="label-checkbox font-sans">
                    Otro:
                  </label>
                  {tipoFumador.includes("OTROS") && (
                    <input
                      type="text"
                      id="otrosTexto"
                      value={
                        tipoFumador.includes("OTROS")
                          ? tipoFumador.find((tipo) => tipo !== "OTROS")
                          : ""
                      }
                      onChange={(evento) =>
                        setTipoFumador((prevTipoFumador) =>
                          prevTipoFumador.map((tipo) =>
                            tipo === "OTROS" ? evento.target.value : tipo
                          )
                        )
                      }
                      className="ml-2 input-field"
                      placeholder="Especificar que otra cosa fuma"
                    />
                  )}
                </div>
              </div>
              <div className="input-wrapper w-56">
                <label className="label-input">
                  Favor indicar la frecuencia:
                </label>
                <div className="mt-3"></div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="frecuenciaDiario"
                        value="DIARIO"
                        onChange={(evento) =>
                          setFrecuenciaFumador(evento.target.value)
                        }
                        checked={frecuenciaFumador === "DIARIO"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="frecuenciaDiario"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                      >
                        Diario
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="frecuenciaOcasional"
                        value="OCASIONAL"
                        onChange={(evento) =>
                          setFrecuenciaFumador(evento.target.value)
                        }
                        checked={frecuenciaFumador === "OCASIONAL"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="frecuenciaOcasional"
                        className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                      >
                        Ocasional
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!fumadorActivo && (
            <div className="input-wrapper w-40">
              <label className="label-input w-full">Vive con un fumador:</label>
              <div className="mt-3"></div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div className="flex">
                  <div className="flex items-center mr-4">
                    <input
                      type="radio"
                      id="viveConFumadorSi"
                      value="SI"
                      onChange={() => setViveConFumador(true)}
                      checked={viveConFumador}
                      className="radioStyle"
                    />
                    <label
                      htmlFor="viveConFumadorSi"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      Si
                    </label>
                  </div>
                  <div className="flex items-center mr-4">
                    <input
                      type="radio"
                      id="viveConFumadorNo"
                      value="NO"
                      onChange={() => setViveConFumador(false)}
                      checked={!viveConFumador}
                      className="radioStyle"
                    />
                    <label
                      htmlFor="viveConFumadorNo"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {consumeAlcohol && (
          <div className="mt-8 w-full">
            <div className="input-wrapper w-full">
              <label className="label-input">
                Frecuencia con la que consume bebidas alcoholicas:
              </label>
              <div className="mt-3"></div>
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <div className="flex">
                  <div className="flex items-center mr-4">
                    <input
                      type="radio"
                      id="frecuenciaAlcoholDiario"
                      value="DIARIO"
                      onChange={(evento) =>
                        setFrecuenciaAlcohol(evento.target.value)
                      }
                      checked={frecuenciaAlcohol === "DIARIO"}
                      className="radioStyle"
                    />
                    <label
                      htmlFor="frecuenciaAlcoholDiario"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500 mr-4"
                    >
                      Diario
                    </label>
                    <input
                      type="radio"
                      id="frecuenciaAlcoholOcasional"
                      value="OCASIONAL"
                      onChange={(evento) =>
                        setFrecuenciaAlcohol(evento.target.value)
                      }
                      checked={frecuenciaAlcohol === "OCASIONAL"}
                      className="radioStyle"
                    />
                    <label
                      htmlFor="frecuenciaAlcoholOcasional"
                      className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-500"
                    >
                      Ocasional
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
}