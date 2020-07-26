<template>
  <v-app>
    <v-main >

        <v-container  style="height : 100%"  fluid>
          <v-row style="height : 100%">
            <v-col cols="8" class="grey lighten-5" >
            </v-col>
            <v-col cols="4" class="shadow">

              <v-text-field dense filled placeholder="new pending"
              prepend-inner-icon="fas fa-plus"
              @keyup.enter="enterClicked"
              v-model="new_pending"
              >                    
              </v-text-field>

              <pending v-for="pending in pendings" :key="pending">{{pending}}</pending>

              <txt-area content="Content goes here anything"></txt-area>
              <txt-area></txt-area>

             


  

            </v-col>
          </v-row>

        </v-container>
    </v-main>
  </v-app>
</template>

<script>

import Pending from './components/Pending'
export default {
  name: 'App',

  components: {
    Pending
  },

  data: () => ({
    new_pending : '',
    pendings : ["My pending"]
  }),

  methods : {
    enterClicked(){
      console.log('New pending entered : ' + this.new_pending)
      this.pendings.push(this.new_pending)
      this.new_pending = ''
    }
  }
};
</script>

<style scoped lang="scss">

.container{
  padding : 0px 12px;
}

.shadow{
  box-shadow: -3px 0px 7px rgb(192, 192, 192);

}
</style>
