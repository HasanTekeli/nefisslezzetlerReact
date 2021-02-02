import React from "react";
import {photos} from "./PhotosDev";

class Filtre extends React.Component {
    filteredPhotos = photos.filter(photo => photo.type === this.props.type);
    photosArray = this.filteredPhotos.map((photo, i) => (<li key={photo.title}>{photo.title}</li>));
    render() {
        return (
        <div>
            <h2>{this.props.type}</h2>
            <ul>
                {this.photosArray}
            </ul>
        </div>
        )
    }
}

export default Filtre;