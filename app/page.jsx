import Formulario from "./formulario";

const API = `http://localhost:4010`;

const getDistritos = async () => {
  const response = await fetch(`${API}/distritos`, { cache: "no-store" });
  return response.json();
};

const getTecnicos = async () => {
  const response = await fetch(`${API}/tecnicoEstado`, { cache: "no-store" });
  return response.json();
};

const getPlanes = async () => {
  const response = await fetch(`${API}/planes`, { cache: "no-store" });
  return response.json();
};

const getServicios = async () => {
  const response = await fetch(`${API}/servicios`, { cache: "no-store" });
  return response.json();
};

const getRouters = async () => {
  const response = await fetch(`${API}/router`, { cache: "no-store" });
  return response.json();
};

export default async function App() {
  const alldistritos = await getDistritos();
  const alltecnicos = await getTecnicos();
  const allplanes = await getPlanes();
  const allservicios = await getServicios();
  const allrouters = await getRouters();
  return (
    <div className="w-screen h-screen flex flex-col  justify-center items-center">
      <h1 className="text-3xl text-center font-bold mb-10">React form</h1>
      <Formulario
        alldistritos={alldistritos}
        alltecnicos={alltecnicos}
        allplanes={allplanes}
        allservicios={allservicios}
        allrouters={allrouters}
      />
    </div>
  );
}
