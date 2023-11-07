import React from "react";
import "./PopCard.css";

const PopCard = ({
                     backgroundImage = "/bg.png",
                     titleImage = "/title.png",
                     hoverImage = "/hover.png",
                     link = "https://brev.al",
                     height = 300,
                     width
                 }) => (<>
        <a href={link} target="_blank">
            <div className="popCard" style={{height: height, width: width ?? (height / 1.5)}}>
                <div className="wrapper">
                    <img src={backgroundImage} className="cover-image" aria-disabled={true}/>
                </div>
                <img src={titleImage} className="title" aria-disabled={true}/>
                <img src={hoverImage} className="character" aria-disabled={true}/>
            </div>
        </a>
    </>);

export default PopCard;