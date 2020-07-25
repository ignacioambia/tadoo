<template>
<div class="pending-container">
    <hr style="background-color : #ccc;">
    <div class="d-flex align-self-center justify-space-between ma-1">
        <div class="d-flex">
            <div class="mr-2">
                <chkbox class="" @checkbox-toggle="togglePending"></chkbox>
            </div>

            <div class="pending" :class="pendingCrossedClass">
                <div >
                    <slot ></slot>
                </div>  
                
            </div>
        </div>


        <div >
            <span class="mr-2" style="color : #A8A8A8 "><i class="fas fa-list-ul"></i></span>
            <span style="color : #428DFF;font-size: 14px;">Convert to list</span>
        </div>
      
  </div>
  <div>
      Esta sección está de más
  </div>
</div>
  
</template>

<script>
import chkbox from './chkbox'
export default {
    components : {chkbox},

    data(){
        return {
            crossed : false
        }
    },

    methods : {
        togglePending(value){
            // console.log('Toggling pending : ' + value)
            this.crossed = value
        }
    },

    computed : {

        pendingCrossedClass(){
            if(this.crossed){
                return 'crossed'
            }
            return ''
        }
    }


}
</script>

<style scoped lang="scss">


hr{
    height: 1px;
    background-color: rgb(211, 211, 211)!important;
    border:none;
}

.pending{
    transition :  0.3s;
}

.crossed{
    text-decoration: line-through;
    color : #ccc
}

.pending-container{
    background-color: #F8F9F9;
}


</style>