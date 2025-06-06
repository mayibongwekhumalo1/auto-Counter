

import './App.css'
import CountDown from './CountDown'



function App() {
 const endTime = new Date().getTime() +60000 * 2;
const [timeLeft,setEndTime] = CountDown(endTime);


const minutes = Math.floor(timeLeft / 60000) % 6;
const seconds = Math.floor(timeLeft / 1000) % 60;
 
  return (
    <>
     
     <div className="container">
      <h1>AUTO TIMER</h1>
      <h1>{`${minutes}:${seconds}`}</h1>
      <button onClick={()=>setEndTime(endTime)}>Reset</button>
     </div>


    
      
    </>
  )
}

export default App
