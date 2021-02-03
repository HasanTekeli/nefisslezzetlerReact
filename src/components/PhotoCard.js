import React from "react";

const PhotoCard = ({ title, src, tur }) => {
    return (
        <div >
            <div>
            <img alt={title} key={title} src={src} tur={tur} style={{maxWidth: "100px"}}/>
            <p>{title}</p>
            </div>
        </div>
    )
}

export default PhotoCard;