import React from "react";


// function Card() {
//     return (
//         <div>
//             <p>I am Jayshri Prakash Ghodke.I am from Maharashtra.</p>

//         </div>
//     )
// }

// export default Card;



function Card() {
    return (
        <div className="col-md-12">
            <div className="wetherBg">
                <h1 className="heading">Weather App</h1>


                <div className="d-grid gap-3 col-4 mt-4">
                    <input type="text" className="form-control" />
                    
                    <button className="btn btn-primary" type="button">Search</button>
                </div>


                <div className="col-md-12 text-center mt-5">
                    <div className="shadow rounded wetherResultBox">
                        <img className="weathorIcon"
                            src="https://unsplash.com/s/photos/romantic-weather"></img>

                        <h5 className="weathorCity">Delhi</h5>
                        <h5 className="weathorTemp">18c</h5>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card;