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
        return peso / (estatura / 100) ** 2;
      } else {
        return null;
      }
    }

    return (
      <div className="divisorParent">
        <h2>Evaluacion de control</h2>
        <div className="divisorQuestions md:w-1/3 md:mb-0">
          <label htmlFor="estatura" className="labelSection">
            Estatura (cm)
          </label>
          <input
            type="number"
            id="estatura"
            value={estaturaInput}
            onChange={manejarEstaturaInput}
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-1 px-2 mb-3 leading-tight"
          />
        </div>
        <div className="divisorQuestions md:w-1/3 md:mb-0">
          <label htmlFor="peso" className="labelSection">
            Peso (Kg)
          </label>
          <input
            type="number"
            id="peso"
            value={pesoInput}
            onChange={manejarPesoInput}
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-1 px-2 mb-3 leading-tight"
          />
        </div>
        <div className="divisorQuestions md:w-1/3 md:mb-0">
          <label htmlFor="cintura" className="labelSection">
            Cintura (cm)
          </label>
          <input
            type="number"
            id="cintura"
            value={cinturaInput}
            onChange={manejarCinturaInput}
            className="appearance-none w-full bg-gray-200 text-gray-700 border rounded py-1 px-2 mb-3 leading-tight"
          />
        </div>
        {imc !== null && <p>Tu IMC es {imc.toFixed(1)}</p>}
      </div>
    );
};

export default EvaluacionControl;