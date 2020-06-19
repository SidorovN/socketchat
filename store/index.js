export const state = () => ({
  user: {},
  messages: [],
  currentUsers: []
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  clearData(state) {
    state.user = {}
    state.messages = []
  },
  addMessage(state, message) {
    state.messages.push(message)
  },
  updateUsers(state, users) {
    state.currentUsers=users
  },
  // addCurrentUsers(state, user) {
  //   state.currentUsers.push(user)
  // },
  setCurrentUsers(state, users) {    
    users.forEach(user => {
        state.currentUsers.push(user)    
    });
  },
  removeCurrentUser(state, data) {
    state.currentUsers.filter(user => user.id == data.id);
    console.log(state.currentUsers)
  },
}

export const actions = {
  SOCKET_newMessage({ commit }, data) {
      commit("addMessage", data)
  },
  SOCKET_addUser({ commit }, data) {
      commit("addCurrentUsers", data)
  },
  SOCKET_setUsers({ commit }, data) {    
      commit("setCurrentUsers", data)
  }  ,
  SOCKET_removeUser({ commit }, data) {  
      commit("removeCurrentUser", data)
  },
  SOCKET_updateUsers({ commit }, data) {  
      commit("updateUsers", data)
  }

}
