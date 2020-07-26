<template>
<div class="pending-container">
    <hr style="background-color : #ccc;">
    <div class="pending-header" @click="toggleDetails">
        <div class="d-flex align-center">
            <div class="mr-1" style="min-width : 30px;min-height: 30px;">
                <div v-if="!isList"  > 
                    <chkbox   @checkbox-toggle="togglePending"></chkbox>
                </div>
                <div v-else style="font-size : 20px;">
                    <i class="fas fa-list-ul"></i>
                </div>            
            </div>

            
            
            <div class="pending" :class="pendingCrossedClass">
                <div >
                    {{pending.title}}
                </div>  
                
            </div>
        </div>


        <div @click="convertToList" class="convert-to-list-btn noselect" v-show="pendingDetailsOpen && !isList" >
            <span class="icon"><i  class="fas fa-list-ul"></i></span>
            <span style="color : #428DFF;font-size: 14px;">Convert to list</span>
        </div>
      
    </div>
    <div class="pending-details" v-show="pendingDetailsOpen" >
        <div class="list-section mt-5" v-if="isList">
            <pending-input @create-new-pending="pushPending" ></pending-input>

            <pending
                @delete-pending="deletePending(index)"
                v-for="(pending,index) in pending.children" 
                :pending="pending"
                :key="index">
            </pending>
        </div>

        <div style="margin-top : 40px;">
            <text-area class="mb-2" :content="pending.description"></text-area>         
            <div class="d-flex justify-space-between mb-1 mt-1">
                <div class="delete-pending" @click="$emit('delete-pending')">
                    <i class="fas fa-trash"></i>
                </div>
                <div class="text--secondary font-italic">
                    no due date
                </div>
            </div> 
        </div>

    </div>


  <hr style="background-color : #ccc;">
</div>
  
</template>

<script>
import chkbox from './chkbox'
import TextArea from './TextArea'
import PendingInput from './PendingInput'

export default {
    name : 'pending',
    components : {chkbox, TextArea, PendingInput},
    props : {
        pending : Object,
        list : {
            type : Boolean,
            default : false
        },
        open : {
            type : Boolean,
            default : false
        }
    },
    data(){

        return {
            crossed : false,
            pendingDetailsOpen : false,
            isList : false
        }
    },

    methods : {
        togglePending(value){
            this.crossed = value
            if(this.crossed){
                this.pendingDetailsOpen = false
            }
        },

        toggleDetails(){
            this.pendingDetailsOpen = !this.pendingDetailsOpen
        },

        convertToList(){
           this.isList = !this.isList
           console.log(this.isList)
        },

        pushPending(pending){
            this.pending.children.push(pending)
        },

        deletePending(index){
            this.pending.children.splice(index,1)
        }

    },

    computed : {

        pendingCrossedClass(){
            if(this.crossed){
                return 'crossed'
            }
            return ''
        }
    },

    mounted(){
        this.isList = this.list

        console.log('List : ' + this.list)
        this.pendingDetailsOpen = this.open

        console.log(this.pendingDetailsOpen)
        console.log(this.open)
    }


}
</script>

<style scoped lang="scss">
.pending-header{
    display: flex;
    justify-content: space-between;
    padding : 0.5em;
    background-image:linear-gradient(transparent,$gray 300%);
    min-height: 30px;

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
    //background-color: #F8F9F9;
    background-color: white;
}

.delete-pending{
    color : $dark-gray;
    cursor: pointer;
}

</style>