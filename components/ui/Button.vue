<template>
 <button class="button">
   <slot>

   </slot>
 </button>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
.button {
  font-family: inherit;
  font-weight: bold;
  font-size: 18px;
  background: #03DAC5;
  border: none;
  padding: 16px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14);
  border-radius: 28px;
}
</style>