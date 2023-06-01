const state = {
  tasks: {
    id1: {
      name: "shave beard",
      completed: false,
      dueDate: "07/01/2024",
      dueTime: "7pm",
    },
    id2: {
      name: "eat fruits",
      completed: false,
      dueDate: "11/05/2025",
      dueTime: "midnait",
    },
    id3: {
      name: "drink water",
      completed: false,
      dueDate: "20/11/2026",
      dueTime: "07:16",
    },
  },
};

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates);
  },
  deleteTask(state, id) {
    delete state.tasks[id];
  },
};

const actions = {
  updateTask({ commit }, payload) {
    commit("updateTask", payload);
  },
  deleteTask({ commit }, id) {
    commit("deleteTask", id);
  },
};

const getters = {
  tasks: (state) => {
    return state.tasks;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
