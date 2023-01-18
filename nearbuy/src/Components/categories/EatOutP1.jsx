

export const EatOutP1 = ({less,onSet}) => {
    return <div className="eatOut1">
        <p>Are you in the mood for an exquisite dinner with your significant other, 
            or lunch with your family? Or are you looking for a chill spot to kick it with 
            your gang? Whatever it is, we have got you covered! We have a list of top places 
            to eat out and have...</p>
        <button onClick={()=>onSet(!less)}>View more</button>
    </div>
}