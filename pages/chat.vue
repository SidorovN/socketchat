<template>
  <div class="chatroom">
    <div class="chat">
      <Sidebar 
      :users="getUsers"
      :room="404"
      />

    <Container class="chat__container">

        <ul class="chat__messages-list">
          <Message 
          v-for="m in messages"
          :key="m.id"
          :owner="m.owner"
          :name="m.name"
          >{{m.text}}</Message>
        </ul>

    </Container>
    </div>
          <form class="form">
            <Container class="form__container">
          <Input class="from__input"/>
          <btn class="from__btn">
            Send
          </btn>          
          </Container>
        </form>
  </div>
</template>

<script scoped>

import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Container from '@/components/Container';
import Message from '@/components/Message';
import Sidebar from '@/components/Sidebar';
  export default {
    components: {
      btn: Button,
      Container,
      Input,
      Message,
      Sidebar
    },
    data () {
      return {
        // room: '404',
        messages:
        [ 
          {
            name: 'Ленка',
            owner: 'user',
            id:1,
            text: 'Приветики  '
          },
          {
            name: 'Ленка',
            owner: 'bot',
            id:2,
            text: 'Приветики '
          },
          {
            name: 'Ленка',
            owner: 'user',
            id:3,
            text: 'Приветики '
          },
          {
            name: 'Ленка',
            owner: 'bot',
            id:4,
            text: 'Приветик '
          },      {
            name: 'Ленка',
            owner: 'bot',
            id:5,
            text: 'Приветик '
          },      {
            name: 'Ленка',
            owner: 'bot',
            id:6,
            text: 'Приветик '
          },      
        ]
      }
    },
    computed: {
      getUsers(){
        return [
          {
            name: 'Ленка',
            id: '1',
            active: true
          },
          {
            name: 'Не Ленка',
            id: '2',
            active: false
          },
        ]
      }
    }
  }
</script>

<style>

.chat__container{
  height: 100%;
  overflow: hidden;
}
.chatroom {
  max-width: 1440px;
  margin: 0 auto;
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.chat {
  height: 100%;
  display: flex;
}
.chat__messages-list {
  max-height: calc(100vh - 195px);
  list-style: none;
  padding: 0;
  overflow: auto;
}

.form {
  width: 100%;
  background: #121212;;
  box-shadow: 0 3px 30px 3px rgb(68, 68, 68);
}
.form__container {
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  align-items: stretch;
}
.from__input {
  flex-grow: 1;
  margin-right: 24px;
}
.from__btn {
  width: 100px;
}
</style>
