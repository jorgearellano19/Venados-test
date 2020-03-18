import React, { useEffect, useState } from 'react'
import { Grid, Typography } from '@material-ui/core';
import players from "../../services/players";
import { PlayerResponseType, PlayerType } from '../../common/types';
import PlayerCircle from './_PlayerCircle';

const playersModified = ((players as any) as PlayerResponseType);
function Players() {
    const [players, setPlayers] = useState(new Array<PlayerType>());
    useEffect(() => {
        setPlayers([...playersModified.team.goalkeepers, ...playersModified.team.defenses, ...playersModified.team.centers, ...playersModified.team.forwards]);
    }, []);
    return(
        <Grid container>
            {players.map((player: PlayerType, index: number) => (
                <PlayerCircle {...player} />
            ))}
        </Grid>
    )
}

export default Players;