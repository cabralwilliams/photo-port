import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers';
//import photo from "../../assets/small/commercial/0.jpg";
import PhotoList from "../PhotoList";

function Gallery(props) {
    const currentCategory = {
        name: "commercial",
        description:
        "Photos of grocery stores, food trucks, and other commercial projects",
    };
    return(
        <section>
            <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.description}</p>
            <PhotoList category={currentCategory.name} />
        </section>
    );
}

export default Gallery;