import { Box, Button, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";

import "../Style/BookCard.css"

import "../Style/BookCard.css"
export const BookCard = ({ book }) => {

    const [data, getData] = useState()

    const [postData, setPostData] = useState([])
    const handleOrderpost = (id) => {

        axios.get(`http://localhost:8000/deals?id=${id}`).then((res) => {
            getData(res.data)
            //   console.log(res.data)
        })

        axios.get(`http://localhost:8000/UserOrder`).then((res) => {
            setPostData(res.data)

        })



    }
    const post = (card) => {


        axios.post("http://localhost:8000/UserOrder",
            card
        )


    }
    const patch = () => {

    }
    for (let i = 0; i < postData.length; i++) {
        if (postData[i].id === data.id) {
            console.log(postData[i].id)
        } else {

        }
    }
    console.log(data.id)
    useEffect(() => {
        // handleOrderpost(book.id)
    }, []);

    return <div>

        <Box >

            <Box className="Book_Card1">

                <Box className="Book_Card_Right_Side">

                    {book.tag2 !== "" && <span className="RedBox">{book.tag2}</span>}
                    <Box>{book.txt_tertiary}</Box>
                    <h3>{book.font_xxxl}</h3>

                    <Box className="cancel">
                        <Text>Free Cancellation</Text>
                    </Box>

                    <Box className="valid">
                        <p className="validText"> valid for :  </p> <p className="validValue">{` ${book.txt_primary}`}  </p>

                        <p className="validText" id="marginAdd"> valid on :  </p> <p className="validValue">{` ${book.txt_primary2}`}  </p>

                        <p className="validText" id="marginAdd"> Timings :  </p> <p className="validValue">{` ${book.txt_primary3}`}  </p>
                    </Box>

                    <Box className="buttonBox">
                        <Button>Menu</Button>

                        <Button>Details</Button>

                    </Box>
                </Box>

                <Box className="Book_Card_Left_Side">

                    <Box className="OfferBox">
                        <span>{book.tag}</span>
                    </Box>

                    <Box className="Cardprice">
                        <Text>₹</Text>      <p className="croosPrice">{book.txt_strike_through}</p>

                        <Text className="bigRupee">₹</Text>
                        <Text className="bigRupee">{book.font_xxxl2}</Text>
                    </Box>
                    <Box>
                        <Button onClick={() => { handleOrderpost(book.id) }}>Add</Button>


                    </Box>
                </Box>
            </Box>


        </Box>




    </div>
}