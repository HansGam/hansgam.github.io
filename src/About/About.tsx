import React from 'react';
import './About.scss';
import {Fade} from "@material-ui/core";


const About: React.FC = (props) => {
    return (
        <Fade in={true} timeout={1400} style={{transitionDelay: '1300ms'}}>
            <div className="about-container">
                <h1>Hey, I'm Hans.</h1>
                <p>I am a Software Engineer based in Los Angeles, CA.
                    I graduated from the <a href="https://ucsd.edu/">University of California, San Diego</a> with a
                    Bachelors in Computer Science.
                    My skills are focused in web development using React, TypeScript, and Java Spring Boot.
                </p>
            </div>
        </Fade>
    );
}

export default About
