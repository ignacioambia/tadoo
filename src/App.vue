<template>
  <v-app>
    <v-main >

        <v-container  style="height : 100%"  fluid>
          <v-row style="height : 100%">
            <v-col cols="8" class="grey lighten-5" >

            </v-col>
            <v-col cols="4" class="shadow">
                <pending 
                  @info-changed="saveChanges"
                  v-for="(pending, index) in pendings" 
                  :key="index" :pending="pending" 
                  open list >

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
    pendings : [],
    snackbar :  false
  }),

  methods : {
    saveChanges(){
      localStorage.setItem('tadoo',JSON.stringify(this.pendings))
    }
  },

  mounted(){
    let pendings = JSON.parse(localStorage.getItem('tadoo'))

    //if there are no pendings, we initialize the list with an empty value
    if(pendings){
      this.pendings = JSON.parse(localStorage.getItem('tadoo'))
    }else{
      this.pendings = [{"title":"My pendings","description":"","children":[]}]
    }

    window.onbeforeunload = ()=>{
      this.saveChanges()
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
