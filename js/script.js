
class TasksApp extends React.Component {
  render() {
    return (
      <>
        <TaskItems />
        <TaskCreator />
      </>
    )
  }
}

class TaskCreator extends React.Component {
  render() {
    return (
      <div id="task-container">
        <textarea id="task" name="task" placeholder="I need to...">
        </textarea>
      </div>
    )
  }
}
class TaskItems extends React.Component {
  render() {
    return (
      <div id="sidebar">
        <h1>Task List</h1>
        <p>Add tasks to your list by typing to the right and press-ing enter. You may then view pending tasks below.</p>

        <ul id="task-list">
        </ul>
      </div>
    )
  }
}

class TaskListItem extends React.Component {
  render() {
    return (
      <li></li>
    )
  }
}

ReactDOM.render(
  <TasksApp />,
  document.getElementById('wrapper')
)
