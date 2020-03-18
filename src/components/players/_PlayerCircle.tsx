import * as React from 'react';
import { PlayerType } from '../../common/types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        imageContainer: {
            borderRadius: '50%',
            height: 100,
            width: 100
        },
        text: {
            textAlign: 'center',
            color: theme.palette.secondary.main,
            fontWeight: 900
        },
        image: {
            height: 100,
            width: 100,
            borderRadius: '50%',

        }
    })
);


function PlayerCircle(player: PlayerType) {
    const classes = useStyles();
    return(
        <Grid item container xs={4} sm={3} md={2} lg={1}  direction="column">
            <div className={classes.imageContainer}>
                <img className={classes.image} src={player.image} alt="Player info"></img>
            </div>
            <Typography className={classes.text} variant={'h6'} color={'secondary'}>{`${player.position}`}</Typography>
            <Typography className={classes.text} variant={'h6'} color={'secondary'}>{`${player.name} ${player.first_surname}`}</Typography>
        </Grid>
    )
}

export default PlayerCircle;