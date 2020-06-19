import Vue from 'vue'
import VueSocketIO from 'vue-socket.io-extended';
import io from 'socket.io-client';


export default ({ store }) => {
  Vue.use(VueSocketIO, io('https://ssocketchat.herokuapp.com'),
  {
  store,
  debug: false,
  actionPrefix: 'SOCKET_',
  mutationPrefix: 'SOCKET_'
  })
  }