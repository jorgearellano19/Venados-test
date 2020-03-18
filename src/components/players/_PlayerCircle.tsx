import * as React from 'react';
import { PlayerType } from '../../common/types';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            cursor: 'pointer'
        },
        imageContainer: {
            textAlign: 'center',
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

type PlayerCircleProps = {
    player: PlayerType;
    onPlayerClick?: any;
} 

function PlayerCircle(props: PlayerCircleProps) {
    const classes = useStyles();

    const handleClick = () => {
        if(props.onPlayerClick) {
            props.onPlayerClick();
        }
    };
    return(
        <Grid className={classes.root} onClick={handleClick} item container xs={4} sm={4} md={3} lg={2}  direction="column" justify="center">
            <div className={classes.imageContainer}>
                <img className={classes.image} src={props.player.image} alt="Player info"></img>
            </div>
            <Typography className={classes.text} variant={'h6'} color={'secondary'}>{`${props.player.position}`}</Typography>
            <Typography className={classes.text} variant={'h6'} color={'secondary'}>{`${props.player.name} ${props.player.first_surname}`}</Typography>
        </Grid>
    )
}

export default PlayerCircle;