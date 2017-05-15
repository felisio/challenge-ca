<template>
  <div class="hello">

    <div class="toolsbar stackable two column ui grid container"> 
      <div class="column">
        <button class="ui green button">Novo carro</button>
      </div>
      <div class="column">
      </div>
    </div>

    <table-list :tHeadList="tHeads" :list="vehicleList.length">
      <tr v-for="(item, index) in vehicleList" >
        <td class="center aligned" > <input type="checkbox"> </td>
        <td>{{ item.placa }}</td>
        <td>{{ item.modelo }}</td>
        <td>{{ item.marca }}</td>
        <td> <a v-if="item.imagem" :href="item.imagem" target="_blank">Imagem</a> <span v-else>Sem Foto</span>  </td>
        <td>{{ item.combustivel }}</td>
        <td>{{ item.valor }}</td>
      </tr>
    </table-list>
  </div>
</template>

<script>
import axios from 'axios'
import { pathUri } from '@/config'
import { TableList } from 'shared/Layout'

export default {
  name: 'vehicle-list',
  data () {
    return {
      tHeads: [ 'Placa', 'Modelo', 'Marca', 'Foto', 'Combustivel', 'Valor' ],
      vehicleList: []
    }
  },
  mounted() {
    this.getVehicles()
  },
  methods: {
    getVehicles() {
      axios.get(`${pathUri}db1`)
      .then((resp) => {
        if(resp.status === 200) {
          this.vehicleList = resp.data
        }
      })
      .catch((error) => {
        console.log(error);
      });
    }
  },
  components: {
    TableList
  }
}
</script>


<style lang="stylus" scoped>
  .toolsbar.ui.grid
    padding: 2rem 0 2rem 0
  .ui.green.button
    padding: 1rem 2.5rem
</style>
