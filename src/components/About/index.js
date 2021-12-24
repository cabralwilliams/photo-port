import React from "react";
import coverImage from "../../assets/cover/cover-image.jpg";

function About(props) {
    return(
        <section className="my-5">
            <h1 id="about">Who Am I?</h1>
            <img src={coverImage} alt="cover" className="my-2" style={{ width: "100%" }}/>
        </section>
    );
}

export default About;