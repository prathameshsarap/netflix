import React from "react";
import './index.css';
import Images from './Images';


function Card(props) {
    return (
        <div className="card">
            {/* <img src={props.imgsrc} alt="poster" className="card__img" /> */}
            <div className="card__info">
            <Images imgsrc={props.imgsrg}/> 
                <span className="card__category">{props.title}</span>
                <h3 className="card__title">{props.sname}</h3>
                <a href={props.link} target="_blank" rel="noopener noreferrer">
                    <button type="button">Watch Now</button>
                </a>
            </div>
        </div>
    );
}

//yaha sab index.js se aay props.img props.title aur index ko sab Sdata se aaya map through imgsrc titile link me strore kiya
export default Card;
