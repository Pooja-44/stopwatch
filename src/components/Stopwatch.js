// import React, { Component } from "react";
import './Stopwatch.css';


function Stopwatch(props)
    {
    return(
        <div>
            <div className="span">
            <span>{(props.time.h>=10)?props.time.h:"0"+props.time.h}</span>&nbsp;:&nbsp;
            <span>{(props.time.m>=10)?props.time.m:"0"+props.time.m}</span>&nbsp;:&nbsp;
            <span>{(props.time.s>=10)?props.time.s:"0"+props.time.s}</span>
            </div>
            {(props.status===0)?
            <div>
         <button className="start" onClick={props.start}>Start</button> 
         <button className="reset" onClick={props.reset} disabled={true} >Reset</button> 
           </div>:" "
            }

            {(props.status===1)?
            <div>
         <button className="pause"  onClick={props.pause}>Pause</button> 
         <button className="reset" onClick={props.reset}>Reset</button> 
         </div>:" "
            }

{(props.status===2)?
            <div>
         <button className="resume"  onClick={props.resume}>Resume</button> 
         <button className="reset" onClick={props.reset}>Reset</button> 
         </div>:" "
            }

        </div>
        
    
    )
    }

export default Stopwatch;