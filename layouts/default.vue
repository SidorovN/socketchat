<template>
  <div class="root">
    <my-header/>
    <main class="root__main">
      <nuxt />
    </main>
  </div>
</template>

<script>
import Header from '~/components/Header';

  export default {
    components: {
      'my-header':Header
    }
  }
</script>

<style>

html {
  font-family: 'Jet Brains';
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.root{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #121212;  
  color: rgba(255, 255, 255, 0.87);
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.root__main {
  flex-grow: 2;
}
</style>
