<template>
    <form class="form" @submit.prevent="submit">
      <label class="form__label">Username
        <Input type="text" @inp-change="saveName" class="form__input"/>
      </label>
      <label class="form__label">Room
        <Input type="text" @inp-change="saveRoom" class="form__input"/>
      </label>
      <btn class="form__btn">Login</btn>
    </form>
</template>

<script>
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
      room: '',
      name: ''
    }
  },
    sockets: {
        connect: function () {
            console.log('socket connected')
        },
    },
    methods: {
    ...mapMutations(["setUser"]),
      saveName(name) {
        this.name = name
      },
      saveRoom(room) {
        this.room = room
      },
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
            console.log(user,'submit')
            this.setUser(user);
            this.$router.push("/chat");
          }
        })
      },
    }

}
</script>

<style scoped>
.form {
  max-width: 500px;
  margin: 50px auto;
  padding: 24px;
  background: #121212;;
}

.form__label {
  font-size: 18px;
}

.form__input {  
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  height: 54px;
}

.form__btn {  
  margin-top: 24px;
  width: 100%;
}


</style>
