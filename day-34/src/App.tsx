import React from 'react'
import './App.css'
import {useDispatch, useSelector} from "react-redux";
import {reducerType} from "./reducers";
import {useState} from "react";

function App() {
  const notes = useSelector((state: reducerType) => state.notes);
  const dispatch = useDispatch();
  const [input,setInput] = useState<string>("");
  return (
    <div className="App">
      <div className="input">
        <input type="text" value={input} onChange= {(e)=>{setInput(e.target.value);}}/>
        <button>Add</button>
      </div>
      <div className="notes">
    {notes.map((note:string,index:number)=>(<li key={index}><h3>{note}</h3></li>))}
      </div>
    </div>
  );
};

export default App
