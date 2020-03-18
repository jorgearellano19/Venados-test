import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import logo from "../../assets/VENlogo.png";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import  moment from 'moment';
import 'moment/locale/es';
import games from "../../services/games";
import {GameType, GameCalendar} from "../../common/types";
import { weekDays } from "../../common/dictionaries";
import Calendar from './_Calendar';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 500
        },
        logo: {
            height: 200,
            width: 200
        },
        filterButtons: {
            border: '1px solid gray',
            height: 50,
            textAlign: 'center'
        },
        logoContainer: {
            textAlign: 'center'
        }
    })
);

const gamesModified = ((games as any) as Array<GameType>);
moment.locale('es');
function Home() {
    const classes = useStyles();
    const [games, setGames] = React.useState(new Map());
    useEffect(() => {
        setGames(formatGames());
    }, []);

    const formatGames = () => {
        const map = new Map();
       gamesModified.forEach((item) => {
            const date = moment(item.datetime);
            const month = date.format("MMMM");
            const weekDay = date.day();
            const newObject: GameCalendar = {
                ...item,
                day: date.get('date'),
                weekDay: (weekDays as any)[date.day()]
            }
            const collection = map.get(month);
            if (!collection) {
                map.set(month, [newObject]);
            } else {
                collection.push(newObject);
            }
        });
        return map;
    };
    return (
        <Grid container direction='column' justify="center" alignContent="center">
            <Grid item xs={12} className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="logo"></img>
            </Grid>
            <Grid item container xs={12}>
                <Grid item xs={6} className={classes.filterButtons}>
                    <Typography variant={'h6'}>Copa MX</Typography>
                </Grid>
                <Grid item xs={6} className={classes.filterButtons}>
                    <Typography variant={'h6'}>Ascenso MX</Typography>
                </Grid>
            </Grid>
            <Calendar games={games}></Calendar>

        </Grid>
    )
}

export default Home;