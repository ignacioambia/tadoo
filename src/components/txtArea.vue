<template>

  <div class="txtarea-wrapper" :class="inputFilled"  @click="focusTextArea">

    <div class="ma-2">
        <textarea v-model="textAreaContent"   @input="updateScrollHeight()">
          
      </textarea>
      <label>Comments</label>
    </div>
    
    
  </div>
</template>

<script>
export default {

  data(){
    return {
      textAreaContent : '',
      textAreaFocused : false,
    }
  },

  watch:{
    textAreaContent(){
      console.log(this.textAreaContent)
    }
  },

  props : {
    content :{
      type: String,
      default : ''
    }
  },

  computed : {
    inputFilled(){
      if(this.textAreaContent != ''){
        return 'filled'
      }
      return ''
    }
  },

  methods : {
    focusTextArea(){
      this.textArea.focus()
      this.textAreaFocused = true;
    },

    updateScrollHeight(){
      this.textArea.style.height =""
      this.textArea.style.height  = this.textArea.scrollHeight + 'px'
    },
  },

  mounted(){
    this.textArea = this.$el.getElementsByTagName('textarea')[0]
    this.textAreaContent = this.content
  }
}
</script>

<style scoped lang="scss">
$text-spacing : 0.5em;

.txtarea-wrapper{
  position: relative;
  background-color: #eee;
  width: 100%;
  // padding : $text-spacing;
  padding-top: $text-spacing*3;
  padding-bottom: 0px;
  cursor : text;
  transition:  0.2s;
  border-bottom: 1px solid $gray;
  border-radius: 5px 5px 0px 0px;

  &:hover{
    background-color : #ddd;
  }

  &:focus-within{
    background-color: #eee;

    &:after{
      transform : scaleX(1);
    }
  }

  &.filled > div >label{
    top : $text-spacing;
    font-size: 12px;
  }

  &:after{
    display: block;
    content : '';
    border-bottom: solid 2px $primary;
    transform : scaleX(0);
    transition: transform 250ms ease-in-out;
  }
}


textarea{
  background-color : inherit;
  position: relative;
  caret-color : auto;
  padding : 0em;
  width : 100%;
  border :none;
  overflow: auto;
  outline: none;
  resize:none;
  caret-color: $primary;

  &:focus ~ label{
      color: $primary!important;
      top : $text-spacing;
      left : $text-spacing;
      font-size: 12px;
  }

}

label{
  position : absolute;
  top : $text-spacing*2;
  left: $text-spacing;
  transition: .2s ease-out;
  cursor : text;
  color : $dark-gray;
}



</style>