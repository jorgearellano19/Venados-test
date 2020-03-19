import * as React from 'react';
import { TableContainer, Paper, Table, TableBody } from '@material-ui/core';
import TableHeader from './_TableHeader';
import { StatsType } from '../../common/types';
import TeamRow from './_TeamRow';

type TableProps = {
    teams: Array<StatsType>;
}
function GeneralTable(props: TableProps) {
    return(
        <TableContainer component={Paper}>
            <Table>
                <TableHeader/>
                <TableBody>
                    {props.teams.map((team: StatsType, index: number) => (
                        <TeamRow key={index} {...team}></TeamRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default GeneralTable;