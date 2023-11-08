import React from 'react';
import {render} from "react-dom";
// import PopCard from "./lib/PopCard/PopCard";
// import HoloCard from "./lib/HoloCard/HoloCard";
import {HoloCard, PopCard} from "./lib";
const App = () => (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        {/*<TextInput label="Email Address" placeholder="name@example.com"/>*/}
        {/*<PopCard height={300} weight={100}/>*/}
        <HoloCard
            height={300}
            width={300}
            radius={30}
            imageSrc="https://brev.al/developer_character.png"
            imageShineSrc="https://res.cloudinary.com/simey/image/upload/Dev/PokemonCards/illusion.webp"
        />
    </div>);

render(<App/>, document.getElementById("root"));