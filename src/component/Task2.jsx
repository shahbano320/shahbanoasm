import { useState } from "react";
function Task2(){
const[name ,setName] =useState("")
return(
    <div className="task2-box">

        <h1 className="name">student form</h1>
        <input 
type="text"
value={name}
onChange={(e)=> setName(e.target.value)}
placeholder="Enter your name"
 />
 <h2>Your Name :{name}</h2>


</div>
);
}
export default Task2;