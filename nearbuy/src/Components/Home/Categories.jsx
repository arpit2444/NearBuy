import "./Categories.css"
import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom";

// Categories section on home page

export const Categories = () => {
    return (
        <>
        <Box className="homeCategories">
                   <Link to={'/category'}>
                   <Box className="CategoriesCard">
                    <img src="./HomeImages/categories/homeCategory1.png" alt="Error" />
                    <p>Restaurants Deals</p>
                    </Box>
                   </Link>
                   <Link to="/product"> 
                    <Box className="CategoriesCard">
                    <img src="./HomeImages/categories/homeCategory2.png" alt="Error" />
                    <p>Buffet Deals</p>
                    </Box></Link>
                    <Box className="CategoriesCard">
                    <img src="./HomeImages/categories/homeCategory3.png" alt="Error" />
                    <p>Deals on Nightlife</p>
                    </Box>
                    <Box className="CategoriesCard">
                    <img src="./HomeImages/categories/homeCategory4.png" alt="Error" />
                    <p>Salon Deals</p>
                    </Box>
                    <Box className="CategoriesCard">
                    <img src="./HomeImages/categories/homeCategory5.png" alt="Error" />
                    <p>Spa Deals</p>
                    </Box>
                    <Box className="CategoriesCard">
                    <img src="./HomeImages/categories/homeCategory6.png" alt="Error" />
                    <p>Activities Deals</p>
                    </Box>
                    <Box className="CategoriesCard">
                    <img src="./HomeImages/categories/homeCategory7.png" alt="Error" />
                    <p>Gift Cards</p>
                    </Box>
                    <Box className="CategoriesCard">
                    <img src="./HomeImages/categories/homeCategory8.png" alt="Error" />
                    <p>Health</p>
                    </Box>
                </Box>
        </>
    )
}