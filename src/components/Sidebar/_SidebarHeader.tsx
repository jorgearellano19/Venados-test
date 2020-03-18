import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import logo from "../../assets/VENlogo.png";
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        root: {
            backgroundColor: '#6AA761',
            height: 200
        },
        logo: {
            height:100,
            weight: 100
        },
        logoContainer: {
            paddingTop: 30,
            marginRight:10
        }

    })
)

function SidebarHeader () {
    const classes = useStyles();
    return(
        <div className={classes.root}>
            <div className={classes.logoContainer}>
                <img alt="logo" className={classes.logo} src={logo}></img>
            </div>
            <div>
                <Typography color={'primary'} variant={'h5'}>Jorge Arturo Arellano del Aguila</Typography>
                <Typography color={'primary'} variant={'h5'}>Dacodes Employee - React Developer</Typography>
            </div>
        </div>
    )
}

export default SidebarHeader;