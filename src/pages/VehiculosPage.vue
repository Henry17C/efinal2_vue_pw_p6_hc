vue <template>
  <h1>Listar Vehiculos</h1>
    <VehiculoLista/>
    <VehiculoVer/>

</template>

<script>

import VehiculoLista from '../components/VehiculoLista.vue';
import VehiculoVer from '../components/VehiculoVer.vue';
export default {

    components: {
        VehiculoLista,
        VehiculoVer
        
      
    }

}
</script>

<style>

</style>