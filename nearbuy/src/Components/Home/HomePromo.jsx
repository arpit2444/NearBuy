
// import { BackdropExample } from "./KnowMore"
import "./HomePromo.css"

export const HomePromos = () => {
    return (
        <div className="homePromos">
            <h1>Promo Codes For More Savings</h1>
            <div>
               <div className="homePromoCards">
                <img src="https://img4.nbstatic.in/tr:w-700/6299bae13b031b000ba75db4.jpeg" alt="Error" />
                <hr />
                <div>
                    <p>Valid till 31 Dec 2023</p>
                    <button>Know more</button>
                </div>
               </div>
               <div className="homePromoCards">
               <img src="https://img4.nbstatic.in/tr:w-700/6294bbe1b3c621000b366b85.jpeg" alt="Error" />
               <hr />
                <div>
                    <p>Valid till 02 Feb 2023</p>
                    <button>Know more</button>
                </div>
               </div>
               <div className="homePromoCards">
               <img src="https://img4.nbstatic.in/tr:w-700/636039fc22156b000cb5df05.jpeg" alt="Error" />
               <hr />
                <div>
                    <p>Valid till 31 Dec 2023</p>
                    <button>Know more</button>
                </div>
               </div>
            </div>
        </div>
    )
}