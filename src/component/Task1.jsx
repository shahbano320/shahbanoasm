import { useState } from "react";
function Task1(){
  const[message , setMessege] =useState("Hello")
  function changeMassege(){
    if(message ==="Hello"){
    setMessege("welcome to react");
  }else{
    setMessege("Hello");
  }
}
  return(
    <div className="task1-box">

      <h1>{message}</h1>
      <button onClick={changeMassege}>
        change Massege

      </button>
    </div>
  );
}
export default Task1;