<template>
  <TreeDefaultLeaf v-if="isShown" :row-data="rowData" :default-order="defaultOrder" :depth="depth" />
</template>

<script>
  import { TreeDefaultLeaf } from 'vue-tree-table-component'

  export default {
    name: 'SearchLeaf',
    components: {TreeDefaultLeaf},
    props: {
      rowData: {
        type: Object,
        default: () => { return {} }
      },
      defaultOrder: {
        type: Array,
        default: () => { return [] }
      },
      depth: {
        type: Number,
        default: 0
      },
      eventHub: {
        type: Object,
        default: () => { return {} }
      }
    },
    computed: {
      uuid: function(){
        return this.rowData.uuid
      }
    },
    data: function(){
      return {
        isShown: this.getIsShownDefault()
      }
    },
    created: function() {
      this.eventHub.$on('search-display-event', this.handleOpenEvent)
      this.eventHub.$on('search-reset', this.handleSearchResetEvent)
      this.eventHub.$on('search-hide-all', this.hide)
      this.eventHub.$on('search-hide-event', this.handleHideEvent)
    },
    beforeDestroy: function(){
      this.eventHub.$off('search-display-event', this.handleOpenEvent)
      this.eventHub.$off('search-reset', this.handleSearchResetEvent)
      this.eventHub.$off('search-hide-all', this.hide)
      this.eventHub.$off('search-hide-event', this.handleHideEvent)
    },
    methods: {
      handleOpenEvent(path){
        const uuid = path[0]
        if( uuid !== this.uuid ){ return }
        this.isShown = true
      },
      handleSearchResetEvent(){
        this.isShown = this.getIsShownDefault()
      },
      handleHideEvent(uuid){
        if( uuid !== this.uuid ){ return }
        this.hide()
      },
      hide(){
        this.isShown = false
      },
      getIsShownDefault(){
        return true
      }
    }
  }
</script>

<style scoped>

</style>