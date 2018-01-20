<template>
  <v-layout column align-center fill-height>

    <panel title="Qoutes" class="qoute-panel">
      <div class="qoute-cart" v-for="qoute in qoutes" :key="qoute._id">
        <div class="qoute-body">
          <div class="qoute-descr">
           {{ qoute.qoute }}
          </div>
          <div class="qoute-author">{{ qoute.author }}</div>
        </div>
        <v-btn fab dark color="indigo">
          <v-icon dark>add</v-icon>
        </v-btn>
      </div>
    </panel>


  </v-layout>
</template>


<script>
import PublicQoutesService from '@/services/PublicQoutesService'
export default {
  data() {
    return {
      qoutes: null
    }
  },
  async mounted () {
    this.qoutes = (await PublicQoutesService.getPublicQoutes()).data
  }
}
</script>



<style lang="scss" scoped>

.qoute {
    &-panel {
      width: 75%
    }
    &-cart {
        height: 150px;
        background-color: #455A64;
        width: 100%;
        color: #fff;
        display: flex;
        padding: 20px;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 7px;
    }
    &-body {
      width: 75%;
    }
    &-descr {
        font-size: 14px;
        color: #ccc;
    }
    &-author {
        text-align: right;
        font-style: italic;
        font-size: 12px;
    }
}

</style>

