import React from "react";
import {products} from "./PhotosDev";
import PhotoCard from "./PhotoCard";

class Filtre extends React.Component {
    filteredPhotos = products.filter(photo => photo.type === this.props.type);
    /*photosArray = this.filteredPhotos.map((photo, i) => (<img key={photo.title} alt={photo.title} src={photo.src}/>));*/
    photosArray = this.filteredPhotos.map((photo, i) => (<PhotoCard key={products[i].title} title={products[i].title} src={products[i].src} tur={products[i].tur}/>))
    render() {
        return (
        <div>
            <h2>{this.props.tur}</h2>
            {this.photosArray}

        </div>
        )
    }
}

export default Filtre;