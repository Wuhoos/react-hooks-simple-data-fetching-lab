import React, {useEffect, useState} from "react";

function App(){

    const [dogImage, setDogImage] = useState('')

    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((dog) => {
            setDogImage(dog.message)
        })
    }, [])


    if(!dogImage) return <p>Loading...</p>

    return (
        <img src={dogImage} alt="A Random Dog" />
    )

}




export default App;