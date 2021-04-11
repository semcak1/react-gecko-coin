import React,{useEffect,useState} from "react";
import "./style.css";
import * as Service from "./api"
import {COINS_LIST} from "./urls"

export default function List() {
  const [data,setData]=useState([])
   useEffect(()=>{ const getList=async()=>{
     const response = await Service.getCoinList(COINS_LIST)
      setData(response)
   }

   getList()
  
  },[])
  return (
    <div>
     <h1>LİST</h1>
    
     
    <div className="">
    
      
     {data.map((item)=><div className="rowAlign">
     <li>{item.symbol}</li>
     <li>{item.name}</li>
     </div>
     
     )}

    </div>
    </div>
  );
}