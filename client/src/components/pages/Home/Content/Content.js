import React from "react";
import image1 from "./image1.jpg";
import "./Content.css";

function Content(props) {
    console.log(props.scrollValue);
    return (
        <div className={props.scrollValue < 80 ? ("contain") : ("contain")} >
            <div className="imageDiv parallax bg1" >
                <img className="image" src={image1} alt="introImage" />
                <div className="imageP">
                    <p id={props.scrollValue > 80 && props.scrollValue < 350 ? ("NYA") : ("noNYA")} className="pTag text-white">Not your average</p>
                    <p id={props.scrollValue > 80 && props.scrollValue < 350 ? ("FSD") : ("noFSD")} className="pTag text-white">Full Stack Developer</p>
                </div>
                <div className="lowerGradient"></div>
            </div>
            <h2>About Me</h2>
            <div className="aboutMePDiv">
                <div className="meModule-border-wrap4">
                    <div className="meModule">
                        <p className="meP">
                            Graduated from UCLA Extension Full Stack Program. Is proficient with languages such as HTML, CSS, Javascript, Java. Acquired
    HTML, CSS, and JavaScript through online technology schools such as Team
    TreeHouse and Codecademy. Is highly experienced with a variety of Adobe systems software including Dream weaver,
    Fireworks, and Photoshop. Has a great amount of experience with Google SketchUp
    and graphic design as a whole. Understands that being both socially interactive and
    open is required in order to maintain a healthy work place environment.
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="accomplish">Accomplishments</h2>
            <div className="accomplishPDiv">
                <div className="meModule-border-wrap2">
                    <div className="meModule">
                        <ul className="meP">
                            <li>
                                Graduated from UCLA Extension Full Stack Program.
                            </li>
                            <br></br>
                            <li>
                                Is Highly experienced with React.js
                            </li>
                            <br></br>
                            <li>
                                Has completed both the Front End Web Development track and Android
Development track at Team Treehouse.
                            </li>
                            <br></br>
                            <li>
                                Displayed leader ship skills by receiving Most
Valuable Player award both Sophomore and Senior year of highschool.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

// <div class="parallax-container">
//       <div class="parallax"><img src="images/parallax1.jpg"></div>
//     </div>
//     <div class="section white">
//       <div class="row container">
//         <h2 class="header">Parallax</h2>
//         <p class="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
//       </div>
//     </div>

export default Content;