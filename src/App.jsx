import './App.css';
import { MemoFooter } from './components/Footer';
import { Main } from './components/Main';
import { MemoHeader } from './components/Header';
import { useTodos } from './hooks/useTodos';



function App() {


  const { todos, addToList, deleteOneTodo, updTodoStatus, deleteList } = useTodos()

  return (
    <div className="App">
      <MemoHeader addToList={addToList} />

      <Main todos={todos} deleteList={deleteList} deleteOneTodo={deleteOneTodo} updTodoStatus={updTodoStatus} />

      <MemoFooter />
    </div>
  );
}

export default App;
