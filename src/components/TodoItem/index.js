// Write your code here
import './index.css'

const TodoItem = props => {
  const {initialTodosList, deleteTodo} = props
  const {title, id} = initialTodosList
  const onDelete = () => {
    deleteTodo(id)
  }
  return (
    <li className="card-container">
      <p className="paragraph">{title}</p>
      <button type="button" className="delete-button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
