<template>
    <aside :class="['sidebar', {sidebar_opened : showSidebar}]">
      <button class="sidebar__toggler" @click="toggleSidebar">
        +
      </button>
      <div class="sidebar__content">
        <nav class="sidebar__nav">
          <nuxt-link to='/' class="sidebar__link" @click="logoutUser"> < = </nuxt-link>
          <h2 class="sidebar__title">Chat room {{room}}</h2>
        </nav>
        <p class="sidebar__subtitle">Users list</p>
        <ul 
        :class="['sidebar__users', {sidebar__users_opened : showSidebar}]">
          <li
          v-for="u in users"
          :key="u.id"
          :class="['sidebar__user', {sidebar__user_active : u.active}]"
          >{{u.name}}</li>
        </ul>
      </div>
    </aside>
</template>

<script>
  export default {
    data() {
      return {        
        showSidebar: false,
      }
    },
    methods: {
      toggleSidebar() {
        this.showSidebar = !this.showSidebar
      },      
      logoutUser() {
        console.log('logoutUser')
      }
    },
    props: {
      users: Array,
      room: Number
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

.sidebar__nav {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.sidebar__link {
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
  overflow: hidden;
}


.sidebar__subtitle {
  margin-bottom: 18px;
  font-size: 16px;
}
.sidebar__users {
  padding: 0;
  width: 300px;
}

.sidebar__user {
  font-size: 14px;
}


.sidebar__user_active {
  color: green
}
/* 
.sidebar__users_opened {
  width: auto;
} */
</style>