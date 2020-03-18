import * as React from 'react';
import { StatsType } from '../../common/types';
import { TableRow, TableCell, makeStyles, createStyles, Theme } from '@material-ui/core';
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        row: {
            color: theme.palette.secondary.main
        },
        cell: {
            color: theme.palette.primary.main
        }
    })
);

function TeamRow(team: StatsType ) {
    const classes = useStyles();
    return(
        <TableRow className={classes.row}>
            <TableCell className={classes.cell} >{team.position}</TableCell>
            <TableCell>
                <img src={team.image} alt="team logo"></img>
            </TableCell>
            <TableCell className={classes.cell} >{team.team}</TableCell>
            <TableCell className={classes.cell} >{team.games}</TableCell>
            <TableCell className={classes.cell} >{team.score_diff}</TableCell>
            <TableCell className={classes.cell} >{team.points}</TableCell>
        </TableRow>
    )
}


export default TeamRow;