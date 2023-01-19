import { Route, Routes } from "react-router-dom"
import { Category } from "../../Pages/Category/Category"
import { Home } from "../../Pages/Home/Home"

export const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/category" element={<Category/>}></Route>
            {/* <Route path="" element={}></Route> */}
            {/* <Route path="" element={}></Route> */}
            {/* <Route path="" element={}></Route> */}
            {/* <Route path="" element={}></Route> */}
        </Routes>
    )
}