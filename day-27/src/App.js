import './App.css';
import DisplayTodo from './components/DisplayTodo';
import GetTodo from './components/GetTodo';

function App() {
  return (
    <div className="App">
      <GetTodo/>
      <DisplayTodo/>
    </div>
  );
}

export default App;
