import React from 'react';
import {render} from "react-dom";
import {TextInput, PopCard} from "./lib";

const App = () => (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        {/*<TextInput label="Email Address" placeholder="name@example.com"/>*/}
        <PopCard height={600}/>
    </div>);

render(<App/>, document.getElementById("root"));