<template>
    <header class="header">
      <Container class="header__container">
        <p class="logo">Chat</p>          
        <nav class="nav">
          <Switcher class="header__switcher">theme</Switcher>
        </nav>
      </Container>
    </header>
</template>

<script>
import Switcher from '@/components/Switcher';
import Container from '@/components/Container';
  export default {
    components: {
      Switcher,
      Container
    }
  }
</script>

<style scoped>
.logo {
  font-size: 36px;
}
.header {
  width:100%;
  padding-top: 24px;
  padding-bottom: 24px;
  background: #121212;;
  box-shadow: 0 3px 30px 3px rgb(68, 68, 68);
}
.header__container {  
  display: flex;
  justify-content: space-between;
  align-items: center;
}

</style>