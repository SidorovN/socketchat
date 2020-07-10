<template>
 <button :class="['button', `button_size_${size}`, `button_type_${type}`]" 
    @click="$emit('btn-click')">
   <slot>

   </slot>
 </button>
</template>

<script>
  export default {
    props: {
      size: String,
      type: String,
    }
    
  }
</script>

<style scoped>
.button_size_s {
  font-size: 14px;
  padding: 6px;
}
.button_size_m {  
  font-size: 18px;
  padding: 16px 0;
}
.button_type_action{  
  background: #03DAC5;
}
.button_type_danger{  
  background: #CF6679;
}
.button_type_invite{  
  background: #BB86FC;
}


.button {
  font-family: inherit;
  font-weight: bold;
  border: none;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14);
  border-radius: 28px;
}
</style>