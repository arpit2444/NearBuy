import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react';
import './Search.css';
import Sidebar from './Sidebar/Sidebar';
import { Link, useSearchParams } from 'react-router-dom';

export default function Search() {
const [data,setData] = useState([]);
const [orders,setOrders] = useState('');
const [searchParams] = useSearchParams();
const [btnClass,setBtnClass] = useState("searchButtonA")
const [btnClass2,setBtnClass2] = useState("searchBtnButton")


// api call to get the all products data

  const getBarbe=()=>{
    axios.get(`https://herebuy-database-jj32uwrxx-kashif-rezwi.vercel.app/Barbeque?_sort=price&_order=${orders}`, {
      params: {
        address: searchParams.getAll('address')
      }
    }).then((res)=>setData(res.data))
  };

  // sorting functionality starts here

  const highToLow=()=>{
 setOrders('desc');
setBtnClass("searchBtnButton")
setBtnClass2("searchButtonA")
  };
  const LowTOHigh=()=>{
    setOrders('asc');
    setBtnClass2("searchBtnButton")
    setBtnClass('searchButtonA')
  };
  // sorting functionality ends here


  useEffect(()=>{
    
    getBarbe();
  
  },[orders,searchParams])
  return (
    <div style={{backgroundColor:"#E1E9EC"}}>
    {/* <div className='SearchMainDiv'>
      <div className='abcSearch'></div></div>    */}

    <div className='SearchMainDiv'>

        <div className='SearchSidebar'>
<Sidebar/>
        </div>

        <div className='SearchRight'>

        <div className='bcdSearch'>

      <h2>Best Buffet Restaurants Offer In New Delhi</h2>

{/* search buttons */}
      <div className='searchBtn'>
      <button onClick={highToLow} className={btnClass} >Price (High to Low)</button>
      <button className={btnClass2}   onClick={LowTOHigh}>Price (Low to High)</button>
      </div>
          </div>
          

        <div className='SearchProductBody'>
          
{/* products maping starts here */}

          {data.length>0 && data.map((el)=>{
            return <Link to={`/product/${el.id}`}> <div key={el.id}>
              <img src={el.imageUrl} alt="" />
              <h3>{el.title} <br/><span>{el.location}</span></h3>
              <p><span>DEALS</span>{el.type} from ₹ {el.price}</p>
            </div></Link>
          })}
        </div></div>
    </div>
    </div>
  )
}
