import style from './main.module.css'

export const Main = ({ todos, deleteOneTodo, deleteList }) => {

  if (!todos.length) {
    return <p>Todo List пуст...</p>
  }

  return (
    <main className='mt-3'>
      <ul className='list-group'>
        {todos.map((todo, index) => {
          return <li className='list-group-item' key={todo.id}>
            {`${index + 1}.  `}
            <span>{todo.title}</span>
            <div data-actions>
              <button
                type="submit"
                onClick={() => deleteOneTodo(todo.id)}
                className="btn btn-danger mx-3"
              >
                Удалить
              </button>
              <button
                type="submit"

                className="btn btn-warning mx-3"
              >
                Изменить
              </button>
            </div>
          </li>
        })}
      </ul >

      <button
        type="submit"
        onClick={deleteList}
        className="btn btn-danger mb-3"
      >
        Удалить все
      </button>
    </main>
  )
}
