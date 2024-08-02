
import './App.css';
import Counter from './counter/Counter';
import Flag from './flag/Flag';

function App() {

   const onCallback = (count)=>{
     console.log('Data from Child: ', count)
   }


  return (
    <div className="App">
      {/* <Counter counterName ="Counter Component" onCountChange = {onCallback} ></Counter> */}
      <Flag></Flag>
    </div>
  );
}

export default App;
