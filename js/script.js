const ENTER_KEY_CODE = 13

const taskInput = document.getElementById('task')
const taskList = document.getElementById('task-list')

taskInput.addEventListener("keydown", event => {
  if (event.keyCode === ENTER_KEY_CODE) {
    event.preventDefault()
    addTaskToList()
  }
})

/* Adds a new task item to the list, with the value from the
 * given input.
 *
 * Arguments:
 * taskInput -- the HTMLElement input tag
 */
function addTaskToList() {
  if (taskInput.value)  {

    // Create list parent
    const li = document.createElement('li')
    li.textContent = taskInput.value

    // Create delete button
    const deleteBn = document.createElement('span')
    deleteBn.classList.add("delete")

    li.appendChild(deleteBn)

    // Create check button
    const checkBn = document.createElement('span')
    checkBn.classList.add("check")

    li.appendChild(checkBn)

    addTaskListeners(checkBn, deleteBn)
    taskInput.value = ""
    taskList.appendChild(li)
  }
}

/* Handles check/delete events for the given task.
 *
 * Arguments:
 * taskLi -- the HTMLElement li tag
 */
function addTaskListeners(checkBn, deleteBn) {
  checkBn.addEventListener('click', () => {
    const li = checkBn.parentNode
    li.classList.toggle('done')
  })

  deleteBn.addEventListener('click', () => {
    const li = deleteBn.parentNode
    li.parentNode.removeChild(li)
  })
}
