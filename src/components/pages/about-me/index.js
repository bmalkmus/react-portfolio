import React from "react";
import "./style.css";
import profile from "./profilePicture.jpg"
function aboutMe () {
    return (
        <div className="container context">
            <div className = "row">
                <div className = "col-md-12"> 
                    <h1>About Me</h1>
                </div>

            </div>
            <div className="row">
                    <div className="col-md-3 col-sm-12">
                        <img src = {profile} className="d-block m-auto profilePic" alt="profile"/>
                    </div>
                    <div className="col-md-9 col-sm-12">
                        <p>
                            My name is Benjamin Malkmus and I am an aspiring web developer. I’m based out of Bellevue, WA and have lived in the surrounding Seattle area for three years now. I have spent the last 15 years in the hospitality industry. It has given me hands on experience on working with clients to make sure that my services are completed 100% to the client’s expectations.
                        </p>
                        <p>
                            My friends would describe me as someone who always tries to find the positives of every problem given in life. They would also describe me as someone who doesn’t stress out when under pressure and still knows how to find time to have fun with every situation. When not working, you can find me outside by a body of water or watching some type of sport live or on television.
                        </p>
                    </div>
                </div>
        </div>
        
    )
}

export default aboutMe;