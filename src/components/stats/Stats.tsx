import React, {useEffect} from 'react'
import { Grid } from '@material-ui/core'
import { useSelector, useDispatch } from "react-redux";
import GeneralTable from './_GeneralTable';
import { State } from '../../common/interfaces';
import { getData } from '../../store/actions/actions';
import LoadingPage from '../LoadingPage/LoadingPage';

function Stats() {
    const content = (useSelector(state => state) as State);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getData('statistics'))
    }, [])

    if(content.isLoading) {
        return(<LoadingPage/>);
    } 
    return(
        <Grid container >
            <GeneralTable teams={content.stats}/>
        </Grid>
    )
} 
export default Stats;