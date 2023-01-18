import { DealsWithOffers1 } from "../../Components/categories/DealsWithOffer"
import { DealsWithOffers2 } from "../../Components/categories/DealsWithOffer2"
import { DealsWithOffers3 } from "../../Components/categories/DealsWithOffer3"
import { EatOut } from "../../Components/categories/EatOut"
import { FiveStar } from "../../Components/categories/FiveStar"
import { HotSpots } from "../../Components/categories/Hotspots"
import { PromoCodes } from "../../Components/categories/PromoCodes"
import { TopBrands } from "../../Components/categories/TopBrands"
// import { FiveStar, TopBrands } from "../../Components/categories/TopBrands"
import "./Category.css"


export const Category = () => {
    return (
        <>
        <TopBrands/>
        <DealsWithOffers1/>
        <DealsWithOffers2/>
        <FiveStar/>
        <DealsWithOffers3/>
        <HotSpots/>
        <EatOut/>
        <PromoCodes/>
        <div className="allOffers">
        <button>VIEW ALL OFFERS</button>
        </div>
        
        </>
    )
}