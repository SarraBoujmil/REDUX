
import './App.css';
import AddTodo from './Components/AddTodo';
import Todos from './redux/constants/Todos';

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <AddTodo/>
      <Todos></Todos>
    </div>
  );
}

export default App;
