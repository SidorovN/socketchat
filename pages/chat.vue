<template>
  <div class="chatroom">
    <div class="chat">
      <Sidebar 
      />

    <Container class="chat__container">

        <ul class="chat__messages-list">
          <Message @loadMessage="scrollBottom"
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
          <btn class="from__btn" :size="'m'" :type="'action'">
            Send
          </btn>          
          </Container>
        </form>
  </div>
</template>

<script scoped>
import { mapMutations } from "vuex";
import { mapState } from "vuex";

import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'
import Container from '@/components/Container';
import Message from '@/components/Message';
import Sidebar from '@/components/Sidebar';
  export default {
  middleware: ["chat"], 
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
    sockets: {
      newMessage() {
        this.scrollBottom()
      }
    },
    created(){
      this.setDefaultUser()
    },
    computed: mapState(["user", "messages","currentUsers"]),
    methods: {
      ...mapMutations(["setDefaultUser"]),
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
        if(!res) this.message=''
      },
      scrollBottom(){
        const messageList = document.querySelector('.chat__messages-list')
        messageList.scrollTo(0,messageList.scrollHeight)
      },
      beforeCreate(){
        if(this.user)this.$router.redirect('/message=noUser')
      }
    }
  }
   
</script>

<style scoped>

.chat__container{
  height: 100%;
  overflow: hidden;
}
.chatroom {
  /* max-width: 1440px; */
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
.chat__messages-list::-webkit-scrollbar {
  width: 0;
}

.form {
  width: 100%;
  background: #121212;
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
  font-size: 18px;
  font-family: inherit;
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
