import React from "react";

let currDate = new Date(2020, 5, 2, 16);
currDate = currDate.getHours();
let greeting = "";
const cssStyle = {};

if (currDate > 1 && currDate < 12) {
    greeting = "Good Morning";
    cssStyle.color = "aqua";
} else if (currDate >= 12 && currDate < 20) {
    greeting = "Good Afternoon";
    cssStyle.color = "green";
} else if (currDate >= 12 && currDate < 24) {
    greeting = "Good Night";
    cssStyle.color = "red";
}
const Good = () => {

    return (
        <h1>Hello Jayshri <span style={cssStyle}>{greeting}</span></h1>
    )
}
export default Good;

