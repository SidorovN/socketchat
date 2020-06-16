import Vue from 'vue'
import VueSocketIO from 'vue-socket.io-extended';
import io from 'socket.io-client';


export default ({ store }) => {
  Vue.use(VueSocketIO, io('http://localhost:3000'),
  {
  store,
  debug: false,
  actionPrefix: 'SOCKET_',
  mutationPrefix: 'SOCKET_'
  })
  }