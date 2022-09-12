import React from "react";

const name = "Vaibhav";

const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";
const links = "https://www.thapatechnical.com";

export const Image = () => {
    return (
        <>
            <h1 className="heading" >My name is{name}</h1>
            <div className="img_div">
                <img className="image" src={img1} alt="randomImages" />
                <img className="image" src={img2} alt="randomImages" />
                <a href={links} target="_thapa">
                    <img className="image" src={img3} alt="randomImages" />
                </a>
            </div>
        </>
    )
}
