

export const TodoItem = ({ todo, deleteOneTodo, updTodoStatus, index }) => {

  return (
    <li
      className='list-group-item d-flex justify-content-between'
    >
      <span className={todo.status ? 'text-decoration-line-through' : ''}>{`${index + 1}.  `}{todo.title}</span>
      <div data-actions>
        <button
          type="submit"
          onClick={() => deleteOneTodo(todo.id)}
          className="btn btn-danger mx-2"
        >
          Удалить
        </button>
        <button
          type="submit"
          onClick={() => updTodoStatus(todo.id)}
          className="btn btn-success"
        >
          Done
        </button>
      </div>
    </li>
  )
}