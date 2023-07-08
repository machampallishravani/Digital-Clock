import { useState ,useEffect } from 'react';
import './App.css';

function App() {
  const [date, setDate] = useState(new Date())
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)
  return function cleanup(){ clearInterval(timer) }
  } , []) 
  return (
    <div className="App">
      <h1>Digital Clock</h1>
      <span className='clock'>{date.toLocaleTimeString()}</span>
    </div>
  );
}

export default App;
