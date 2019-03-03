import React, { Component } from "react";
import Title from "../../Title/Title.js";
import Content from "./Content/Content.js";
import "./Home.css";

class Home extends Component {

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
            <div className="homeDiv">
                <Title
                scrollValue={this.state.currentScrollHeight}
                />
                <Content
                scrollValue={this.state.currentScrollHeight}
                />
            </div>
        );
    }
};

export default Home;