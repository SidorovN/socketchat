<template>
  <input type="text" class="input" @input="$emit('inp-change',model)" v-model="model">
</template>

<script>
  export default {
    data() {
      return {
        model:''
      }
    }
  }
</script>

<style scoped>
.input {
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  padding: 0 24px;
  color: rgba(255, 255, 255, 0.87);
  outline: none;
}
</style>