
import './App.css';
import Counter from './counter/Counter';
import Flag from './flag/Flag';
import Greeting from './greeting/Greeting';
import TodoList from './todoList/TodoList';
import UserList from './userProfile/UserList';
import UserProfile from './userProfile/UserProfile';


function App() {

   const onCallback = (count)=>{
     console.log('Data from Child: ', count)
   }


  return (
    <div className="App">
      {/* <Counter counterName ="Counter Component" onCountChange = {onCallback} ></Counter> */}
      {/* <Flag></Flag> */}
      {/* <Greeting greet="Hello " name="Sumit"></Greeting> */}
      {/* <TodoList></TodoList> */}
      {/* <UserProfile></UserProfile> */}
      <UserList></UserList>
    </div>
  );
}

export default App;
