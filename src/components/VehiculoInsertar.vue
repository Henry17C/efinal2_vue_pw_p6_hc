<template>
  <div class="vehiculo-form">
    <h2>Insertar Vehículo</h2>

    <div class="form-group">
      <label for="placa">Placa</label>
      <input type="text" v-model="placa" id="placa" required />

      <label for="marca">Marca</label>
      <input type="text" v-model="marca" id="marca" required />

      <label for="modelo">Modelo</label>
      <input type="text" v-model="modelo" id="modelo" required />

      <label for="color">Color</label>
      <input type="text" v-model="color" id="color" required />

      <label for="precio">Precio</label>
      <input type="number" v-model="precio" id="precio" required />
    </div>
    <button type="submit" @click="insertarVehiculo">Insertar</button>
    <div v-if="mensajeExito" class="mensaje-exito">
      Vehículo insertado con éxito!
    </div>
  </div>
</template>
  
  <script>
import { insertarVehiculoFacade } from "../clients/ClienteVehiculo.js";
export default {
  data() {
    return {
      placa: "",
      marca: "",
      modelo: "",
      color: "",
      precio: null,
      mensajeExito: false,
    };
  },
  methods: {
    async insertarVehiculo() {
      const vehi = {
        placa: this.placa,
        marca: this.marca,
        modelo: this.modelo,
        color: this.color,
        precio: this.precio,
      };
      console.log(vehi);
      await insertarVehiculoFacade(vehi);
      this.placa = "";
      this.marca = "";
      this.modelo = "";
      this.color = "";
      this.precio = null;

      this.mensajeExito = true;
      setTimeout(() => {
        this.mensajeExito = false;
      }, 3000);
    },
  },
};
</script>
  
  <style>
.vehiculo-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
}

.vehiculo-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
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