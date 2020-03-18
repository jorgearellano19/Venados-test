import React from 'react'
import { GameCalendar } from '../../common/types';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import logo from "../../assets/VENlogo.png";
import TeamInfo from "./_TeamInfo";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
        },
        monthContainer: {
            backgroundColor: '#929492',
            color: theme.palette.primary.main
        },
        gameContainer: {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.primary.main,
            height: 100
        },
        logo: {
            height: 70,
            width: 70
        },
        score: {
            textAlign: 'center'
        }
    })
);

type CalendarProps = {
    games: Map<string, GameCalendar>;
}
function Calendar(props: CalendarProps) {
    const classes = useStyles();
    return (
        <Grid container>
            {Array.from(props.games).map((item, index) => (
                <Grid item container xs={12} direction="column" key={index} className={classes.container}>
                    <Grid item className={classes.monthContainer}>
                        <Typography variant={'h5'}>{item[0].toUpperCase()}</Typography>
                    </Grid>
                    {(item[1] as unknown as Array<GameCalendar>).map((game: GameCalendar, index: number) => (
                        <Grid key={index} item container className={classes.gameContainer} alignItems="center" justify="space-evenly">
                            <Grid item container xs={3} sm={2} md={1} lg={1} direction="column">
                                <Typography variant={'h3'}>{game.day}</Typography>
                                <Typography variant={'h3'}>{game.weekDay}</Typography>
                            </Grid>
                            {game.local ?
                                <React.Fragment>
                                    <TeamInfo name="Venados FC" logo={logo}></TeamInfo>
                                    <Grid item xs sm md lg>
                                        <Typography className={classes.score} variant={'h2'}>{game.home_score} - {game.away_score}</Typography> 
                                    </Grid>
                                    <TeamInfo name={game.opponent} logo={game.opponent_image}></TeamInfo>
                                </React.Fragment>
                                : 
                                <React.Fragment>
                                    <TeamInfo name={game.opponent} logo={game.opponent_image}></TeamInfo>
                                    <Grid item xs sm md lg>
                                        <Typography className={classes.score} variant={'h2'}>{game.home_score} - {game.away_score}</Typography> 
                                    </Grid>
                                    <TeamInfo name="Venados FC" logo={logo}></TeamInfo>
                                </React.Fragment>
                            }
                        </Grid>
                    ))}
                </Grid>
            ))}
        </Grid>
    )
}

export default Calendar;