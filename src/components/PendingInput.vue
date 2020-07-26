<template>
    <v-text-field dense filled placeholder="new pending"
    prepend-inner-icon="fas fa-plus"
    @keyup.enter="createNewPending"
    v-model="new_pending"
    >                    
    </v-text-field>
</template>

<script>
export default {

    data(){
        return {
            new_pending : ''
        }
    },

    methods : {
        createNewPending(){
            this.$emit('create-new-pending', {
                title : this.new_pending,
                description : '',
                children : []
            })
            this.new_pending = ''
        }
    }
}
</script>

<style>

</style>