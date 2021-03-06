import React from 'react';
import './About.scss';
import {Fade, Typography, Button} from "@material-ui/core";
import {Link as MaterialLink} from "@material-ui/core";
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme();

theme.typography.h3 = {
    fontFamily: 'Trebuchet MS',
    fontSize: '24px',
    [theme.breakpoints.up('md')]: {
        fontSize: '32px',
    },
    [theme.breakpoints.up('lg')]: {
        fontSize: '44px',
    },
};

theme.typography.body1 = {
    fontFamily: 'Trebuchet MS',
    [theme.breakpoints.up('md')]: {
        fontSize: '16px',
    },
    [theme.breakpoints.down('sm')]: {
    fontSize: '14px',
    }
};

const About: React.FC = (props) => {
    return (
        <ThemeProvider theme={theme}>
            <Fade in={true} timeout={1400} style={{transitionDelay: '1300ms'}}>
                <div className="about-container">
                        <Typography variant="h3" color="inherit" gutterBottom>Hi, my name is Hans Gamboa.</Typography>
                        <Typography align="left" color="inherit" paragraph>I am a Software Engineer based in Los
                            Angeles, CA.
                            I graduated from the <MaterialLink color="inherit" href="https://ucsd.edu/">University of
                                California, San Diego</MaterialLink> with a
                            Bachelors in Computer Science.
                            My skills are focused in web development using React, TypeScript, and Java Spring Boot.
                        </Typography>
                        <Typography align="left" color="inherit" paragraph>
                            Want to know more?
                        </Typography>
                        <Button className="about-button" component='a' href="mailto:hdgamboa@gmail.com"
                                style={{fontFamily: 'Trebuchet MS', border: 'solid', borderColor: '#4EB1BA', color: '#E9E9E9'}}> Send Me a
                            Message </Button>
                </div>
            </Fade>
        </ThemeProvider>
    );
}

export default About
