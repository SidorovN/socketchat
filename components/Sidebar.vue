<template>
    <aside :class="['sidebar', {sidebar_opened : showSidebar}]">
      <button class="sidebar__toggler"  @click="toggleSidebar">
        <div  :class="['sidebar__image', {sidebar__image_opened : showSidebar}]"></div>    
      </button>
      <div class="sidebar__content">
        <nav class="sidebar__nav">
          
      <btn class="sidebar__btn" :size="'s'" :type="'invite'" @btn-click="invite">Invite</btn>
          <h2 class="sidebar__title">{{ 
            +user.room == user.room ? 'Chat room ' + user.room: 'Private room'            
            }}</h2>
        </nav>
        <p class="sidebar__subtitle">Users list</p>
        <ul 
        :class="['sidebar__users', {sidebar__users_opened : showSidebar}]">
          <li
          v-for="u in currentUsers"
          :key="u.id"
          :class="['sidebar__user', {sidebar__user_active : u.id === user.id }]"
          >{{u.name}}</li>
        </ul>      
        
        <nav class="sidebar__nav">  
          <btn @btn-click="logoutUser" :size="'s'" :type="'danger'"> Logout </btn>
          <btn @btn-click="changeRoom" :size="'s'" :type="'invite'"> Change room </btn>
        </nav>
      </div>
    </aside>
</template>

<script>
import { mapState } from "vuex";

import Button from '@/components/ui/Button'
  export default {
    components: {
      btn: Button,
    },
    data() {
      return {        
        showSidebar: false,
      }
    },
    computed: mapState(["user", "messages","currentUsers"]),
    methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar
      },      
      logoutUser() {
        window.localStorage.removeItem('room')
        window.localStorage.removeItem('name')
        window.localStorage.removeItem('id')
        this.$router.push('/')
        this.$socket.client.emit("userLogout",this.user)
      },
      changeRoom() {        
        window.localStorage.removeItem('room')
        this.$socket.client.emit("userLogout",this.user)
        this.$router.push('/')
      },
      invite(){
        navigator.clipboard.writeText(`${location.origin}/?invite=${this.user.room}`)
          .then(() => {
            // Получилось!
          })
          .catch(err => {
            console.log('Something went wrong', err);
          });
      }
    },
  }
</script>

<style scoped>
.sidebar {
  flex-basis: 0;
  flex-shrink: 0;
  height: 100%;
  position: relative;
  background:#1f1f1f;
  transition: .5s ease-in-out;
}

.sidebar_opened{
  padding-left: 300px;
  box-shadow: 0 -5px 3px 5px rgb(25, 25, 25);
}
.sidebar__toggler {
  text-align: center;
  padding: 0;
  color: white;
  font-size: 32px;
  background-color: inherit;
  outline: none;
  border: none;
  position: absolute;
  top:0;
  right:-40px;
  height: 40px;
  width:40px;
}


.sidebar__image {  
  margin: 0 auto;
  width: 24px;
  height: 3px;  
  background-color: #fff;
  position: relative;
}
.sidebar__image::after {
  position:absolute;
  content: '';
  width: 24px;
  height: 3px;
  left:0;
  background-color: #fff;
  top: 8px;  
  transform-origin: left;
  transition: .3s;
}
.sidebar__image::before {
  position:absolute;
  content: '';  
  width: 24px;
  height: 3px;
  left:0;
  background-color: #fff;  
  top: -8px; 
  transform-origin: left;
  transition: .3s;
}
.sidebar__image_opened::before {
    width: 12px;
    transform: rotate(-45deg);
    top: 0;    
    left:1px;
}
.sidebar__image_opened::after {
    width: 12px;
    transform: rotate(45deg);
    top: 0;
    left:1px;
    
}


.sidebar__nav {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sidebar__link {
  font-size: 12px;
  text-decoration: none;
  color: inherit
}
.sidebar__content {
  padding: 0 10px;
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  
  display: flex;
  flex-direction: column;
}


.sidebar__subtitle {
  margin-top: 30px;
  margin-bottom: 18px;
  font-size: 16px;
}
.sidebar__users {
  flex-grow: 1;
  padding: 0;
  overflow-y:auto ;
  width: 300px;
}

.sidebar__user {
  font-size: 14px;
}


.sidebar__user_active {
  color: green
}
</style>