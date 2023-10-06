import React from "react";

interface ActividadFisicaProps {
    nivelActividadFisica: string;
    setNivelActividadFisica: React.Dispatch<React.SetStateAction<string>>;
    realizaActividadFisica: boolean;
    setRealizaActividadFisica: React.Dispatch<React.SetStateAction<boolean>>;
    nivelActividadFisicaSemanal: string;
    setNivelActividadFisicaSemanal: React.Dispatch<React.SetStateAction<string>>;
    frecuenciaActividadFisica: string;
    setFrecuenciaActividadFisica: React.Dispatch<React.SetStateAction<string>>;
    horasActividadFisica: string;
    setHorasActividadFisica: React.Dispatch<React.SetStateAction<string>>;
}

export default function ActividadFisica(props: ActividadFisicaProps) {
    const {
      nivelActividadFisica,
      setNivelActividadFisica,
      realizaActividadFisica,
      setRealizaActividadFisica,
      nivelActividadFisicaSemanal,
      setNivelActividadFisicaSemanal,
      frecuenciaActividadFisica,
      setFrecuenciaActividadFisica,
      horasActividadFisica,
      setHorasActividadFisica,
    } = props;

    function puntajeActividad() {
      let points = 0
      if (nivelActividadFisica.includes("SEDENTARIO")) {
        points += 2
      } else if (nivelActividadFisica.includes("MODERADO")) {
        points += 1
      }
      if (!realizaActividadFisica.valueOf()) {
        points += 2
      }

      return points;
    }

    const puntajeActividadTotal = puntajeActividad();

    return (
      <div className="sections">
        <h2 className="font-sans">Actividad fisica</h2>
        <div className="mt-14 w-1/3">
          <div className="input-wrapper">
            <label className="label-input">Que tan activo es su dia?</label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="actividadFisicaSedentario"
                    value="SEDENTARIO"
                    onChange={(evento) =>
                      setNivelActividadFisica(evento.target.value)
                    }
                    checked={nivelActividadFisica === "SEDENTARIO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="actividadFisicaSedentario"
                    className="labelRadio dark:text-gray-500"
                  >
                    Sedentario
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="actividadFisicaModerado"
                    value="MODERADO"
                    onChange={(evento) =>
                      setNivelActividadFisica(evento.target.value)
                    }
                    checked={nivelActividadFisica === "MODERADO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="actividadFisicaModerado"
                    className="labelRadio dark:text-gray-500"
                  >
                    Moderadamente Activo
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="actividadFisicaActivo"
                    value="ACTIVO"
                    onChange={(evento) =>
                      setNivelActividadFisica(evento.target.value)
                    }
                    checked={nivelActividadFisica === "ACTIVO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="actividadFisicaActivo"
                    className="labelRadio dark:text-gray-500"
                  >
                    Muy Activo
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-1/2">
          <div className="input-wrapper w-full">
            <label className="label-input">
              Realiza algun tipo de actividad fisica
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="actividadFisicaSi"
                    value="SI"
                    onChange={() => setRealizaActividadFisica(true)}
                    checked={realizaActividadFisica}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="actividadFisicaSi"
                    className="labelRadio dark:text-gray-500"
                  >
                    Si
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="actividadFisicaNo"
                    value="NO"
                    onChange={() => setRealizaActividadFisica(false)}
                    checked={!realizaActividadFisica}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="actividadFisicaNo"
                    className="labelRadio dark:text-gray-500"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        {realizaActividadFisica && (
          <>
            <div className="mt-6 w-1/3">
              <div className="input-wrapper">
                <label className="label-input">
                  Nivel de actividad fisica semana
                </label>
                <div className="mt-3"></div>
                <div className="w-full px-3 mb-6 md:mb-0">
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="actividadFisicaLigero"
                        value="LIGERO"
                        onChange={(evento) =>
                          setNivelActividadFisicaSemanal(evento.target.value)
                        }
                        checked={nivelActividadFisicaSemanal === "LIGERO"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="actividadFisicaLigero"
                        className="labelRadio dark:text-gray-500"
                      >
                        Ligero
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="actividadFisicaModerado"
                        value="MODERADO"
                        onChange={(evento) =>
                          setNivelActividadFisicaSemanal(evento.target.value)
                        }
                        checked={nivelActividadFisicaSemanal === "MODERADO"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="actividadFisicaModerado"
                        className="labelRadio dark:text-gray-500"
                      >
                        Moderado
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="actividadFisicaIntenso"
                        value="INTENSO"
                        onChange={(evento) =>
                          setNivelActividadFisicaSemanal(evento.target.value)
                        }
                        checked={nivelActividadFisicaSemanal === "INTENSO"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="actividadFisicaIntenso"
                        className="labelRadio dark:text-gray-500"
                      >
                        Intenso
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-1/2">
              <div className="input-wrapper w-full">
                <label className="label-input">
                  Favor especificar la frecuencia en que realiza actividad
                  fisica
                </label>
                <div className="mt-3"></div>
                <div className="w-full px-3 mb-6 md:mb-0">
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="frecuenciaActividadMenos"
                        value="MENOS"
                        onChange={(evento) =>
                          setFrecuenciaActividadFisica(evento.target.value)
                        }
                        checked={frecuenciaActividadFisica === "MENOS"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="frecuenciaActividadMenos"
                        className="labelRadio dark:text-gray-500"
                      >
                        Menos de 3 veces por semana
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="frecuenciaActividad3"
                        value="3"
                        onChange={(evento) =>
                          setFrecuenciaActividadFisica(evento.target.value)
                        }
                        checked={frecuenciaActividadFisica === "3"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="frecuenciaActividad3"
                        className="labelRadio dark:text-gray-500"
                      >
                        De 3-5 veces por semana
                      </label>
                    </div>
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="frecuenciaActividadMas"
                        value="MAS"
                        onChange={(evento) =>
                          setFrecuenciaActividadFisica(evento.target.value)
                        }
                        checked={frecuenciaActividadFisica === "MAS"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="frecuenciaActividadMas"
                        className="labelRadio dark:text-gray-500"
                      >
                        Mas de 5 veces por semana
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-1/2">
              <div className="input-wrapper w-full">
                <label className="label-input">
                  Especificar el numero de horas por dia que realiza actividad
                  fisica
                </label>
                <div className="mt-3"></div>
                <input
                  type="text"
                  id="horasActividadFisica"
                  value={horasActividadFisica}
                  onChange={(evento) =>
                    setHorasActividadFisica(evento.target.value)
                  }
                  className="input-field"
                  placeholder="Ejemplo: 14 horas por dia"
                />
              </div>
            </div>
          </>
        )}
        <div className="mt-4">
          <p>Tu puntaje es de: {puntajeActividadTotal}</p>
        </div>
      </div>
    );
}