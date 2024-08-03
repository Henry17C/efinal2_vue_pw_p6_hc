import axios from "axios";

const insertarVehiculo = async (clienteVehiculo) => {
    const data = await axios.post("http://localhost:8080/API/v1.0/Concesionario/vehiculos", clienteVehiculo).then(r=>r.data);
    return data;
}
const buscarTodosVehiculos = async () => {
    const data = await axios.get("http://localhost:8080/API/v1.0/Concesionario/vehiculos").then(r=>r.data);
    return data;
}


///exports


export const insertarVehiculoFacade = async (clienteVehiculo) => {
    return await insertarVehiculo(clienteVehiculo);
}

export const buscarTodosVehiculosFacade = async () => {
    return await buscarTodosVehiculos();
}