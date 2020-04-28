import React from "react";
import "./style.css";

function Contact() {
    return (
        <div className="container context">
        <div className="row">
            <div className="col-md-12">
                <h1>Contact</h1>
            </div>
        </div>

        <form>
            <div className="form-group" id="subjectName">
                <label for="formname">Name</label>
                <input type="text" className="form-control" id="formname" placeholder="Joe Dirt"/>
            </div>

            <div className="form-group" id="subjectAdd">
                <label for="formemail">Email address</label>
                <input type="email" className="form-control" id="formemail" placeholder="joedirte@hemi.com"/>
            </div>

            <div className="form-group" id="mailBody">
                <label for="formmessage">Message</label>
                <textarea className="form-control" id="formmessage" rows="6"></textarea>
            </div>

        </form>
        <input className="btn btn-primary contact-button" id="submitMail" type="submit" value="Submit"/>
    </div>
    )
}

export default Contact;