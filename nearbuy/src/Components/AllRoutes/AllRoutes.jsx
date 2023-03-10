
import { Route, Routes } from "react-router-dom"
import { Category } from "../../Pages/Category/Category"
import { Home } from "../../Pages/Home/Home"
import Checkout from "../../Pages/Checkout/Checkout";
import Search from "../../Pages/Search/Search";
import SingleProduct from "../../Pages/SIngleProduct/SingleProduct";
export const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/category" element={<Category/>}></Route>
            <Route path="/checkout" element={<Checkout />} />
            
            <Route path="/product" element={<Search/>}></Route>
            <Route path="product/:id" element={<SingleProduct/>}></Route>
            {/* <Route path="" element={}></Route> */}
            {/* <Route path="" element={}></Route> */}
        </Routes>
    )
}

