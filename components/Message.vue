<template>
  <li :class="['message' , `message_from_${owner}`]">
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
.message_from_bot{
  align-self: flex-start;
  text-align: left;
}
.message_from_user{
  flex-direction: row-reverse;
  align-self: flex-end;
  text-align: right;
}
.message__name {
  font-weight: bold;
}

.message__text-content {
  margin: 0 24px;
  font-size: 18px;
  padding: 20px;
}

.message__text-content_from_user {
  border-radius: 20px 20px 0 20px;
  background: rgba(187, 134, 252, 0.12);
}

.message__text-content_from_bot {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px 20px 20px 0;
}


</style>