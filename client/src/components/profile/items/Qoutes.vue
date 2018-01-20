<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>

      <panel title="Qoutes">
        
        <edit-modal slot="action" :item="{ type: 'qoutes' }"></edit-modal>

        <div class="qoute-item" v-for="qoute in qoutes" :key="qoute._id">
          <div class="qoute-body">{{ qoute.qoute }}</div>
          <div class="qoute-utility">
            <span class="qoute-time">{{ qoute.date | date}} </span>
            <span class="qoute-author">{{ qoute.author }}</span>
          </div>
          <div class="qoute-btns">
            <edit-modal :item="{ type: 'qoutes', item: qoute }"></edit-modal>
            <v-btn fab dark color="indigo" small v-if="isCreator !== qoute._creatorId">
              <v-icon dark>add</v-icon>
            </v-btn>
            <v-btn color="error" @click="deleteQoute(qoute._id)">Delete</v-btn>
          </div>
        </div>

      </panel>

    </v-flex>
  </v-layout>
</template>




<script>
import QoutesService from '@/services/QoutesService'

    export default {
      methods: {
        async deleteQoute(qouteId) {
          const qoute = (await QoutesService.deleteQoute(qouteId)).data
          // need to delete qoute local
          const qoutes = this.qoutes.filter(qoute => qoute._id !== qouteId)
          this.$store.dispatch('setQoutes', qoutes)
        }
      },
      computed: {
        qoutes() {
          return this.$store.getters.qoutes
        },
        isCreator() {
          return this.$store.getters.user._id
        }
      },
      async mounted() {
        const qoutes = (await QoutesService.getQoutes()).data
        this.$store.dispatch('setQoutes', qoutes)
      }
    }

</script>


<style lang="scss" scoped>

.qoute {
  &-item {
    background-color: #ccc;
    padding: 10px 15px 4px;
    border-radius: 5px;
    margin: 3px -10px;
  }
  &-author {
    float: right;
  }
  &-btns, &-utility {
    display: flex;
    justify-content: space-between;
  }
}

</style>
