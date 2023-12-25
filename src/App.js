import logo from './logo.svg';
import './App.css';
import {Provider} from 'react-redux';
import {store} from './App/Store/Store'
import TodoList from './Components/TodoList';
import AddTodo from './Components/AddTodo';
function App() {
  return (
    <Provider store={store}>
      <div className='min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-xl'>
        <AddTodo></AddTodo>
        <TodoList></TodoList>
      </div>
    </Provider>
  );
}

export default App;
