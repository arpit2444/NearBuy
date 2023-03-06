
// Eat out section-2 in catregory page

export const EatOutP2 = ({less,onSet}) => {
    return <div className="eatOut2">
        <p>Are you in the mood for an exquisite dinner with your significant other, 
            or lunch with your family? Or are you looking for a chill spot to kick it with 
            your gang? Whatever it is, we have got you covered! We have a list of top places 
            to eat out and have fun with your loved ones. </p>
        <p>With a large number of places to eat out in your city, it becomes hard choosing which one to go to. We make it 
            easier for you by providing you with a list of places. Our list includes many fast food chains including KFC, 
            Pizza Hut, Domino’s Pizza; a host of pubs and nightclubs across the country, 
            5 Star restaurants, bar-be-que and microbreweries.</p>
        <p>Get amazing deals and offers at top fast-food restaurants in the city including KFC, Pizza Hut, 
            Domino’s Pizza, Mad Over Donuts, Dunkin’ Donuts and more. Chill with your friends and have a 
            great time while saving big!</p>
        <p>If you are someone with a never-ending appetite, we have a collection of restaurants offering 
            buffet meals for you to eat your heart content. The collection includes some of the best buffet 
            restaurants in the country including Barbeque Nation, Sigree Global Grill, Mainland China, 
            Pirates of Grill, AB’s Absolute Barbecue, The Barbeque Company, Onesta among many others! </p>
        <p>We have got your partying scenes sorted with exciting deals and discounts at 
            top pubs and nightclubs in the country for you to chill with your friends 
            accompanied by drinks and sumptuous food. Dance to the tunes of music and 
            have a good time with your friends.</p>
        <p>We also have a collection of 5 Star Restaurants if an elegant spread is what you have 
            in mind. Enjoy a buffet meal at top 5 star restaurants in the country with our list 
            of best restaurants and get exciting deals. Enjoy 1+1, 2+1, and 3+1 on buffets 
            at top 5 Star Restaurants in your city!</p>
            <button onClick={()=>onSet(!less)}>View less</button>
    </div>
}