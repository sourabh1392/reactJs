
import React,{useState} from "react";

function App(){
  const[counter,SetCounter] = useState(0)
  const[decr, SetDecr] = useState(100)
  return(
    <div class="change">
      <h1 id="one"><i><b>Counter App</b></i></h1>
      <hr/>
      {counter}
      <button><p onClick={()=>SetCounter(counter+1)}>Increment counter</p></button> 
      <button onClick={() => SetCounter(0)}>Reset</button>
      <br/>
      {decr}
      <button><p onClick={()=>SetDecr(decr-1)}>Decrement counter</p></button>
      <button onClick={() => SetDecr(100)}>Reset</button>
      <br/>
     </div>
  )
}
export default App
