<template>
  <li :class="['message' , `message_from_${owner || name}`]">
    <div :class="['message__text-content' , `message__text-content_from_${owner || name}`]">
      <span v-if="name!=='admin'" class="message__name">{{name}}</span>
      <p :class="['message__text' , `message__text_from_${owner || name}`]">
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
    },
    created: function () {
          // alert('egx');
        },
  }
</script>

<style scoped>
.message {
  margin: 6px 0;
  padding: 0;
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
  font-size: 16px;
  padding: 12px;
}

.message__text-content_from_user {
  border-radius: 20px 20px 0 20px;
  background: rgba(187, 134, 252, 0.12);
}

.message__text-content_from_bot {
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px 20px 20px 0;
}
.message__text-content_from_admin {
  margin: 0 auto;
  font-size: 12px;
  opacity: .7;
}


</style>