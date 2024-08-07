
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
import UserCrudWrapper from './UserCrud/UserCrudWrapper';
import TicTacToe from './TicTacToe/TicTacToe';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';


function App() {
  const navigate = useNavigate();
  const [name, setName] = useState("Rohit")

   const onCallback = (count)=>{
     console.log('Data from Child: ', count)
   }


  return (
    <div className="App">
      <div className='header'>App Component</div>
      <div className='container-body'> 
        <div className='sideBar'>
          Sidebar
          <Link to={'/'}>Home</Link>
          <Link to={'/counter-path'}>Counter</Link>
          <Link to={'/users'}>UserCrud</Link>
          <Link to={'/flag'}>Flag</Link>
          <Link to={'/todo-list'}>TodoList</Link>
          <Link to={'/user-profile'}>UserProfile</Link>
          <Link to={'/user-list'}>UserList</Link>
          <Link to={'/form-example'}>FormExample</Link>
          <Link to={'/formik-example'}>FormikExample</Link>
          <Link to={'/image-carousel'}>ImageCarousel</Link>
          <Link to={'/context-example'}>ContextExample</Link>
          <Link to={'/tictactoe'}>TicTacToe</Link>
          <Link to={'/use-effect'}>UseEffectExample</Link>
          {/* <Link to={'/greeting-path'}>Greeting</Link> */}
          <button onClick={()=>{
             navigate("/greeting-path")
          }}>Greeting</button>

        </div>
        <div className='content'>
           
           <Routes>
            <Route path='/' element={<div>Content Div</div>}></Route>
            <Route path='/counter-path' element={<Counter counterName ="Counter Component" onCountChange = {onCallback} ></Counter>}></Route>
            <Route path='/greeting-path' element={<Greeting greet="Hello " name="Sumit"></Greeting>}></Route>
            <Route path='/users/*' element={<UserCrudWrapper></UserCrudWrapper>}></Route>
            <Route path = '/flag' element={<Flag></Flag>}></Route>
            <Route path='/todo-list' element={<TodoList></TodoList>} ></Route>
            <Route path='/user-profile' element={<UserProfile></UserProfile>}></Route>
            <Route path='/user-list' element={<UserList></UserList>}></Route>
            <Route path='/form-example' element={<FormExample></FormExample>}></Route>
            <Route path='/formik-example' element={<FormikExample></FormikExample>} ></Route>
            <Route path='/image-carousel' element={<ImageCarousel></ImageCarousel>}></Route>
            <Route path='/context-example' element={<ContextExample></ContextExample>}></Route>
            <Route path='/tictactoe' element={<TicTacToe></TicTacToe>}></Route>
            <Route path='/use-effect' element={<UseEffectExample name={name}></UseEffectExample>}></Route>
            
            <Route path='*' element={<div>This url is not mapped</div>}></Route>

           </Routes>

           
           
           </div>

      </div>

      <button onClick={()=>setName(name + Math.random()*10)}>Change name prop</button> 

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
      {/* <UseEffectExample name={name}></UseEffectExample>
      <button onClick={()=>setName(name + Math.random()*10)}>Change name prop</button> */}
      {/* <UserCrudWrapper></UserCrudWrapper> */}
      {/* <TicTacToe></TicTacToe> */}
    </div>
  );  
} 

export default App;
