const chalk = require("chalk");
const { Command } = require("commander");
const fs = require("fs");
const path = require("path");

const program = new Command();
const todo = path.join(__dirname, "todo.json");


function loadTodos() {
  if (!fs.existsSync(todo)) fs.writeFileSync(todo, "[]");
  const data = fs.readFileSync(todo);
  return JSON.parse(data);
}

function saveTodos(todos) {
  fs.writeFileSync(todo, JSON.stringify(todos, null, 2));
}

program
  .name("todo")
  .description("A simple Todo CLI using Node.js and Commander")
  .version("1.0.0");

program
  .command("add <task>")
  .description("Add a new Task")
  .action((task) => {
    const todos = loadTodos();
    todos.push({ task, done: false });
    saveTodos(todos);
    console.log("Task Added");
  });

program
  .command("done <index>")
  .description("Mark Task as done (1-based indexing)")
  .action((index) => {
    const todos = loadTodos();
    const i = Number(index) - 1;
    if (!todos[i]) {
      return console.log("Task not found!");
    }
    todos[i].done = true;
    saveTodos(todos);
    console.log("Task Marked as Done");
  });


program
  .command("delete <index>")
  .description("Delete a Task")
  .action((index) => {
    const todos = loadTodos();
    const i = Number(index) - 1;
    if (!todos[i]) {
      return console.log("Task not found!");
    }
    todos.splice(i, 1);
    saveTodos(todos);
    console.log("Task Deleted");
  });

program
  .command("deleteAll")
  .description("Delete all Tasks")
  .action(() => {
    let todos = loadTodos();
    todos = [];
    saveTodos(todos);
    console.log("All Tasks Deleted");
  });

program
  .command("edit <index> <newTask>")
  .description("Edit a Task")
  .action((index, newTask) => {
    const todos = loadTodos();
    const i = Number(index) - 1;
    if (!todos[i]) {
      return console.log("Task not found!");
    }
    todos[i].task = newTask;
    saveTodos(todos);
    console.log("Task Updated");
  });

program
  .command("list")
  .description("Show all Tasks")
  .action(() => {
    const todos = loadTodos();
    if (todos.length === 0) {
      return console.log("No Tasks found!");
    }
    todos.forEach((todo, i) => {
      const index = chalk.cyan(`${i + 1}.`);
      const text = todo.done
        ? chalk.green(todo.task)
        : chalk.redBright(todo.task);
      console.log(`${index} ${text}`);
    });
  });

program.parse(process.argv);
