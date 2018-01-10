<template>
    <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="My dictinionary">
       <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items">
            <v-list-tile
              avatar
              ripple
              @click="toggle(index)"
              :key="item.title"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="grey--text text--darken-4">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>

            <div class="icon-wrapper">
<v-icon color="yellow darken-2">border_color</v-icon>
                <v-icon color="grey darken-2">delete</v-icon>
            </div>
                
              </v-list-tile-action>
            </v-list-tile>
            <v-divider v-if="index + 1 < items.length" :key="item.title"></v-divider>
          </template>
        </v-list>
      </v-card>
      </panel>
    </v-flex>
  </v-layout>
</template>


<script>
  export default {
    data () {
      return {
        selected: [2],
        items: [
          { action: '20.10.1018', headline: 'Brunch this weekend?', title: 'Ali Connors', subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { action: '20.10.1018', headline: 'Summer BBQ', title: 'me, Scrott, Jennifer', subtitle: "Wish I could come, but I'm out of town this weekend." },
          { action: '20.10.1018', headline: 'Oui oui', title: 'Sandra Adams', subtitle: "Do you have Paris recommendations? Have you ever been?" },
          { action: '20.10.1018', headline: 'Birthday gift', title: 'Trevor Hansen', subtitle: "Have any ideas about what we should get Heidi for her birthday?" },
          { action: '20.10.1018', headline: 'Recipe to try', title: 'Britta Holt', subtitle: "We should eat this: Grate, Squash, Corn, and tomatillo Tacos." },
        ]
      }
    },

    methods: {
      toggle (index) {
        const i = this.selected.indexOf(index)

        if (i > -1) {
          this.selected.splice(i, 1)
        } else {
          this.selected.push(index)
        }
      }
    }
  }
</script>
