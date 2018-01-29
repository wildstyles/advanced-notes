<template>
    <div class="white elevation-2 test">
        <v-toolbar flat dense class="secondary panel-body" dark>
            <v-toolbar-title>My {{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <div class="add-btn"><slot name="action"/></div>
        </v-toolbar>

        <div class="pl-2 pr-2 pt-2 pb-2">
            <slot>
                no slot content defined
            </slot>
        </div>

    </div>
</template>

<script>
  export default {
    props: [
      'title'
    ]
  }
</script>

<style lang="sass" scoped>
    .panel-body
        border-radius: 5px 5px 2px 2px
    .add-btn
        right: 5px
        position: relative
    .test
        border-radius: 0 0 5px 5px
</style>
