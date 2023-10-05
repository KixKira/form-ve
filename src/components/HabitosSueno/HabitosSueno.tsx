import React from "react";

interface HabitosSuenosProps {
    horasDuerme: string;
    setHorasDuerme: React.Dispatch<React.SetStateAction<string>>;
    descansado: boolean;
    setDescansado: React.Dispatch<React.SetStateAction<boolean>>;
    medicamentosDormir: boolean;
    setMedicamentosDormir: React.Dispatch<React.SetStateAction<boolean>>;
    frecuenciaMedicina: string;
    setFrecuenciaMedicina: React.Dispatch<React.SetStateAction<string>>;
    nombreMedicina: string;
    setNombreMedicina: React.Dispatch<React.SetStateAction<string>>;
}

export default function HabitosSuenos(props: HabitosSuenosProps) {
    const {
      horasDuerme,
      setHorasDuerme,
      descansado,
      setDescansado,
      medicamentosDormir,
      setMedicamentosDormir,
      frecuenciaMedicina,
      setFrecuenciaMedicina,
      nombreMedicina,
      setNombreMedicina,
    } = props;

    return (
      <div className="sections">
        <h2 className="font-sans">habitos de sueño</h2>
        <div className="mt-14 w-1/3">
          <div className="input-wrapper w-full">
            <label className="label-input">
              En promedio, cuantas horas duerme por la noche?
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="horasMenos5"
                    value="MENOS5"
                    onChange={(evento) => setHorasDuerme(evento.target.value)}
                    checked={horasDuerme === "MENOS5"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="horasMenos5"
                    className="labelRadio dark:text-gray-500"
                  >
                    Menos de 5
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="horas5"
                    value="5"
                    onChange={(evento) => setHorasDuerme(evento.target.value)}
                    checked={horasDuerme === "5"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="horas5"
                    className="labelRadio dark:text-gray-500"
                  >
                    De 5 a 7
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="horasMas7"
                    value="MAS7"
                    onChange={(evento) => setHorasDuerme(evento.target.value)}
                    checked={horasDuerme === "MAS7"}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="horasMas7"
                    className="labelRadio dark:text-gray-500"
                  >
                    Mas de 7
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-1/3">
          <div className="input-wrapper w-full">
            <label className="label-input">
              Cuando despierta, se siente descansado?
            </label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="descansadoSi"
                    value="SI"
                    onChange={() => setDescansado(true)}
                    checked={descansado}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="descansadoSi"
                    className="labelRadio dark:text-gray-500"
                  >
                    Si
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="descansadoNo"
                    value="NO"
                    onChange={() => setDescansado(false)}
                    checked={!descansado}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="descansadoNo"
                    className="labelRadio dark:text-gray-500"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 w-1/3">
          <div className="input-wrapper w-full">
            <label className="label-input">Usa medicamentos para mimir?</label>
            <div className="mt-3"></div>
            <div className="w-full px-3 mb-6 md:mb-0">
              <div className="flex">
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="medicamentosDormirSi"
                    value="SI"
                    onChange={() => setMedicamentosDormir(true)}
                    checked={medicamentosDormir}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="medicamentosDormirSi"
                    className="labelRadio dark:text-gray-500"
                  >
                    Si
                  </label>
                </div>
                <div className="flex items-center mr-4">
                  <input
                    type="radio"
                    id="medicamentosDormirNo"
                    value="NO"
                    onChange={() => setMedicamentosDormir(false)}
                    checked={!medicamentosDormir}
                    className="radioStyle"
                  />
                  <label
                    htmlFor="medicamentosDormirNo"
                    className="labelRadio dark:text-gray-500"
                  >
                    No
                  </label>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        {medicamentosDormir && (
          <>
            <div className="mt-6 w-1/4">
              <div className="input-wrapper w-full">
                <label className="label-input">
                  Especificar frecuencia de medicamento
                </label>
                <div className="mt-3"></div>
                <div className="w-full px-3 mb-6 md:mb-0">
                  <div className="flex">
                    <div className="flex items-center mr-4">
                      <input
                        type="radio"
                        id="frecuenciaDiaria"
                        value="DIARIO"
                        onChange={(evento) =>
                          setFrecuenciaMedicina(evento.target.value)
                        }
                        checked={frecuenciaMedicina === "DIARIO"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="frecuenciaDiaria"
                        className="labelRadio dark:text-gray-500"
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
                          setFrecuenciaMedicina(evento.target.value)
                        }
                        checked={frecuenciaMedicina === "OCASIONAL"}
                        className="radioStyle"
                      />
                      <label
                        htmlFor="frecuenciaOcasional"
                        className="labelRadio dark:text-gray-500"
                      >
                        Ocasional
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 w-1/4">
              <div className="input-wrapper w-full">
                <label className="label-input">
                  Especificar nombre de medicamento
                </label>
                <div className="mt-3"></div>
                <input
                  type="text"
                  id="nombreMedicamento"
                  value={nombreMedicina}
                  onChange={(evento) => setNombreMedicina(evento.target.value)}
                  className="input-field"
                  placeholder="Nombre de medicamento"
                />
              </div>
            </div>
          </>
        )}
      </div>
    );
}

