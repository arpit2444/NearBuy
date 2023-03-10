import "./CategoriesofCateg.css"
import { Box } from "@chakra-ui/react"
import { Link } from "react-router-dom";


//  categories section on catregory page

export const CategoriesOfCateg = () => {
    return (
        <>
        <Box className="categoriesofCateg">
        <Link to="/product">  
                   <Box className="CategoriesOFcategCard">
                    <img src="./category/categofCateg/categofCateg.png" alt="Error" />
                    <p>Buffet Deals</p>
                    </Box></Link>
                    
                    <Box className="CategoriesOFcategCard">
                    <img src="./category/categofCateg/categofCateg-img2.png" alt="Error" />
                    <p>Buffet Deals</p>
                    </Box>
                    <Box className="CategoriesOFcategCard">
                    <img src="./category/categofCateg/categofCateg-img3.png" alt="Error" />
                    <p>Deals on Nightlife</p>
                    </Box>
                    <Box className="CategoriesOFcategCard">
                    <img src="./category/categofCateg/categofCateg-img4.png" alt="Error" />
                    <p>Salon Deals</p>
                    </Box>
                    <Box className="CategoriesOFcategCard">
                    <img src="./category/categofCateg/categofCateg-img5.png" alt="Error" />
                    <p>Spa Deals</p>
                    </Box>
                </Box>
        </>
    )
}