import axios from 'axios';

export default function () {
  const url = 'https://jsonplaceholder.typicode.com/todos/1';

  interface Todo {
    id: number;
    title: string;
    completed: boolean;
  }
  // "interface" allows us to force a structure in our class or object:
  // - what properties it received,
  // - what type of the properties (string, boolean, etc.)
  // - and what methods

  axios.get(url).then((response) => {
    const todo = response.data as Todo;

    logTodo(todo.id, todo.title, todo.completed);
  });

  const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`
      The TODO id is: ${id}
      The TODO title: ${title}
      The TODO status: ${completed}
    `);
  };
}
