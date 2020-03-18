import * as React from 'react';
import { TableHead, TableRow, TableCell, makeStyles, createStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        row: {
            backgroundColor: '#929492',
        },
        cell: {
            color: theme.palette.primary.main
        }
    })
);

function TableHeader() {
    const classes = useStyles();
    return(
        <TableHead>
            <TableRow className={classes.row}>
                <TableCell className={classes.cell} colSpan={3}>Tabla General</TableCell>
                <TableCell className={classes.cell} >JJ</TableCell>
                <TableCell  className={classes.cell} >DG</TableCell>
                <TableCell  className={classes.cell} >PTS</TableCell>
            </TableRow>
        </TableHead>
    )
}

export default TableHeader;