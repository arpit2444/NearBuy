import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./SingleProduct.css";


export default function SingleProduct() {
  const [ddata, setDdata] = useState({});
  const [count, setCount] = useState(1);
  const navigate = useNavigate();

  const getProduct = () => {
    axios.get(`https://herebuy-database-jj32uwrxx-kashif-rezwi.vercel.app/Barbeque?id=${id}`).then((res) => {
      setDdata(res.data[0]);
    });
  };

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    getProduct();
  }, [count]);
  return (
    <div className="singleProCOntain">
    
              {/* left part of the singleProduct page starts here */}
         <div>
            <img src={ddata.imageUrl} alt="product image" />
          <span className="singTItle">   {ddata.title} </span> <br />
          <span className="singshortloc">{ddata.location}</span><br />
          <span className="singlongloc"><span>
          Address: </span>{ddata.longAddress}</span><br />
          <span className="singcont"><span> Contact: </span>{ddata.phoneNO}</span>
          </div>

          {/* right part of the singleProduct page starts here */}
        <div className="singtwo">
              <span className="singtype">
                {ddata.type}</span><br />

            
                <span className="singprice"> Rs. {ddata.price} / per head</span><br /><br className="br1" />
                <span className="singprice2">  Price: {ddata.price * count}</span> 

         <div className="singbtn1div">
              <button className="singbtn1"  disabled={count == 1} onClick={() => setCount(count - 1)} >-</button>
                
                  <button className="singbtn1"
                 
                  onClick={() => setCount(count + 1)}>
                  +
                </button></div>
         

           <br /><br className="br2" />
              
              
            
           
          
            <button className="singfinalbtn" onClick={() => navigate("/Checkout")} >
              Buy Now </button>
              </div>
    </div>
  );
}
