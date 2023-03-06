import { useState } from "react"
import { EatOutP1 } from "./EatOutP1";
import { EatOutP2 } from "./EatOutP2";
import "./EatOut.css"

// Eat out section in catregory page
 

 export const EatOut = () => {
 
    const [less,setLess] = useState(true);

    return (
        <div className="eatOut">
            <h3>Eat Out</h3>
            {less?<EatOutP1 less={less} onSet={setLess}/>:<EatOutP2 less={less} onSet={setLess}/>}
        </div>
    )
 }