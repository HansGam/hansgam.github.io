import {
    AppBar,
    Button,
    Drawer,
    Grid,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Slide
} from "@material-ui/core";
import Toolbar from "@material-ui/core/Toolbar";
import React, {useState} from "react";
import {Link} from "react-router-dom";
import './NavBar.scss';
import {makeStyles} from "@material-ui/core/styles";
import useTheme from "@material-ui/core/styles/useTheme";
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import PortraitOutlinedIcon from '@material-ui/icons/PortraitOutlined';
import {Link as MaterialLink} from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: '#4EB1BA',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    }
}));

export default function NavBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [isMobile, setMobile] = useState(false);

    const handleDrawerToggle = () => {
        setMobile(!isMobile);
    }
    const renderIcon = (label: String) => {
        switch (label) {
            case 'LinkedIn':
                return <LinkedInIcon fontSize='large' color='primary'/>;
            case 'Projects':
                return <GitHubIcon fontSize='large' color='action'/>;
            case 'Contact':
                return <MailOutlineIcon fontSize='large' color='disabled'/>;
            case 'Resume':
                return <PortraitOutlinedIcon fontSize='large' color='inherit'/>;
        }
    }
    const drawer = (
        <div className="drawer">
            <IconButton
                onClick={handleDrawerToggle}
                style={{color: '#E9E9E9', marginBottom: 'auto'}}
            >
                <ChevronRightIcon/>
            </IconButton>
            <List>
                <Divider />
                <ListItem component={Link} to={'/linkedin'}>
                    <Grid container direction="row" alignItems="center" spacing={3}>
                        <Grid item xs={3}>
                            {renderIcon('LinkedIn')}
                        </Grid>
                        <Grid item xs={3}>
                            <ListItemText disableTypography primary={'LinkedIn'} style={{fontSize: '18px', fontFamily: "Trebuchet MS", color: '#E9E9E9'}}/>
                        </Grid>
                    </Grid>
                </ListItem>
                <Divider />
                <ListItem component={Link} to={'/projects'}>
                    <Grid container direction="row" alignItems="center" spacing={3}>
                        <Grid item xs={3}>
                            {renderIcon('Projects')}
                        </Grid>
                        <Grid item xs={3}>
                            <ListItemText disableTypography primary={'Projects'} style={{fontSize: '18px', fontFamily: "Trebuchet MS", color: '#E9E9E9'}}/>
                        </Grid>
                    </Grid>
                </ListItem>
                <Divider />
                <ListItem component={Link} to={'/resume'}>
                    <Grid container direction="row" alignItems="center" spacing={3}>
                        <Grid item xs={3}>
                            {renderIcon('Resume')}
                        </Grid>
                        <Grid item xs={3}>
                            <ListItemText disableTypography primary={'Resume'} style={{fontSize: '18px', fontFamily: "Trebuchet MS", color: '#E9E9E9'}}/>
                        </Grid>
                    </Grid>
                </ListItem>
                <Divider />
                <ListItem component={Link} to={'/contact'}>
                    <Grid container direction="row" alignItems="center" spacing={3}>
                        <Grid item xs={3}>
                            {renderIcon('Contact')}
                        </Grid>
                        <Grid item xs={3}>
                            <ListItemText disableTypography primary={'Contact'} style={{fontSize: '18px', fontFamily: "Trebuchet MS", color: '#E9E9E9'}}/>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </div>
    )


    return (
        <AppBar style={{background: '#4EB1BA'}}>
            <Toolbar>
                <Grid container direction="row" justify="space-between" alignItems="center">
                    <Grid item>
                        <Slide direction="down" timeout={1000} in={true}>
                            <h2 className="h2-blinker">
                                <MaterialLink color="inherit" href="https://HansGam.github.io/"
                                              className="appbar-homelink">
                                    Hans
                                </MaterialLink>
                                &nbsp;>
                                <span className="span-blinker">_</span>
                            </h2>
                        </Slide>
                    </Grid>
                    <Hidden lgUp>
                        <Slide direction="down" timeout={1200} in={true}>
                            <Grid item>
                                <IconButton
                                    onClick={handleDrawerToggle}
                                    style={{color: '#E9E9E9'}}
                                >
                                    <MenuIcon/>
                                </IconButton>
                            </Grid>
                        </Slide>
                        <Drawer
                            variant="temporary"
                            anchor='right'
                            open={isMobile}
                            onClose={handleDrawerToggle}
                            color="inherit"
                            classes={{
                                paper: classes.drawerPaper,
                            }}
                            ModalProps={{
                                keepMounted: true,
                            }}
                            elevation={2}
                        >
                            {drawer}
                        </Drawer>
                    </Hidden>
                    <Hidden mdDown>
                        <Slide direction="down" timeout={1200} in={true}>
                                <Button className='navbar-button' component='a'
                                        href="https://www.linkedin.com/in/hans-gamboa-073808155/" color="inherit"
                                        style={{fontFamily: 'Trebuchet MS', color: '#E9E9E9', fontWeight: 'bold'}}> LinkedIn </Button>
                        </Slide>
                        <Slide direction="down" timeout={1350} in={true}>
                                <Button className='navbar-button' component='a' href="https://github.com/HansGam"
                                        color="inherit"
                                        style={{fontFamily: 'Trebuchet MS', color: '#E9E9E9', fontWeight: 'bold'}}> Projects </Button>
                        </Slide>
                        <Slide direction="down" timeout={1500} in={true}>
                                <Button className='navbar-button' component='a' href="mailto:hdgamboa@gmail.com"
                                        color="inherit"
                                        style={{fontFamily: 'Trebuchet MS', color: '#E9E9E9', fontWeight: 'bold'}}> Contact </Button>
                        </Slide>
                        <Grid item xs={4}/>
                        <Slide direction="down" timeout={1650} in={true}>
                                <Button endIcon className='navbar-button' component={Link} to="/resume" color="inherit"
                                        style={{fontFamily: 'Trebuchet MS', color: '#E9E9E9', fontWeight: 'bold'}}
                                        variant="outlined"> Résumé </Button>
                        </Slide>
                    </Hidden>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}