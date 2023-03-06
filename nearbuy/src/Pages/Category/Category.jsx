import { ProductCarousel } from "../../Components/Carousal/ProductCarousel"
import { CategoriesOfCateg } from "../../Components/categories/CategoriesofCateg"
import { DealsWithOffers1 } from "../../Components/categories/DealsWithOffer"
import { DealsWithOffers2 } from "../../Components/categories/DealsWithOffer2"
import { DealsWithOffers3 } from "../../Components/categories/DealsWithOffer3"
import { EatOut } from "../../Components/categories/EatOut"
import { FiveStar } from "../../Components/categories/FiveStar"
import { TopBrands } from "../../Components/categories/TopBrands"
import { Hangout } from "../../Components/Home/Hangouts"
// import { FiveStar, TopBrands } from "../../Components/categories/TopBrands"
import "./Category.css"

// Category page


export const Category = () => {
    return (
        <>
        <CategoriesOfCateg/>
        <TopBrands/>
        <DealsWithOffers1/>
        <DealsWithOffers2/>
        <FiveStar/>
        <DealsWithOffers3/>
        <ProductCarousel/>
        <Hangout/>
        <EatOut/>
        <div className="allOffers">
        <button>VIEW ALL OFFERS</button>
        </div>
        
        </>
    )
}