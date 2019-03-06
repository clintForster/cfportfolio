import React, { Component } from "react";
import Title from "../../Title/Title.js";
import Footer from "../../Footer/Footer.js";
import { AwesomeButtonSocial, AwesomeButton } from "react-awesome-button";
import codeRacerGif from "./codeRacerGif.gif";
import AwesomeButtonStyles from "react-awesome-button/src/styles/styles.scss";
import "./Portfolio.css";

class Portfolio extends Component {

    state = {
        currentScrollHeight: 0,
        pageHeight: "12%"
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
            <div className={this.state.currentScrollHeight > 80 ? ("portContainer") : ("portContainer")}>
                <Title
                    scrollValue={this.state.currentScrollHeight}
                    pageHeight={this.state.pageHeight}
                />
                <div className="row topRow">
                    <div className="portButtonDiv">
                        <div className="portModule-border-wrap1">
                            <div className="portModule">
                                <p id="buttonP">
                                    Visit our Github repository to see how me and my team created Code Racer.
                        </p>
                                <div className="portButton">
                                    <AwesomeButtonSocial
                                        target="_blank"
                                        type="github"
                                        // cssModule={AwesomeButtonStyles}
                                        ripple="true"
                                        href="https://github.com/c811k/code-racer"
                                    >Github</AwesomeButtonSocial>
                                    <AwesomeButton
                                        className="CRButton"
                                        type="primary"
                                        href="https://coderacer-app.herokuapp.com/"
                                        // cssModule={AwesomeButtonStyles}
                                    >
                                        Code Racer
                                    </AwesomeButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="gifDiv">
                        <div className="cRDiv">
                            <span className="cRTitle">Code Racer</span>
                        </div>
                        <div className="portModule-border-wrap2">
                            <div className="portGifModule">
                                <img className="gif" src={codeRacerGif} alt="codeRacerGif" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footDiv">
                    <Footer />
                </div>
            </div>
        );
    }
};

export default Portfolio;