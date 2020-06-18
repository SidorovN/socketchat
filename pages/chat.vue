<template>
  <div class="chatroom">
    <div class="chat">
      <!-- <Sidebar 
      :users="getUsers"
      :room="404"
      /> -->

    <Container class="chat__container">

        <ul class="chat__messages-list">
          <Message 
          v-for="m in messages"
          :key="messages.indexOf(m)"
          :owner="setOwner(m)"
          :name="m.name"
          >{{m.text}}</Message>
        </ul>

    </Container>
    </div>
          <form class="form" @submit.prevent="sendMessage">
            <Container class="form__container">
          <input class="from__input" v-model="message"/>
          <btn class="from__btn">
            Send
          </btn>          
          </Container>
        </form>
  </div>
</template>

<script scoped>
import { mapState } from "vuex";

import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Container from '@/components/Container';
import Message from '@/components/Message';
import Sidebar from '@/components/Sidebar';
  export default {
    mounted() {
      console.log(this.messages,this.user)
    },
    components: {
      btn: Button,
      Container,
      Input,
      Message,
      Sidebar
    },
    data () {
      return {
        message: ''
      }
    },
    
    computed: mapState(["user", "messages"]),
    methods: {
      sendMessage() {
        this.$socket.client.emit("sendMessage", {
          id: this.user.id,
          text: this.message
        },this.clearField)
        
      },
      setOwner(message) {
        if (message.name == 'admin') return         
        if (message.id == this.user.id) return 'user'
        return 'bot'
      },
      clearField(res){
        console.log('удоли')
        if(!res) this.message=''
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
  display: block;
  width: 100%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  padding: 0 24px;
  color: rgba(255, 255, 255, 0.87);
  outline: none;
}

.from__btn {
  width: 100px;
}

</style>
