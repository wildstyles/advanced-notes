<template>

<v-app>
  <my-header class="header-wrapper"/>
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

<style scoped lang="sass">

  main
    padding: 0 10px

  .header-wrapper
    margin-bottom: 100px

</style>

