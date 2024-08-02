
import './App.css';
import Counter from './counter/Counter';

function App() {

   const onCallback = (count)=>{
     console.log('Data from Child: ', count)
   }
  return (
    <div className="App">
      <Counter counterName ="Counter Component" onCountChange = {onCallback} ></Counter>
    </div>
  );
}

export default App;
