export const state = () => ({
  name: '',
  room: ''
});

export const actions = {
  setUser(state,user) {    
    state.name = user.name,
    state.room = user.room     
  },
};

export const getters = {
  getUser(state) {
    return state;
  },
};