import React from "react";
import style from "./PopCard.module.css";

const PopCard = ({
                     backgroundImage = "/bg.png",
                     titleImage = "/title.png",
                     hoverImage = "/hover.png",
                     link = "https://brev.al",
                     height = 300,
                     width,
                     alt = "Pop Card"
                 }) => (<>
    <a href={link} target="_blank" rel="noreferrer" className={style.link}
       style={{height: height, width: width ?? (height / 1.5)}} aria-label={alt}>
        <div className={style.popCard}>
            <div className={style.wrapper}>
                <img src={backgroundImage} className={style.coverImage} alt={alt + " background"} width={width}
                     height={height}/>
            </div>
            <img src={titleImage} className={style.title} alt={alt + " title"} width={width} height={height}/>
            <img src={hoverImage} className={style.character} alt={alt + " hover"} width={width} height={height}/>
        </div>
    </a>
</>);

export default PopCard;