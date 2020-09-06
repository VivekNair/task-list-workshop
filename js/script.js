
class TasksApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }

    this.handleAddTask = this.handleAddTask.bind(this)
    this.handleDeleteTask = this.handleDeleteTask.bind(this)
    this.handleCheckTask = this.handleCheckTask.bind(this)
  }

  handleAddTask(newTask) {
    const newTaskArray = this.state.tasks.slice()
    newTaskArray.push(newTask)

    this.setState({
      tasks: newTaskArray,
    })
  }

  handleDeleteTask(id) {
    this.setState({
      tasks: this.state.tasks.filter(task => task.id !== id)
    })
  }

  handleCheckTask(id) {
    const newTasks = this.state.tasks.slice()
    const targetTask = newTasks.find(task => task.id === id)

    targetTask.done = !targetTask.done

    this.setState({
      tasks: newTasks
    })
  }

  render() {
    return (
      <>
        <TaskItems
          handleDeleteTask={this.handleDeleteTask}
          handleCheckTask={this.handleCheckTask}
          tasks={this.state.tasks} />

        <TaskCreator addTask={this.handleAddTask} />
      </>
    )
  }
}

class TaskCreator extends React.Component {
  render() {
    return (
      <div id="task-container">
        <textarea id="task" name="task" placeholder="I need to..." onKeyDown={event => {
          if (event.keyCode === 13) {
            event.preventDefault()

            if (!event.target.value) {
              return
            }

            this.props.addTask({
              id: Math.random(),
              content: event.target.value,
              done: false,
            })

            event.target.value = ""
          }
        }}>
        </textarea>
      </div>
    )
  }
}

class TaskItems extends React.Component {
  render() {
    const tasks = this.props.tasks

    return (
      <div id="sidebar">
        <h1>Task List</h1>
        <p>Add tasks to your list by typing to the right and press-ing enter. You may then view pending tasks below.</p>

        <ul id="task-list">
          {tasks.map(task => (
            <TaskListItem
              handleDeleteTask={this.props.handleDeleteTask}
              handleCheckTask={this.props.handleCheckTask}
              task={task} />
          ))}
        </ul>
      </div>
    )
  }
}

class TaskListItem extends React.Component {
  render() {
    const task = this.props.task

    const isTaskDone = this.props.task.done

    let listClass = ""
    if (isTaskDone) {
      listClass = "done"
    }

    return (
      <li className={listClass}>
        {task.content}

        <span className="delete" onClick={() => {
          this.props.handleDeleteTask(task.id)
        }}></span>

        <span className="check" onClick={() => {
          this.props.handleCheckTask(task.id)
        }}></span>
      </li>
    )
  }
}

ReactDOM.render(
  <TasksApp />,
  document.getElementById('wrapper')
)
