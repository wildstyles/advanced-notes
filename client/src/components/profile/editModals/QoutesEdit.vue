<template>
  <v-dialog v-model="qouteEdit" max-width="500px">

    <v-btn accent slot="activator" fab class="green accent-2" small light v-if="!qoute" left>
      <v-icon>add</v-icon>
    </v-btn>

    <v-btn accent slot="activator" class="cyan accent-2" light v-else>
      Edit
    </v-btn>

    <v-card>
      <v-card-title v-if="!qoute">
        Create a new Qoute
      </v-card-title>
      <v-card-title v-else>
        Update created qoute
      </v-card-title>
      <v-card-text>

        <v-text-field label="Author" v-model="newQoute.author" type="text"></v-text-field>

        <v-text-field label="Qoute" v-model="newQoute.qoute" type="text"></v-text-field>

        <v-switch :label="`Public qoute`" v-model="newQoute.public"></v-switch>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="qouteEdit=false">Close</v-btn>

        <v-btn color="primary" flat @click.stop="create" v-if="!qoute">Create</v-btn>

        <v-btn color="primary" flat @click.stop="update" v-else>Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import QoutesService from '@/services/QoutesService'
export default {
  props: ['qoute'],
  data() {
    return {
      qouteEdit: false,
      newQoute: {
        qoute: null,
        author: null,
        public: false
      }
    }
  },
  methods: {
    async create() {
      const qoute = (await QoutesService.createQoute(this.newQoute)).data
      this.$store.dispatch('addQoute', qoute)
      this.qouteEdit = false
    },
    async update() {
      const qoute = (await QoutesService.updateQoute(this.newQoute)).data
      this.$store.dispatch('updateQoute', qoute)
      this.qouteEdit = false
    }
  },
  mounted () {
    if (this.qoute) {
      this.newQoute = this.qoute
    }
  }
}

</script>
