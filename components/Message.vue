<template>
  <li :class="['message' , `message_from_${owner}`]">
    <div :class="['message__image' , `message__image_from_${owner}`]"></div>
      <div :class="['message__text-content' , `message__text-content_from_${owner}`]">
        <span v-if="owner!=='admin'" class="message__name">{{name}}</span>
        <p :class="['message__text' , `message__text_from_${owner}`]">
        <slot></slot>
        </p> 
    </div>
  </li>
</template>

<script>
  export default {
    props: {
      owner: String,
      name: String,
    }
  }
</script>

<style scoped>
.message {
  margin: 24px 0;
  padding: 0;
  margin-top: 30px;
  display: flex;
}
.message_from_user{
  align-self: flex-start;
  text-align: left;
}
.message_from_bot{
  flex-direction: row-reverse;
  align-self: flex-end;
  text-align: right;
}
.message__name {
  font-weight: bold;
}

.message__text-content {
  margin: 0 24px;
  border-radius: 35px;
  font-size: 18px;
  padding: 20px;
  color: #282828;
}

.message__text-content_from_user {
  background-color: #F1F0F0;
}

.message__text-content_from_bot {
  background-color: #F9C35B;
}

.message__image {
  width: 70px;
  height: 70px;
}
.message__image_from_user {
  background-image: url(/images/user.png);
}

.message__image_from_bot {
  background-image: url(/images/bot.png);
}


</style>