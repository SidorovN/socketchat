<template>
    <form class="form" @submit.prevent="submit">
      <label class="form__label">Username
        <Input type="text" v-model="name" />
      </label>
      <label class="form__label">Room
        <Input type="text" v-model="room" />
      </label>
      <btn class="form__button">Login</btn>
    </form>
</template>

<script>
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
export default {
  components: {
    btn: Button,
    Input
  },
  data(){
    return{
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
      submit() {
        const user ={
          name: this.name,
          room: this.room
        }

        this.$socket.client.emit("userJoined", user, data => {
          if (typeof data === "string") {
            console.error(data);
          } else {
            user.id = data.userId;
            this.setUser(user);
            this.$router.push("/chat");
          }
        })
        

      }
    }

}
</script>

<style>
.form {
  max-width: 500px;
  margin: 50px auto;
  padding: 24px;
  background: #121212;;
}

.form__label {
  font-size: 18px;
}


.form__button {
  font-family: inherit;
  font-weight: bold;
  font-size: 18px;
  margin-top: 24px;
  width: 100%;
  background: #03DAC5;
  border: none;
  padding: 16px 0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 4px 5px rgba(0, 0, 0, 0.14);
  border-radius: 28px;
}
</style>
