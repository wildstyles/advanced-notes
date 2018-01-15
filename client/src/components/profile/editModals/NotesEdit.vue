<template>
  <v-dialog v-model="noteEdit" max-width="500px">

    <v-btn accent slot="activator" fab class="green accent-2" small light v-if="!note" left>
      <v-icon>add</v-icon>
    </v-btn>

    <v-btn accent slot="activator" class="cyan accent-2" light v-else>
      Edit
    </v-btn>

    <v-card>
      <v-card-title v-if="!note">
        Create a new Note
      </v-card-title>
      <v-card-title v-else>
        Update created Note
      </v-card-title>
      <v-card-text>

        <v-text-field label="Title" v-model="newNote.title" type="text"></v-text-field>

        <v-text-field label="Body" v-model="newNote.body" type="text"></v-text-field>

      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" flat @click.stop="noteEdit=false">Close</v-btn>

        <v-btn color="primary" flat @click.stop="create" v-if="!note">Create</v-btn>

        <v-btn color="primary" flat @click.stop="update" v-else>Update</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>


<script>
import NotesService from '@/services/NotesService'
export default {
  props: ['note'],
  data() {
    return {
      noteEdit: false,
      newNote: {
        title: null,
        body: null
      }
    }
  },
  methods: {
    async create() {
      const note = (await NotesService.createNote(this.newNote)).data
      this.$store.dispatch('addNote', note)
      this.noteEdit = false
    },
    async update() {
      const qoute = (await NotesService.updateQoute(this.newQoute)).data
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
