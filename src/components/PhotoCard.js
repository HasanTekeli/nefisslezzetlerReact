import React from "react";

const PhotoCard = ({ title, src }) => {
    return (
        <div className={"dib br3 pa3 ma2 grow bw2"}>
            <img alt={title} key={title} src={src} style={{maxWidth: "300px"}}/>
            <p>{title}</p>
        </div>
    )
}

export default PhotoCard;