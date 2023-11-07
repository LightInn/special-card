import React from 'react';
import {render} from "react-dom";
import { PopCard} from "dist";

const App = () => (
    <div style={{width: "100vw", height: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
        {/*<TextInput label="Email Address" placeholder="name@example.com"/>*/}
        <PopCard height={300} weight={150}/>
    </div>);

render(<App/>, document.getElementById("root"));