<template>
  <v-app>
    <v-main >

        <v-container  style="height : 100%"  fluid>
          <v-row style="height : 100%">
            <v-col cols="8" class="grey lighten-5" >

              <v-btn color="success" @click="saveToLocalStorage">Save</v-btn>

              <v-snackbar v-model="snackbar" timeout="2000">
                <div class="text-center">
                  Information is now saved
                </div>
                
              </v-snackbar>
            </v-col>
            <v-col cols="4" class="shadow">
                <pending :pending="pending" open list >

                </pending>

 
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
    pending : {},
    snackbar :  false
  }),

  methods : {
    saveToLocalStorage(){
      localStorage.setItem('tadoo',JSON.stringify(this.pending))
      this.snackbar = true
      
      
    }
  },

  watch : {
    pending(){
      console.log('Something changed in pending list')
    }
  },

  mounted(){
    this.pending = JSON.parse(localStorage.getItem('tadoo'))
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
