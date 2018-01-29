<template>
  <v-dialog v-model="editModal" max-width="300px">

    <v-card>
        <h3 class="delete__header">The item was successfuly deleted!</h3>

            
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" flat="flat" @click = "close">Close</v-btn>
        </v-card-actions>
      </v-card>
  </v-dialog>
</template>

<style lang="sass" scoped>
    .delete__header
        margin: auto
        text-align: center
        padding: 20px
        font-size: 18px
</style>


<script>
    export default {
      computed: {
          editModal () {
              return this.$store.getters.additionalModal
          }
      },
      methods: {
          close () {
              this.$store.commit('setAdditionalModal', true)
          }
      },
      watch: {
        editModal () {
            setTimeout(() => {
              this.$store.commit('setAdditionalModal', true)
            }, 1500);
        }
      }

    }

</script>


