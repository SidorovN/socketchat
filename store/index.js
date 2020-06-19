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
  addCurrentUsers(state, user) {
    state.currentUsers.push(user)
  },
  setCurrentUsers(state, users) {    
    users.forEach(user => {
        state.currentUsers.push(user)
    
    });
    console.log(state.currentUsers)
  },
  removeCurrentUsers(state, message) {
    state.currentUsers.push(message)
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
  }
}
