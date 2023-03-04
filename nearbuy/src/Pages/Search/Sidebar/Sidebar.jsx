import React, { useEffect } from 'react'
import { useState } from 'react';
import { useSearchParams } from "react-router-dom";
import "./Sidebar.css";


// Main Function

export default function Sidebar() {
const [searchParams, setSearchParams] = useSearchParams();
const initialState = searchParams.getAll("address")
const [address,setAddress] = useState(initialState ||[])

// below function is handling all the changes in checkbox input

const sideHandleChange=(e)=>{
   const newAddress= [...address]
if(newAddress.includes(e.target.value)){
   newAddress.splice(newAddress.indexOf(e.target.value),1)
}
else{
    newAddress.push(e.target.value)
}
setAddress(newAddress)
}



useEffect(()=>{
   const param={
        address
    }
    setSearchParams(param)
},[address])



  return (
    <div className='sideBarMainDiv'>
        <h3>Filter by Loaction</h3>
        <h5>New Delhi</h5>

        <div className='sideInputDiv'> <div>  
        <input type="checkbox"  value="Paschim-Vihar" checked={address.includes("Paschim-Vihar")}  onChange={sideHandleChange}/>
        <label className="sidelabel">Paschim Vihar</label>       </div>
        <span>(2)</span>  </div>

        <div className='sideInputDiv'> <div>  
      <input type="checkbox" value="Rohini-Sector-12" checked={address.includes("Rohini-Sector-12")} onChange={sideHandleChange} />
        <label className="sidelabel">Rohini</label> </div>
              <span>(1)</span>  </div>

     <div className='sideInputDiv'> <div>  
        <input type="checkbox" value="Sector-14-Dwarka"  checked={address.includes("Sector-14-Dwarka")} onChange={sideHandleChange}/>
        <label className="sidelabel">Dwarka</label>  </div>
             <span>(1)</span>  </div>

       <div className='sideInputDiv'> <div>  
        <input type="checkbox" value="Connaught-Place" onChange={sideHandleChange} checked={address.includes("Connaught-Place")} />
        <label className="sidelabel">Connaught Place</label>       </div> 
        <span>(4)</span>  </div>

       <div className='sideInputDiv'> <div>  
        <input type="checkbox" value="Aerocity" onChange={sideHandleChange} checked={address.includes("Aerocity")} />
        <label className="sidelabel">Aerocity</label>      </div>
       <span>(3)</span>  </div>

      
        
      <div className='sideInputDiv'> <div>  
        <input type="checkbox" value="Mahipalpur"  checked={address.includes("Mahipalpur")} onChange={sideHandleChange}/>
        <label className="sidelabel">Mahipalpur</label></div>
       <span>(2)</span>  </div>

      <div className='sideInputDiv'> <div>  
        <input type="checkbox" value="Vasant-Kunj-Sector-C" checked={address.includes("Vasant-Kunj-Sector-C")}  onChange={sideHandleChange}/>
        <label className="sidelabel">Vasant Kunj</label> </div>
      <span>(2)</span>  </div>

      <div className='sideInputDiv'> <div>  
        <input type="checkbox" value="Saket"  checked={address.includes("Saket")} onChange={sideHandleChange}/>
        <label className="sidelabel">Saket</label>       </div>
        <span>(1)</span>  </div>

      <div className='sideInputDiv'>  <div>  
         <input type="checkbox" value="Janakpuri"  checked={address.includes("Janakpuri")} onChange={sideHandleChange}/>
        <label className="sidelabel">Janakpuri</label>  </div>
        <span>(1)</span>  </div>

{/* <span >+ View More</span> */}

    <div className='sideInputDiv'> <div>  
        <input type="checkbox" value="Rajouri-Garden"  checked={address.includes("Rajouri-Garden")} onChange={sideHandleChange}/>
        <label className="sidelabel">Rajouri Garden</label></div>
        <span>(1)</span>  </div>

     <div className='sideInputDiv'>   <div>  
      <input type="checkbox" value="Friends-Colony"  checked={address.includes("Friends-Colony")} onChange={sideHandleChange}/>
        <label className="sidelabel">Friends Colony</label>      </div>
         <span>(1)</span>  </div>

    <div className='sideInputDiv'>  <div>     
     <input type="checkbox" value="Netaji-Subhash-Place" checked={address.includes("Netaji-Subhash-Place")}  onChange={sideHandleChange}/>
        <label className="sidelabel">Netaji Subhash Place</label></div>    
           <span>(1)</span>  </div>

    <div className='sideInputDiv'>  <div>  
       <input type="checkbox" value="Mayur-Vihar-Phase-1" checked={address.includes("Mayur-Vihar-Phase-1")} onChange={sideHandleChange} />
        <label className="sidelabel">Mayur Vihar Phase 1</label> </div>   
           <span>(1)</span>  </div>

    <div className='sideInputDiv'>  <div>  
       <input type="checkbox" value="Vivek-Vihar-Phase-2" checked={address.includes("Vivek-Vihar-Phase-2")}  onChange={sideHandleChange}/>
        <label className="sidelabel">Vivek Vihar Phase 2</label> </div>
          <span>(1)</span>  </div>

    <div className='sideInputDiv'>  <div>  
       <input type="checkbox" value="Lajpat-Nagar-2" checked={address.includes("Lajpat-Nagar-2")}  onChange={sideHandleChange}/>
        <label className="sidelabel">Lajpat Nagar</label> </div>
              <span>(1)</span>  </div>

    <div className='sideInputDiv'>   <div>  
      <input type="checkbox" value="Sahibabad" checked={address.includes("Sahibabad")}  onChange={sideHandleChange}/>
        <label className="sidelabel">Sahibabad</label>  </div>
             <span>(1)</span>  </div>

    


     <div className='sideInputDiv'> <div>  
        <input type="checkbox" value="Jangpura-Extension" checked={address.includes("Jangpura-Extension")} onChange={sideHandleChange} />
        <label className="sidelabel">Jangpura Extension</label>  </div>     <span>(1)</span>  </div>


    </div>
  )
}
