import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
    const [ddata,setDdata] = useState({});
    const [count,setCount] = useState(1)

const getProduct=()=>{
     axios.get( `http://localhost:8080/Barbeque?id=${id}`).then((res)=>{setDdata(res.data[0])})
}

    const {id} = useParams() 
    console.log(id)
    useEffect(()=>{
        getProduct()
    },[count])
  return (
    <div>
   <h1>{ddata.title}</h1>
   <h3>{ddata.location}</h3>
   
   <h1>{ddata.price}</h1>
   <button  onClick={()=>setCount(count+1)} style={{backgroundColor:"pink"}}>plus</button> <br />
   <br />
   <button disabled={count==1} onClick={()=>setCount(count-1)} style={{backgroundColor:"pink"}}>minus</button>
   <h4>{ddata.longAddress}</h4>
   <h4>{ddata.phoneNO}</h4>
   
<h1>{count}</h1>
<h1>{ddata.price*count}</h1>
    </div>
  )
}
