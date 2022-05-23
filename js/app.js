let id = 0;

const app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [
      {
        id: id++,
        text: "Fare il meeting con il team",
        done: false,
        editMode: false,
      },
      {
        id: id++,
        text: "Chiamare mamma",
        done: false,
        editMode: false,
      },
      {
        id: id++,
        text: "Fare la spesa",
        done: false,
        editMode: false,
      },
      {
        id: id++,
        text: "Partecipare alla lezione",
        done: true,
        editMode: false,
      },
    ],
  },
  computed: {
    uncompletedTodos() {
      return this.todos.filter((todo) => !todo.done);
    },
    completedTodos() {
      return this.todos.filter((todo) => todo.done);
    },
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return;

      this.todos.push({
        id: id++,
        text: this.newTodo.trim(),
        done: false,
        editMode: false,
      });
      this.newTodo = "";
    },
    completeTodo(todo) {
      todo.done = !todo.done;
    },
    editTodo(todo) {
      todo.editMode = !todo.editMode;
    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
    },
  },
});
