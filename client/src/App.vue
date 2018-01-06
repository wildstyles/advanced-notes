<template>

<v-app>
  <my-header/>
  <main>
    
      <router-view/>
    
  </main>
</v-app>


</template>

<script>
import Header from '@/components/Header'

  export default {
    components: {
      myHeader: Header
    }
  }
</script>

<style scoped lang="scss">



</style>

