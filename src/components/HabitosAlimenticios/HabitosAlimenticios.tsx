import React from "react";

interface HabitosAlimenticiosProps {
    comidasAlDia: string;
    setComidasAlDia: React.Dispatch<React.SetStateAction<string>>;
    frecuenciaChatarra: string;
    setFrecuenciaChatarra: React.Dispatch<React.SetStateAction<string>>;
    vasosAgua: string;
    setVasosAgua: React.Dispatch<React.SetStateAction<string>>;
    frecuenciaGolosinas: string;
    setFrecuenciaGolosinas: React.Dispatch<React.SetStateAction<string>>;
    dieta: string;
    setDieta: React.Dispatch<React.SetStateAction<string>>;
    programahabitosSaludables: boolean;
    setProgramahabitosSaludables: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function HabitosAlimenticion(props: HabitosAlimenticiosProps) {
    const {
      comidasAlDia,
      setComidasAlDia,
      frecuenciaChatarra,
      setFrecuenciaChatarra,
      vasosAgua,
      setVasosAgua,
      frecuenciaGolosinas,
      setFrecuenciaGolosinas,
      dieta,
      setDieta,
      programahabitosSaludables,
      setProgramahabitosSaludables,
    } = props;

    return (
      <div className="sections">
        <h2 className="font-sans">Habitos Alimenticios y estilo de vida</h2>
        <div className="mt-14 w-1/3">
          <div className="input-wrapper">
            <label className="label-input">
              Cuantas comidas realiza al dia?
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="comidasAlDia1"
                    value="1"
                    onChange={(evento) => setComidasAlDia(evento.target.value)}
                    checked={comidasAlDia === "1"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="comidasAlDia1"
                    className="labelRadio dark:text-gray-500"
                  >
                    De 1 a 2
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="comidasAlDia3"
                    value="3"
                    onChange={(evento) => setComidasAlDia(evento.target.value)}
                    checked={comidasAlDia === "3"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="comidasAlDia3"
                    className="labelRadio dark:text-gray-500"
                  >
                    De 3 a 5
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="comidasAlDia6"
                    value="6"
                    onChange={(evento) => setComidasAlDia(evento.target.value)}
                    checked={comidasAlDia === "6"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="comidasAlDia6"
                    className="labelRadio dark:text-gray-500"
                  >
                    6 o mas
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-2/3">
          <div className="input-wrapper">
            <label className="label-input">
              Con que frecuencia consume comidad rapidas o chatarra?
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="frecuenciaChatarraDiario"
                    value="DIARIO"
                    onChange={(evento) =>
                      setFrecuenciaChatarra(evento.target.value)
                    }
                    checked={frecuenciaChatarra === "DIARIO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="frecuenciaChatarraDiario"
                    className="labelRadio dark:text-gray-500"
                  >
                    Diario
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="frecuenciaChatarra4"
                    value="4"
                    onChange={(evento) =>
                      setFrecuenciaChatarra(evento.target.value)
                    }
                    checked={frecuenciaChatarra === "4"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="frecuenciaChatarra4"
                    className="labelRadio dark:text-gray-500"
                  >
                    4-6 veces por semana
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="frecuenciaChatarra2"
                    value="2"
                    onChange={(evento) =>
                      setFrecuenciaChatarra(evento.target.value)
                    }
                    checked={frecuenciaChatarra === "2"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="frecuenciaChatarra2"
                    className="labelRadio dark:text-gray-500"
                  >
                    2-3 veces por semana
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="frecuenciaChatarra1"
                    value="1"
                    onChange={(evento) =>
                      setFrecuenciaChatarra(evento.target.value)
                    }
                    checked={frecuenciaChatarra === "1"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="frecuenciaChatarra1"
                    className="labelRadio dark:text-gray-500"
                  >
                    1 vez a la semana
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-1/3">
          <div className="input-wrapper">
            <label className="label-input">
              Cuantos vaso de agua consume al dia?
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="vasosDeAguaMenos4"
                    value="MENOS4"
                    onChange={(evento) => setVasosAgua(evento.target.value)}
                    checked={vasosAgua === "MENOS4"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="vasosDeAguaMenos4"
                    className="labelRadio dark:text-gray-500"
                  >
                    Menos de 4
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="vasosDeAgua4"
                    value="4"
                    onChange={(evento) => setVasosAgua(evento.target.value)}
                    checked={vasosAgua === "4"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="vasosDeAgua4"
                    className="labelRadio dark:text-gray-500"
                  >
                    4-5
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="vasosDeAgua6"
                    value="6"
                    onChange={(evento) => setVasosAgua(evento.target.value)}
                    checked={vasosAgua === "6"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="vasosDeAgua6"
                    className="labelRadio dark:text-gray-500"
                  >
                    6-7
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="vasosDeAgua8"
                    value="8"
                    onChange={(evento) => setVasosAgua(evento.target.value)}
                    checked={vasosAgua === "8"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="vasosDeAgua8"
                    className="labelRadio dark:text-gray-500"
                  >
                    8 o mas
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-2/3">
          <div className="input-wrapper">
            <label className="label-input">
              Con que frecuencia consume dulces/golosinas?
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="frecuenciaGolosinasDiario"
                    value="DIARIO"
                    onChange={(evento) =>
                      setFrecuenciaGolosinas(evento.target.value)
                    }
                    checked={frecuenciaGolosinas === "DIARIO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="frecuenciaGolosinasDiario"
                    className="labelRadio dark:text-gray-500"
                  >
                    Diario
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="frecuenciaGolosinas4"
                    value="4"
                    onChange={(evento) =>
                      setFrecuenciaGolosinas(evento.target.value)
                    }
                    checked={frecuenciaGolosinas === "4"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="frecuenciaGolosinas4"
                    className="labelRadio dark:text-gray-500"
                  >
                    4-6 veces por semana
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="frecuenciaGolosinas2"
                    value="2"
                    onChange={(evento) =>
                      setFrecuenciaGolosinas(evento.target.value)
                    }
                    checked={frecuenciaGolosinas === "2"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="frecuenciaGolosinas2"
                    className="labelRadio dark:text-gray-500"
                  >
                    2-3 veces por semana
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="frecuenciaGolosinasNunca"
                    value="NUNCA"
                    onChange={(evento) =>
                      setFrecuenciaGolosinas(evento.target.value)
                    }
                    checked={frecuenciaGolosinas === "NUNCA"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="frecuenciaGolosinasNunca"
                    className="labelRadio dark:text-gray-500"
                  >
                    No consumo dulces/golosinas
                  </label>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="mt-6 w-1/2">
          <div className="input-wrapper">
            <label className="label-input">Considera que su dieta es?</label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="dietaBalanceada"
                    value="BALANCEADA"
                    onChange={(evento) => setDieta(evento.target.value)}
                    checked={dieta === "BALANCEADA"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="dietaBalanceada"
                    className="labelRadio dark:text-gray-500"
                  >
                    Balanceada y saludable
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="dietaPoco"
                    value="POCO"
                    onChange={(evento) => setDieta(evento.target.value)}
                    checked={dieta === "POCO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="dietaPoco"
                    className="labelRadio dark:text-gray-500"
                  >
                    Poco balanceada
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="dietaNo"
                    value="NO"
                    onChange={(evento) => setDieta(evento.target.value)}
                    checked={dieta === "NO"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="dietaNo"
                    className="labelRadio dark:text-gray-500"
                  >
                    No saludable
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 w-1/2">
        <div className="input-wrapper w-full">
            <label className="label-input">
              Anteriormente ha participado en un programa para adopcion de
              habitos saludables?
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="programaHabitosSaludablesSi"
                    value="SI"
                    onChange={() => setProgramahabitosSaludables(true)}
                    checked={programahabitosSaludables}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="programaHabitosSaludablesSi"
                    className="labelRadio dark:text-gray-500"
                  >
                    Si
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="programaHabitosSaludablesNo"
                    value="NO"
                    onChange={() => setProgramahabitosSaludables(false)}
                    checked={!programahabitosSaludables}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="programaHabitosSaludablesNo"
                    className="labelRadio dark:text-gray-500"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}