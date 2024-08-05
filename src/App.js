
import { useState } from 'react';
import './App.css';
import ContextExample from './context/ContextExample';
import Counter from './counter/Counter';
import Flag from './flag/Flag';
import FormikExample from './Formik/FormikExample';
import FormExample from './Forms/FormExample';
import Greeting from './greeting/Greeting';
import ImageCarousel from './ImageCarousel/ImageCarousel';
import TodoList from './todoList/TodoList';
import UseEffectExample from './UseEffect/UseEffectExample';
import UserList from './userProfile/UserList';
import UserProfile from './userProfile/UserProfile';


function App() {

  const [name, setName] = useState("Rohit")

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
      {/* <UserList></UserList> */}
      {/* <FormExample></FormExample> */}
      {/* <FormikExample></FormikExample> */}
      {/* <ImageCarousel></ImageCarousel> */}
      {/* <ContextExample></ContextExample> */}
      <UseEffectExample name={name}></UseEffectExample>
      <button onClick={()=>setName(name + Math.random()*10)}>Change name prop</button>
    </div>
  );  
} 

export default App;
