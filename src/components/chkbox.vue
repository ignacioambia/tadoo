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
        border : 2px solid #428DFF

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
// :root{
//     position: absolute;
//     label{
//         position : relative
//     }

//     span{
//         width : 26px;
//         height : 26px;
//         margin : 5px;
//         border : 2px solid #428DFF;
//         display: inline-block;
//         border-radius: 50%;
//         transition : all linear 0.3s;

//         &:after{
//             content : "";
//             position: absolute;
//             top: -15px;
//             left: 15px;
//             border-bottom: 3px solid white;
//             border-right: 3px solid white;
//             width: 8px;
//             height: 16px;
//             visibility: hidden;
//             transform : rotate(45deg)

//         }


//     }



//     input {
//         display : none;
//         &:checked ~ span {
//             background-color : #ccc;
//             border-color: #ccc;
//             &:after{
//                 visibility: visible;
//             }

//         }
//     }
// }
</style>