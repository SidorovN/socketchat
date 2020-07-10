<template>
<div class="login">
    <form class="form" @submit.prevent="submit">
      <label class="form__label" v-if="showName">Username
        <input type="text" v-model="name" class="form__input" />
      </label>
      <label class="form__label" v-if="showRoom" >Room
        <input type="text" v-model="room" class="form__input" />
      </label>      
      <btn class="form__btn" :size="'m'" :type="'action'">Login</btn>
    </form>
      <btn class="form__btn" :size="'m'" :type="'invite'" @btn-click="privateRoom" v-if="showPrivate">Create private room</btn>
      <btn class="form__btn" :size="'m'" :type="'danger'" @btn-click="logout" v-if="!showName||!showRoom">Logout</btn>
    
</div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import { mapMutations } from "vuex";
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default {
  
  components: {
    btn: Button,
    Input
  },
  data(){
    return {
      showPrivate: true,
      showName: true,
      showRoom: true,
      room: '',
      name: '',
    }
  },
  mounted(){
      this.name = JSON.parse(window.localStorage.getItem('name'))
      this.room = JSON.parse(window.localStorage.getItem('room'))
  
      this.query = this.$route.query
      if (this.query.invite){
       this.room = this.query.invite
      }
      this.showName = !this.name
      this.showRoom = !this.room
    if(this.name && this.room) this.submit()
  },
    sockets: {
        connect: function () {
        },
    },
    methods: {
    ...mapMutations(["setUser"]),
      submit() {
        const user = {
          name: this.name,
          room: this.room
        };

        this.$socket.client.emit("userJoined", user, data => {
          if (typeof data === "string") {
            console.error(data);
          } else {
            user.id = data.userId;
            this.setUser(user);
            window.localStorage.setItem('name', JSON.stringify(user.name))
            window.localStorage.setItem('room', JSON.stringify(user.room))
            this.$router.push("/chat");
          }
        })
      },
    privateRoom() {
      this.room = uuidv4();
      this.showPrivate = false
      this.showRoom = false
    },
      logout(){        
        window.localStorage.clear()
        this.name = ''
        this.room = ''
        location.reload()
      },
    },

}
</script>

<style scoped>
.login {
  margin: 50px auto;
  padding: 24px;
  background: #121212;
  max-width: 500px;
  box-shadow: 0 3px 30px 3px rgb(68, 68, 68);
}
.form__label {
  font-size: 18px;
}

.form__input {  
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  height: 54px;
  display: block;
  font-size: 18px;
  font-family: inherit;
  width: 100%;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 50px;
  padding: 0 24px;
  color: rgba(255, 255, 255, 0.87);
  outline: none;

}

.form__btn {  
  margin-top: 24px;
  width: 100%;
}


</style>
