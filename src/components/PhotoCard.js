import React from "react";

const PhotoCard = ({ title, src }) => {
    return (
        <div >
            <div>
            <img alt={title} key={title} src={src} style={{maxWidth: "100px"}}/>
            <p>{title}</p>
            </div>
        </div>
    )
}

export default PhotoCard;