import React, { Component } from "react";
import Title from "../../Title/Title.js";
import {
    AwesomeButton,
    AwesomeButtonSocial,
} from 'react-awesome-button';
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import "./Contact.css";

class Contact extends Component {

    state = {
        currentScrollHeight: 0
    }

    componentDidMount() {
        window.onscroll = () => {
            this.setState({
                currentScrollHeight: window.scrollY
            });
        }
    }

    render() {
        return (
            <div className="holder">
                <Title
                    scrollValue={this.state.currentScrollHeight}
                />
                <div className={this.state.currentScrollHeight < 80 ? ("container pad") : ("container pad")}>
                    <div className="row">

                        <div className="col-md module-border-wrap1">
                            <div className="module">
                                {/* <p>Follow Me on Linkedin!</p> */}
                                <div className="buttonDiv">
                                    <AwesomeButtonSocial
                                        size="medium"
                                        type="primary"
                                        ripple="true"
                                        cssModule={AwesomeButtonStyles}
                                        type="linkedin"
                                        href="https://www.linkedin.com/in/clint-forster"
                                    >Linkedin</AwesomeButtonSocial>
                                </div>
                            </div>
                        </div>


                        <div className="col-md module-border-wrap2">
                            <div className="module">
                                {/* <p>Take a copy of my résumé!</p> */}
                                <div className="buttonDiv" >
                                    <AwesomeButton
                                        size="medium"
                                        type="primary"
                                        ripple="true"
                                        download="Resume.pdf"
                                        cssModule={AwesomeButtonStyles}
                                    >Resume</AwesomeButton>
                                </div>
                            </div>
                        </div>



                        <div className="col-md module-border-wrap3">
                            <div className="module">
                                {/* <p>Checkout my photography on Instagram!</p> */}
                                <div className="buttonDiv">
                                    <AwesomeButtonSocial
                                        size="medium"
                                        type="primary"
                                        ripple="true"
                                        cssModule={AwesomeButtonStyles}
                                        type="instagram"
                                        href="https://www.instagram.com/clintforster/"
                                    >Instagram</AwesomeButtonSocial>
                                </div>
                            </div>
                        </div>

                        <div className="col-md module-border-wrap4">
                            <div className="module">
                                {/* <p>Feel free to email me with any comments and questions!</p> */}
                                <div className="buttonDiv">
                                    <AwesomeButton
                                        size="medium"
                                        type="primary"
                                        ripple="true"
                                        download="Resume.pdf"
                                        cssModule={AwesomeButtonStyles}
                                    >E-mail</AwesomeButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;