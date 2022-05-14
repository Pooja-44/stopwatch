
import './App.css';
import React,{useState} from 'react';
import Stopwatch from './components/Stopwatch';

function App() {
  const[time,setTime]=useState({s:0,m:0,h:0})  
  const[interv,setinterv]=useState();
  const[status,setstatus]=useState(0);

  const start=()=>
  {
    run();
    setstatus(1);
   
    setinterv(setInterval(run,60));

  };


var updateds=time.s,updatedm=time.m,updatedh=time.h;

const run=()=>
{
  if(updatedm===60)
  {
    updatedh++;
    updatedm=0;
  }
  if(updateds===60)
  {
    updatedm++;
    updateds=0;
  }
  updateds++;
  return setTime({s:updateds,m:updatedm,h:updatedh});
}


const pause=()=>
  {
    clearInterval(interv);
    
    setstatus(2);

  };
  const reset=()=>
  {
    clearInterval(interv);
    setTime({s:0,m:0,h:0})
    setstatus(0);

  };
  const resume=()=>
  {
    start();

  };

  return (
    <div className="App">
      
     <h1>React Stopwatch</h1>
      <Stopwatch time={time} start={start} status={status} pause={pause} resume={resume} reset={reset}/>  
    </div>
  );
}

export default App;
