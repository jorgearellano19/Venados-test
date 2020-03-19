import React, { useEffect } from 'react'
import { Grid, Typography } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";
import logo from "../../assets/VENlogo.png";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import moment from 'moment';
import 'moment/locale/es';
import { State } from "../../common/interfaces";
import Calendar from './_Calendar';
import { getData, GamesFilters, filterGames} from '../../store/actions/actions';


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

moment.locale('es')

function Home() {
    const content = (useSelector(state => state) as State);
    const dispatch = useDispatch();
    const classes = useStyles();
    useEffect(() => {
        dispatch(getData('games'));
    }, []);

    const handleFilter = (type: string) => {
        dispatch(filterGames(content.games, type));
    }

    return (
        <Grid container direction='column' justify="center" alignContent="center">
            <Grid item xs={12} className={classes.logoContainer}>
                <img className={classes.logo} src={logo} alt="logo"></img>
            </Grid>
            <Grid item container xs={12}>
                <Grid onClick={e => handleFilter(GamesFilters.SHOW_ALL)} item xs={4} className={classes.filterButtons}>
                    <Typography variant={'h6'}>Mostrar Todos</Typography>
                </Grid>
                <Grid onClick={e => handleFilter(GamesFilters.SHOW_COPA_MX)} item xs={4} className={classes.filterButtons}>
                    <Typography variant={'h6'}>Copa MX</Typography>
                </Grid>
                <Grid onClick={e => handleFilter(GamesFilters.SHOW_ASCENSO_MX)} item xs={4} className={classes.filterButtons}>
                    <Typography variant={'h6'}>Ascenso MX</Typography>
                </Grid>
            </Grid>
            <Calendar games={content.filteredGames ? content.filteredGames : content.games}></Calendar>

        </Grid>
    )
}

export default Home;