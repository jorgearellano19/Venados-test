import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import stats from "../../services/stats";
import { StatsType } from '../../common/types';
import GeneralTable from './_GeneralTable';

const statsModified = ((stats as any) as Array<StatsType>);
function Stats() {
    return(
        <Grid container xs={12}>
            <GeneralTable teams={statsModified}/>
        </Grid>
    )
} 
export default Stats;