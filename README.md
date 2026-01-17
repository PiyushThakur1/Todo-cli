# ToDo CLI

A simple and customizable command-line Todo application built with **Node.js**, using `chalk` for styling and `commander` for commands.

---

## Features

- Add tasks
- List all tasks (color-coded)
- Edit tasks
- Delete individual tasks
- Delete all tasks
- Mark tasks as done
- Stylish output using Chalk
- Data is saved in a local JSON file (`todo.json`)

---

## Tech Stack

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
- ![Chalk](https://img.shields.io/badge/Chalk-4A148C?style=for-the-badge&logo=javascript&logoColor=white)
- ![Commander](https://img.shields.io/badge/Commander.js-FF5722?style=for-the-badge&logo=javascript&logoColor=white)
- ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- ![Visual Studio Code](https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
- ![NPM](https://img.shields.io/badge/NPM-CB3837?style=for-the-badge&logo=npm&logoColor=white)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PiyushThakur1/ToDo---Cli.git
   cd ToDo---Cli

   ```

2. Install Dependencies

```bash
  npm install
```

3. Run the Cli

```bash
 node todo.js
```

4. Add a task

```bash
  node todo.js add "Go to Gym"
```

5. List all tasks

```bash
 node todo.js list
```

6. Edit a task

```bash
  node todo.js edit <task_number> "New task"
```

7. Mark task as done

```bash
 node todo.js done <task_number>
```

8. Delete a task

```bash
 node todo.js delete <task_number>
```

9. Delete all tasks

```bash
 node todo.js deleteAll

```
