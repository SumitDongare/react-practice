
import './App.css';
import Counter from './counter/Counter';
import Flag from './flag/Flag';
import FormikExample from './Formik/FormikExample';
import FormExample from './Forms/FormExample';
import Greeting from './greeting/Greeting';
import ImageCarousel from './ImageCarousel/ImageCarousel';
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
      {/* <UserList></UserList> */}
      {/* <FormExample></FormExample> */}
      {/* <FormikExample></FormikExample> */}
      <ImageCarousel></ImageCarousel>
    </div>
  );
}

export default App;
