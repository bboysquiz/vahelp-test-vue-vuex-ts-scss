import { createStore } from 'vuex';

export default createStore({
  state: {
    posts: [],
    users: [],
    comments: [],
    currentTab: 'Posts',
    newUserComment: '',
    currentUser: null,
  },
  mutations: {
  },
  actions: {
  },
});