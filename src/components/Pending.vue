<template>
<div class="pending-container">
    <hr style="background-color : #ccc;">
    <div class="pending-header">
        <div class="d-flex align-center">
            <div class="mr-2">
                <chkbox class="" @checkbox-toggle="togglePending"></chkbox>
            </div>

            <div class="pending" :class="pendingCrossedClass">
                <div >
                    <slot ></slot>
                </div>  
                
            </div>
        </div>


        <div class="convert-to-list-btn" >
            <span class="icon"><i  class="fas fa-list-ul"></i></span>
            <span style="color : #428DFF;font-size: 14px;">Convert to list</span>
        </div>
      
  </div>
  <div class="pending-details">
    <div class="d-flex justify-space-between mb-1 mt-1">
        <div>

        </div>
        <div class="text--secondary font-italic">
            no due date
        </div>
    </div>
    
    <txt-area class="mb-2"></txt-area>
  
  </div>


  <hr style="background-color : #ccc;">
</div>
  
</template>

<script>
import chkbox from './chkbox'
import txtArea from './txtArea'

export default {
    components : {chkbox, txtArea},

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
.pending-header{
    display: flex;
    justify-content: space-between;
    padding : 0.5em;
    background-image:linear-gradient(transparent,$gray 300%);

}

.pending-details{
    margin : 0em 0.5em;
}

.convert-to-list-btn{
    color : $primary;
    cursor : pointer;
    .icon{
        color : $gray;
        margin-right : 0.4rem;
    }
}


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