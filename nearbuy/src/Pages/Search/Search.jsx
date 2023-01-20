import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import './Search.css';

export default function Search() {
const [data,setData] = useState([]);
const [orders,setOrders] = useState('');

const [btnClass,setBtnClass] = useState("searchButton")
const [btnClass2,setBtnClass2] = useState("searchBtnButton")


  const getBarbe=()=>{
    axios.get(`http://localhost:8080/Barbeque?_sort=price&_order=${orders}`).then((res)=>setData(res.data))
  };

  const highToLow=()=>{
 setOrders('desc');
setBtnClass("searchBtnButton")
setBtnClass2("searchButton")
  };
  const LowTOHigh=()=>{
    setOrders('asc');
    setBtnClass2("searchBtnButton")
    setBtnClass('searchButton')
  };


  useEffect(()=>{
    getBarbe();
  
  },[orders])
  return (
    <div style={{backgroundColor:"#E1E9EC"}}>
    {/* <div className='SearchMainDiv'>
      <div className='abcSearch'></div></div>    */}

    <div className='SearchMainDiv'>

        <div className='SearchSidebar'></div>

        <div className='SearchRight'>

        <div className='bcdSearch'>

      <h2>Best Buffet Restaurants Offer In New Delhi</h2>

      <div className='searchBtn'>
      <button onClick={highToLow} className={btnClass} >Price (High to Low)</button>
      <button className={btnClass2}   onClick={LowTOHigh}>Price (Low to High)</button>
      </div>
          </div>
          

        <div className='SearchProductBody'>
          
          {data.length>0 && data.map((el)=>{
            return <div key={el.id}>
              <img src={el.imageUrl} alt="" />
              <h3>{el.title} <br/><span>{el.location}</span></h3>
              <p><span>DEALS</span>{el.type} from ₹ {el.price}</p>
            </div>
          })}
        </div></div>
    </div>
    </div>
  )
}
