<template>
  <div class="chatroom">
    <div class="chat">
    <aside :class="['sidebar', {sidebar_opened : showSidebar}]">
      <button class="sidebar__toggler" @click="toggleSidebar">
        +
      </button>
    </aside>

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
  export default {
    components: {
      btn: Button,
      Container,
      Input,
      Message
    },
    data () {
      return {
        showSidebar: false,
        messages:[ {
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
    methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar
      }
    }
  }
</script>

<style>


.sidebar {
  flex-basis: 0;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  background:#1f1f1f;
  transition: .5s ease-in-out;
}

.sidebar_opened{
  flex-basis: 300px;
  box-shadow: 0 -5px 3px 5px rgb(25, 25, 25);
}
.sidebar__toggler {
  color: white;
  font-size: 32px;
  background-color: inherit;
  outline: none;
  border: none;
  position: absolute;
  top:0;
  right:-40px;
  height: 40px;
  width:40px;
}
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
