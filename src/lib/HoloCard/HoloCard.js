import React, {useEffect, useState} from 'react';
import style from './HoloCard.module.css'; // Make sure you link the correct CSS file path

const HoloCard = ({
                      imageSrc,
                      imageShineSrc,
                      width,
                      height,
                      hyp = 0.8,
                      o = 0.4,
                      radius = 16
                  }) => {

    const [cardStyle, setCardStyle] = useState({});

    useEffect(
        () => {
            setCardStyle(
                {
                    '--width': width,
                    '--height': height,
                    '--shine': `url(${imageShineSrc})`,
                    '--posx': `50%`,
                    '--posy': `50%`,
                    '--hyp': hyp,
                    '--o': o,
                    '--radius': `${radius}px`,
                    'transform': `rotateY(0deg) rotateX(0deg)`
                }
            )
        }
        , [width, height, imageShineSrc, hyp, o, radius]
    )


    // Mettre à jour les positions posX et posY basées sur la position du curseur de la souris
    const handleMouseMove = (e) => {


        const {left, top, width, height} = e.target.getBoundingClientRect();
        const posX = ((e.clientX - left) / width) * 100;
        const posY = ((e.clientY - top) / height) * 100;
        // console.log(posX, posY);

        // Calculer la rotation basée sur la position de la souris
        const rx = ((posY - 50) / 50) * -15; // Réduisez la valeur pour diminuer la déformation
        const ry = ((posX - 50) / 50) * 15; // Réduisez la valeur pour diminuer la déformation
        console.log(rx, ry);

        setCardStyle({
            '--shine': `url(${imageShineSrc})`,
            '--posx': `${posX}%`,
            '--posy': `${posY}%`,
            '--hyp': hyp,
            '--o': o,
            '--radius': `${radius}px`,
            'transform': `rotateY(${ry}deg) rotateX(${rx}deg)`
        });
    };
    const handleMouseLeave = () => {
        setCardStyle({
            '--radius': `${radius}px`,
            transform: 'rotateY(0deg) rotateX(0deg)',
            transition: 'transform 0.5s cubic-bezier(0.34, 3.56, 0.64, 1)'
        });
    };


    return (
        <div className={style.container}>
            <div className={style.card} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}
                 style={{width: width, height: height}}>
                <div className={style.cardFront} style={cardStyle}>
                    <img src={imageSrc} alt="Holo Style"/>
                    <div className={style.cardShinePlusAfterElement}></div>
                </div>
            </div>
        </div>

    );
};

export default HoloCard;
