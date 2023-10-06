import { useState } from "react";

interface EvaluacionControlProps {
    estatura: number | null;
    setEstatura:(estatura: number | null) => void;
    peso: number | null;
    setPeso:(peso: number | null) => void;
    cintura: number | null;
    setCintura:(cintura: number | null) => void;
    imc: number | null;
}

const EvaluacionControl: React.FC<EvaluacionControlProps> = ({
  estatura,
  setEstatura,
  peso,
  setPeso,
  cintura,
  setCintura,
  imc,
}) => {
    const [estaturaInput, setEstaturaInput] = useState("");
    const [pesoInput, setPesoInput] = useState("");
    const [cinturaInput, setCinturaInput] = useState("");

    function manejarEstaturaInput(evento: React.ChangeEvent<HTMLInputElement>) {
        setEstaturaInput(evento.target.value);
        const valor = parseFloat(evento.target.value);
        setEstatura(isNaN(valor) ? null : valor);
    }

    function manejarPesoInput(evento: React.ChangeEvent<HTMLInputElement>) {
        setPesoInput(evento.target.value);
        const valor = parseFloat(evento.target.value);
        setPeso(isNaN(valor) ? null : valor);
    }

    function manejarCinturaInput(evento: React.ChangeEvent<HTMLInputElement>) {
        setCinturaInput(evento.target.value);
        const valor = parseFloat(evento.target.value);
        setCintura(isNaN(valor) ? null : valor);
    }

    function calcularIMC() {
      if (estatura && peso) {
        const imc = peso / (estatura / 100) ** 2;
        const puntaje = puntajeIMC(imc);
        return {imc, puntaje};
      } else {
        return { imc: null, puntaje: 0 };
      }
    }

    function puntajeIMC(imc: number) {
      if (imc >= 25 && imc <= 29.9) {
        return 1
      } else if (imc >= 30 && imc <= 34.9) {
        return 2
      } else if (imc >= 35 && imc <= 39.9) {
        return 3
      } else if (imc >= 40) {
        return 4
      } else {
        return 0
      }
    }

    const { imc: imcValue, puntaje: puntajeIMCValue } = calcularIMC();

    return (
      <div className="sections">
        <h2 className="font-sans">Evaluacion de control</h2>
        <div className="mt-14 w-1/3">
          <div className="input-wrapper w-full">
            <label htmlFor="estatura" className="label-input">
              Estatura (cm)
            </label>
            <div className="mt-3"></div>
            <input
              type="text"
              id="estatura"
              value={estaturaInput}
              onChange={manejarEstaturaInput}
              className="input-field"
              placeholder="Ejemplo: 195mtrs"
            />
          </div>
        </div>
        <div className="mt-14 w-1/3">
          <div className="input-wrapper w-full">
            <label htmlFor="peso" className="label-input">
              Peso (Kg)
            </label>
            <div className="mt-3"></div>
            <input
              type="text"
              id="peso"
              value={pesoInput}
              onChange={manejarPesoInput}
              className="input-field"
              placeholder="Ejemplo: 300Kg"
            />
          </div>
        </div>
        <div className="mt-14 w-1/3">
        <div className="input-wrapper w-full">
            <label htmlFor="cintura" className="label-input">
              Cintura (cm)
            </label>
            <input
              type="text"
              id="cintura"
              value={cinturaInput}
              onChange={manejarCinturaInput}
              className="input-field"
              placeholder="Ejemplo: 20cm"
            />
          </div>
        </div>
        {imcValue !== null && <p>Tu IMC es {imcValue.toFixed(1)}</p>}
        <div className="mt-4">
          <p>Tu puntaje actual es: {puntajeIMCValue}</p>
        </div>
      </div>
    );
};

export default EvaluacionControl;