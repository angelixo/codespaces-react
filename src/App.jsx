import './App.css';
import {TodoList} from './components/todoList';
import { FakeAPI } from './components/FakeAPI';
import { UserContextComponent } from './components/UserContext';
import {UserReducerComp } from './components/useReducer';

function App() {
  return (
    <div className="App">
      <header className="">
       My App
      </header>
      <TodoList todos={[{msg:"Something"}, {msg:"other"}]} tab={''}/>
      <FakeAPI />
      <UserContextComponent />
      <UserReducerComp />
    </div>
  );
}

export default App;
