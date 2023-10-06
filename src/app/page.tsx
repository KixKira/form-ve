"use client"

import { useState } from "react";
import DatosPersonales from '@/components/DatosPersonales/DatosPersonales';
import AntecedentesPersonales from '@/components/AntecedentesPersonales/AntecedentesPersonales';
import HabitosConsumo from '@/components/HabitosConsumo/HabitosConsumo';
import Bienestar from "@/components/Bienestar/Bienestar";
import HabitosAlimenticion from "@/components/HabitosAlimenticios/HabitosAlimenticios";
import ActividadFisica from "@/components/ActividadFisica/ActividadFisica";
import Estres from "@/components/Estres/Estres";
import HabitosSuenos from "@/components/HabitosSueno/HabitosSueno";
import EvaluacionControl from "@/components/EvaluacionControl/EvaluacionControl";
import Image from "next/image";
import humanoSeguros from "@/assets/HumanoSeguros.png"

interface EncuestaProps {}

const Encuesta: React.FC<EncuestaProps> = () => {
  const [nombre, setNombre] = useState("")
  const [cedulaPasaporte, setCedulaPasaporte] = useState("")
  const [fechaNacimiento, setFechaNacimiento] = useState("")
  const [sexo, setSexo] = useState("")
  const [embarazada, setEmbarazada] = useState("")
  const [email, setEmail] = useState("")
  const [telefono, setTelefono] = useState("")
  const [ocupacion, setOcupacion] = useState("")
  
  const [enfermedades, setEnfermedades] = useState<string[]>([]);
  const [medicamentos, setMedicamentos] = useState("");

  const [fumadorActivo, setFumadorActivo] = useState(false);
  const [tipoFumador, setTipoFumador] = useState<string[]>([]);
  const [frecuenciaFumador, setFrecuenciaFumador] = useState("");
  const [viveConFumador, setViveConFumador] = useState(false);
  const [consumeAlcohol, setConsumeAlcohol] = useState(false);
  const [frecuenciaAlcohol, setFrecuenciaAlcohol] = useState("");

  const [nivelBienestar, setNivelBienestar] = useState("");
  const [nivelSalud, setNivelSalud] = useState("");

  const [comidasAlDia, setComidasAlDia] = useState("");
  const [frecuenciaChatarra, setFrecuenciaChatarra] = useState("");
  const [vasosAgua, setVasosAgua] = useState("");
  const [frecuenciaGolosinas, setFrecuenciaGolosinas] = useState("");
  const [dieta, setDieta] = useState("");
  const [programahabitosSaludables, setProgramahabitosSaludables] = useState(false);

  const [nivelActividadFisica, setNivelActividadFisica] = useState("");
  const [realizaActividadFisica, setRealizaActividadFisica] = useState(false);
  const [nivelActividadFisicaSemanal, setNivelActividadFisicaSemanal] = useState("");
  const [frecuenciaActividadFisica, setFrecuenciaActividadFisica] = useState("");
  const [horasActividadFisica, setHorasActividadFisica] = useState("");

  const [sienteEstres, setSienteEstres] = useState(false);
  const [sintomasSaludMental, setSintomasSaludMental] = useState("");
  const [capacidadModificarEstiloVida, setCapacidadModificarEstiloVida] = useState(false);

  const [horasDuerme, setHorasDuerme] = useState("");
  const [descansado, setDescansado] = useState(true);
  const [medicamentosDormir, setMedicamentosDormir] = useState(false);
  const [frecuenciaMedicina, setFrecuenciaMedicina] = useState("");
  const [nombreMedicina, setNombreMedicina] = useState("");

  const [estatura, setEstatura] = useState<number | null>(null);
  const [peso, setPeso] = useState<number | null>(null);
  const [cintura, setCintura] = useState<number | null>(null);
  const imc = estatura && peso ? peso / ((estatura / 100) ** 2) : null;

  const [enviado, setEnviado] = useState(false);

  const [componenteActual, setComponeneteActual] = useState("datosPersonales");

  function avanzarComponente() {
    if (componenteActual === "datosPersonales") {
      if (nombre && cedulaPasaporte && fechaNacimiento && sexo && email && telefono && ocupacion) {
        setComponeneteActual("antecedentesPersonales");
      } else {
        alert("Por favor, complete todos los campos antes de continuar.");
      }
    } else {
      setComponeneteActual(siguienteComponente(componenteActual));
    }
  }

  function siguienteComponente(componenteActual: string) {
    switch (componenteActual) {
      case "antecedentesPersonales":
        return "habitosConsumo";
      case "habitosConsumo":
        return "bienestar";
      case "bienestar":
        return "habitosAlimentacion";
      case "habitosAlimentacion":
        return "actividadFisica";
      case "actividadFisica":
        return "estres";
      case "estres":
        return "habitosSuenos";
      case "habitosSuenos":
        return "evaluacionControl";
      case "evaluacionControl":
        return "datosPersonales";
      default:
        return "datosPersonales";
    }
  }

  function manejarEnvio(evento: React.FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const datos = {
      nombre,
      fechaHora: new Date().toLocaleString(),
      cedulaPasaporte,
      fechaNacimiento,
      sexo,
      embarazada,
      email,
      telefono,
      ocupacion,

      enfermedades,
      medicamentos,

      fumadorActivo,
      tipoFumador,
      frecuenciaFumador,
      viveConFumador,
      consumeAlcohol,
      frecuenciaAlcohol,

      nivelBienestar,
      nivelSalud,

      comidasAlDia,
      frecuenciaChatarra,
      vasosAgua,
      frecuenciaGolosinas,
      dieta,
      programahabitosSaludables,

      nivelActividadFisica,
      realizaActividadFisica,
      nivelActividadFisicaSemanal,
      frecuenciaActividadFisica,
      horasActividadFisica,

      sintomasSaludMental,
      capacidadModificarEstiloVida,

      horasDuerme,
      descansado,
      medicamentosDormir,
      frecuenciaMedicina,
      nombreMedicina,
    };

    const encuestasAnteriores = JSON.parse(localStorage.getItem("encuestas") || "[]");
    encuestasAnteriores.push(datos);
    localStorage.setItem("encuestas", JSON.stringify(encuestasAnteriores));

    setEnviado(true);
  }

  return (
    <>
      <div className="flex justify-center mt-9">
        <Image
          src={humanoSeguros}
          width={400}
          height={400}
          alt="Humano Seguros Logo"
        />
      </div>
      <div className="flex justify-center m-32">
        <div className="bg-white rounded-2xl w-screen">
          <form onSubmit={manejarEnvio} className="m-16">
            {componenteActual === "datosPersonales" && (
              <>
                <DatosPersonales
                  nombre={nombre}
                  setNombre={setNombre}
                  cedulaPasaporte={cedulaPasaporte}
                  setCedulaPasaporte={setCedulaPasaporte}
                  fechaNacimiento={fechaNacimiento}
                  setFechaNacimiento={setFechaNacimiento}
                  sexo={sexo}
                  setSexo={setSexo}
                  embarazada={embarazada}
                  setEmbarazada={setEmbarazada}
                  email={email}
                  setEmail={setEmail}
                  telefono={telefono}
                  setTelefono={setTelefono}
                  ocupacion={ocupacion}
                  setOcupacion={setOcupacion}
                  avanzarComponente={avanzarComponente}
                />
                <AntecedentesPersonales
                  enfermedades={enfermedades}
                  setEnfermedades={setEnfermedades}
                  medicamentos={medicamentos}
                  setMedicamentos={setMedicamentos}
                />
                <HabitosConsumo
                  fumadorActivo={fumadorActivo}
                  setFumadorActivo={setFumadorActivo}
                  tipoFumador={tipoFumador}
                  setTipoFumador={setTipoFumador}
                  frecuenciaFumador={frecuenciaFumador}
                  setFrecuenciaFumador={setFrecuenciaFumador}
                  viveConFumador={viveConFumador}
                  setViveConFumador={setViveConFumador}
                  consumeAlcohol={consumeAlcohol}
                  setConsumeAlcohol={setConsumeAlcohol}
                  frecuenciaAlcohol={frecuenciaAlcohol}
                  setFrecuenciaAlcohol={setFrecuenciaAlcohol}
                />
                <Bienestar
                  nivelBienestar={nivelBienestar}
                  setNivelBienestar={setNivelBienestar}
                  nivelSalud={nivelSalud}
                  setNivelSalud={setNivelSalud}
                />
                <HabitosAlimenticion
                  comidasAlDia={comidasAlDia}
                  setComidasAlDia={setComidasAlDia}
                  frecuenciaChatarra={frecuenciaChatarra}
                  setFrecuenciaChatarra={setFrecuenciaChatarra}
                  vasosAgua={vasosAgua}
                  setVasosAgua={setVasosAgua}
                  frecuenciaGolosinas={frecuenciaGolosinas}
                  setFrecuenciaGolosinas={setFrecuenciaGolosinas}
                  dieta={dieta}
                  setDieta={setDieta}
                  programahabitosSaludables={programahabitosSaludables}
                  setProgramahabitosSaludables={setProgramahabitosSaludables}
                />
                <ActividadFisica
                  nivelActividadFisica={nivelActividadFisica}
                  setNivelActividadFisica={setNivelActividadFisica}
                  realizaActividadFisica={realizaActividadFisica}
                  setRealizaActividadFisica={setRealizaActividadFisica}
                  nivelActividadFisicaSemanal={nivelActividadFisicaSemanal}
                  setNivelActividadFisicaSemanal={
                    setNivelActividadFisicaSemanal
                  }
                  frecuenciaActividadFisica={frecuenciaActividadFisica}
                  setFrecuenciaActividadFisica={setFrecuenciaActividadFisica}
                  horasActividadFisica={horasActividadFisica}
                  setHorasActividadFisica={setHorasActividadFisica}
                />
                <Estres
                  sienteEstres={sienteEstres}
                  setSienteEstres={setSienteEstres}
                  sintomasSaludMental={sintomasSaludMental}
                  setSintomasSaludMental={setSintomasSaludMental}
                  capacidadModificarEstiloVida={capacidadModificarEstiloVida}
                  setCapacidadModificarEstiloVida={
                    setCapacidadModificarEstiloVida
                  }
                />
                <HabitosSuenos
                  horasDuerme={horasDuerme}
                  setHorasDuerme={setHorasDuerme}
                  descansado={descansado}
                  setDescansado={setDescansado}
                  medicamentosDormir={medicamentosDormir}
                  setMedicamentosDormir={setMedicamentosDormir}
                  frecuenciaMedicina={frecuenciaMedicina}
                  setFrecuenciaMedicina={setFrecuenciaMedicina}
                  nombreMedicina={nombreMedicina}
                  setNombreMedicina={setNombreMedicina}
                />
                <EvaluacionControl
                  estatura={estatura}
                  setEstatura={setEstatura}
                  peso={peso}
                  setPeso={setPeso}
                  cintura={cintura}
                  setCintura={setCintura}
                  imc={imc}
                />
              </>
            )}
            {componenteActual !== "datosPersonales" && <>Puto</>}
          </form>
        </div>
      </div>
    </>
  );
};

export default Encuesta;