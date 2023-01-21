import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/Books/Action";
import { BookCard } from "./AboutCard";
import { Box } from "@chakra-ui/react";
import { useLocation } from "react-router";
import { useSearchParams } from "react-router-dom";

import "../Style/about.css"
export const BookList = () => {

    const dispatch = useDispatch()

    const books = useSelector((store) => store.books)
    console.log("book", books)
    const [searchParams] = useSearchParams()

    const loacation = useLocation()
    useEffect(() => {
        const order = searchParams.get("order");
        let paramsObject = {


            params: {
                category: searchParams.getAll("category"),
                _sort: order && 'release_year',
                _order: order
            }
        }
        dispatch(getBooks(paramsObject));



    }, [loacation.search])

    return <div>
        <Box className="BookCard">

            <Box className="Book_Card3">

                {books.length > 0 && books.map((el) => {
                    return <BookCard key={el.id}
                        book={el}
                    />
                })}
            </Box>

            <Box className="Book_Card2">

            </Box>


        </Box>

    </div>
}






// module.css

