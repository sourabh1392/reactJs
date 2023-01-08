import React,{useState} from "react";

function App(){
  const[counter,SetCounter] = useState(0)
  const[decr, SetDecr] = useState(100)
  return(
    <div>
      {counter}
      <button>  <p onClick={() => SetCounter(counter + 1)}>increase</p> </button>
      {decr}
    <button>   <p onClick={()=>SetDecr(decr-1)}>decrease</p>  </button>  
    
    
    </div>
  )
}
export default App