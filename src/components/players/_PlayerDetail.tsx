import React, { forwardRef } from 'react'
import { Grid, Typography } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import PlayerCircle from './_PlayerCircle';
import { PlayerType } from '../../common/types';
import moment from 'moment';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: '80%',
            width: 300,
            minHeight: 500,
            backgroundColor: theme.palette.background.default,
            overflow: 'auto',
            justifyItems: 'center'
        },
        circleContainer: {
            height: '40%',
            paddingTop: 30,
            backgroundColor: theme.palette.background.paper,
            justifyItems: 'center',
            alignItems: 'center'
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
        },
        playerInfo: {
            height:'60%',
            paddingTop: 10,
            textAlign: 'center'
        }
    })
);

const PlayerDetail = forwardRef((player: PlayerType, ref) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container>
            <Grid className={classes.circleContainer} item container justify="center">
                <Grid item>
                    <Typography color={'primary'} variant={'h3'}>FICHA TÉCNICA</Typography>
                    <Grid item container direction="column">
                        <div className={classes.imageContainer}>
                            <img className={classes.image} src={player.image} alt="Player info"></img>
                        </div>
                        <Typography className={classes.text} variant={'h6'} color={'primary'}>{`${player.name} ${player.first_surname}`}</Typography>
                        <Typography className={classes.text} variant={'h6'} color={'primary'}>{`${player.position}`}</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container justify="center" className={classes.playerInfo}>
                <Grid item container xs={8} direction="column">
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>FECHA DE NACIMIENTO</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>{moment(player.birthdate).format('DD/MM/YYYY')}</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={8} direction="column">
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>LUGAR DE NACIMIENTO</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>{player.birth_place}</Typography>

                    </Grid>
                </Grid>
                <Grid item container xs={8} direction="column">
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>PESO</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>{player.weight} KG</Typography>

                    </Grid>
                </Grid>
                <Grid item container xs={8} direction="column">
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>ALTURA</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>{player.height} M</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={8} direction="column">
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>EQUIPO ANTERIOR</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>{player.last_team}</Typography>
                    </Grid>
                </Grid>
                <Grid item container xs={8} direction="column">
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>NUMERO</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant={'h4'} color={'secondary'}>{player.number}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
});

export default PlayerDetail;