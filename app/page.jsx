import Formulario from './formulario'

const API = `http://172.19.19.40:4010`

const getDistritos = async () => {
  const response = await fetch(`${API}/distritos`, { cache: 'no-store' })
  return response.json()
}

const getTecnicos = async () => {
  const response = await fetch(`${API}/tecnicoEstado`, { cache: 'no-store' })
  return response.json()
}

export default async function App () {
  const alldistritos = await getDistritos()
  const alltecnicos = await getTecnicos()
  return (
    <div>
      <h1 className='text-3xl text-center font-bold mb-10'>React form</h1>
      <Formulario
      alldistritos = {alldistritos}
      alltecnicos = {alltecnicos}
      />
    </div>
  )
}