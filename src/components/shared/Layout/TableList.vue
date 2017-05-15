<template>
  <div>
    <table v-show="list > 0"  class="table-list ui celled table selectable" ref="table" >
        <thead >
            <th v-if="setAction" class="center aligned"> <input type="checkbox"> </th>
            <th v-if="listHead.length > 0" v-for="item in listHead">{{ item }}</th>
        </thead>
        <tbody >
            <slot></slot>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Number,
      default: 0
    },
    /*
    * exemplo: [ 'Nome', 'Email' ],
    */
    tHeadList: {
      type: Array,
      default: []
    },
    setAction: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      
    }
  },
  methods: {
    
  },
  computed: {
    listHead() {
      return this.tHeadList.filter( item => ( typeof item === 'string')? true : false)
    }
  }
}
</script>

<style lang="stylus" >
  .table-list.ui.selectable.table
    thead
      th
        background: #f8fafc
        color: #4c6a89
    tbody
      tr
        color: #637d96 !important
        &:hover
          background: #d8e9fb !important
          
</style>
