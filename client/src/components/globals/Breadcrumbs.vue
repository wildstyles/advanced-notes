<template>
<v-breadcrumbs>
      <v-icon slot="divider">forward</v-icon>
      <v-breadcrumbs-item 
        v-for="(breadcrumb, index) in breadcrumbs" :key="index"
        :disabled="breadcrumb.disabled">
        <router-link :to="breadcrumb.link" tag="li">{{ breadcrumb.title }}</router-link>
      </v-breadcrumbs-item>
    </v-breadcrumbs>
</template>

<script>
    export default { props: ['breadcrumbs'] }
</script>

<style lang="sass" scoped>
    li
        text-transform: capitalize
</style>

