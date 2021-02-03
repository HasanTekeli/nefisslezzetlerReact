import React from "react";
import PhotoCard from "./PhotoCard";

const PhotoCardList = ({ photos }) => {
    const photosArray = photos.map((photo,i) => {
        return <PhotoCard
            key={photos[i].title}
            title={photos[i].title}
            src={photos[i].src}
            tur={photos[i].tur}
            />
    })
    return (
        <div className={"mb6"}>
            {photosArray}
        </div>
    );
}

export default PhotoCardList;