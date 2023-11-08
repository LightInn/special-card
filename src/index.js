import React from 'react';
import {render} from "react-dom";
import {HoloCard, PopCard} from './lib';
const App = () => (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>
      <PopCard 
        height={500}
        width={350}
        titleImage="https://brev.al/developer_character_title.png"
        hoverImage="https://brev.al/breval.png"
        backgroundImage="https://brev.al/developer_character.png"
        link="https://brev.al"
      />
        <HoloCard
            height={500}
            width={350}
            radius={30}
            imageSrc="https://brev.al/developer_character.png"
            imageShineSrc="https://res.cloudinary.com/simey/image/upload/Dev/PokemonCards/illusion.webp"
        />
    </div>);

render(<App/>, document.getElementById("root"));