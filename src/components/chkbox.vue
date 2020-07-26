<template>
<div @click="toggle">
   
    <div class="checkbox" :class="checkboxSelected">

    </div>
</div>
</template>

<script>
export default {
    name : "tadoo-checkbox",
    data(){
        return {
            selected : false
        }
    },

    computed :{
        checkboxSelected(){
            if(this.selected){
                return 'selected'
            }
            return 'not-selected'
        }
    },

    mounted(){
    },

    methods : {
        toggle(){
            this.selected = !this.selected
            this.$emit('checkbox-toggle',this.selected)
        }
    }
}
</script>

<style lang="scss" scoped>
:root{

    input{
        display: none;
    }

    .checkbox{
        width: 26px;
        height: 26px;
        position: relative;
        border-radius: 50%;
        transition : all linear 0.2s;



    }

    .not-selected{
        border : 2px solid $primary

    }

    .selected {
            border : 2px solid #ccc;
            background-color : #ccc;

            &:after{
                content : "";
                position : absolute;
                width : 8px;
                height: 16px;
                border-right: 3px solid white;
                border-bottom: 3px solid white;
                transform : rotate(45deg);
                left : 7px;
                bottom : 5px;
            }
    }


}

</style>