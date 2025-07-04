    import React from "react";
import { Parallax } from "react-scroll-parallax";
import myImage from '../assets/parallax-bg.jpg';

const ParallaxImage = () => {
    return (
        <div className="my-20">
            <Parallax speed="{-20}">
                <img src={myImage} alt="Parallax Background" className="w-full h-[400px] object-cover rounded-xl shadow-lg" />
            </Parallax>
        </div>
    )
};

export default ParallaxImage;