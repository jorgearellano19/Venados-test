import * as React from 'react';
import { Grid, makeStyles, createStyles, Theme, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({

        logo: {
            height: 70,
            width: 70
        },
    })
);

type TeamInfoProps = {
    logo: string;
    name: string;
}
function TeamInfo(props: TeamInfoProps) {
    const classes = useStyles();
    return (
        <Grid item container xs={3} sm={2} md={1} lg={1}  direction="column">
            <img className={classes.logo} src={props.logo} alt="logo"></img>
            <Typography variant={'h5'}>{props.name}</Typography>
        </Grid>
    )
}

export default TeamInfo;