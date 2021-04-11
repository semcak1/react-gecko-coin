import React,{useEffect,useState} from "react";
import "./style.css";
import List from "./list"


export default function App() {
  const [isShow,setisShow]=useState(false)
  console.log("rendered")
  useEffect(()=>{console.log("effect works")},[])
 
  return (
    <div>
     <h1>Hello StackBlitz!</h1>
    
     
    <button onClick={()=>{
      isShow  ? setisShow(false) : setisShow(true)
      }} className="rowAlign rowDesign">
    
      <p>Start editing to see some magic happen :)</p>
      
     
    </button>
     {isShow &&  <List/>}
    </div>
  );
}
