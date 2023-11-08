import React from "react";
import style from "./PopCard.module.css";

const PopCard = ({
                     backgroundImage = "/bg.png",
                     titleImage = "/title.png",
                     hoverImage = "/hover.png",
                     link = "https://brev.al",
                     height = 300,
                     width
                 }) => (<>
    <a href={link} target="_blank" className={style.link} style={{height: height, width: width ?? (height / 1.5)}}>
        <div className={style.popCard} >
            <div className={style.wrapper}>
                <img src={backgroundImage} className={style.coverImage} aria-disabled={true}/>
            </div>
            <img src={titleImage} className={style.title} aria-disabled={true}/>
            <img src={hoverImage} className={style.character} aria-disabled={true}/>
        </div>
    </a>
</>);

export default PopCard;