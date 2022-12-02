import url from './misc'
import { useState, useEffect } from "react";

function Devsnest() {
let [image,setImage]=useState(null);
  useEffect(()=>{
    fetch(url).then(result=>result.json()).then(result=>{
      if(result.status ==='success'){
        setImage(result.message);
      }
    })
  },[])
  return <div className="cnt">
    <img src={image}/>
  </div>
}

export default Devsnest
