// import style from './main.module.css'

import { DeleteAllButton } from "../DeleteAllButton"
import { TodoList } from "../TodoList"


export const Main = ({ todos, deleteOneTodo, updTodoStatus, deleteList }) => {

  if (!todos.length) {
    return <p>Todo List пуст...</p>
  }

  return (
    <main className='mt-3'>
      <TodoList
        todos={todos}
        deleteOneTodo={deleteOneTodo}
        updTodoStatus={updTodoStatus}
      />
      <DeleteAllButton deleteList={deleteList} />
    </main>
  )
}
