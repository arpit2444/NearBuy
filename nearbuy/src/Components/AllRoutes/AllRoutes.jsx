import { Route, Routes } from "react-router-dom"
import { Home } from "../../Pages/Home/Home"

export const AllRoutes = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            {/* <Route path="" element={}></Route> */}
            {/* <Route path="" element={}></Route> */}
            {/* <Route path="" element={}></Route> */}
            {/* <Route path="" element={}></Route> */}
            {/* <Route path="" element={}></Route> */}
        </Routes>
    )
}