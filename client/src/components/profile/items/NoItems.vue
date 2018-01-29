<template>
  <div class="no-items__wrapper">
    <h3 class="no-items__header">
        Пока нет ещё записей 
        </h3>

        <div class="no-items__actions" v-if="type !== 'publicDiaries'">
<p class="no-items__description">Чтобы создать запись нажмите на кнопку <b>'Создать'</b></p>
    <edit-modal slot="activator" :item="{ type }" :noItems="noItems"></edit-modal>
        </div>
  </div>
</template>


<script>
    export default {
        props: ['type'],
        data () {
            return {
                noItems: true
            }
        }
    }
</script>

<style lang="sass" scoped>
    .no-items
        &__wrapper
            text-align: center
            padding: 40px 10px 50px
        &__header
            font-size: 20px
        &__description
            color: #757575
            margin-top: 5px
</style>

