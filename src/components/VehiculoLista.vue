<template>
    <div class="vehiculo-lista">
      <h2>Lista de Vehículos</h2>
      <button @click="consultarVehiculos">Consultar</button>
      <table>
        <thead>
          <tr>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Acción 1</th>
            <th>Acción 2</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vehiculo in vehiculos" :key="vehiculo.id">
            <td>{{ vehiculo.placa }}</td>
            <td>{{ vehiculo.marca }}</td>
            <td>{{ vehiculo.modelo }}</td>
            <td><button @click="verVehiculo()">VER</button></td>
            <td><button @click="borrarvehiculo()">Borrar</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { buscarTodosVehiculosFacade } from "../clients/ClienteVehiculo.js";
  
  export default {
    data() {
      return {
        vehiculos: [],
      };
    },
    methods: {
      async consultarVehiculos() {
        this.vehiculos = await buscarTodosVehiculosFacade();
      }

    }
  };
  </script>
  
  <style>
  .vehiculo-lista {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  .vehiculo-lista h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  
  th, td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  
  th {
    background-color: #f2f2f2;
  }
  
  button {
    padding: 5px 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>