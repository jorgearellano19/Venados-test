import React, { useEffect, useState } from 'react'
import { Grid, Typography, Modal } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import players from "../../services/players";
import { PlayerResponseType, PlayerType } from '../../common/types';
import PlayerCircle from './_PlayerCircle';
import PlayerDetail from './_PlayerDetail';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
    })
);

const playersModified = ((players as any) as PlayerResponseType);
function Players() {
    const classes = useStyles();
    const [players, setPlayers] = useState(new Array<PlayerType>());
    const [playerSelected, setPlayerSelected] = useState(({} as PlayerType));
    const [openView, setOpenView] = useState(false);
    useEffect(() => {
        setPlayers([...playersModified.team.goalkeepers, ...playersModified.team.defenses, ...playersModified.team.centers, ...playersModified.team.forwards]);
    }, []);

    const handlePlayerClick = (player: PlayerType) => {
        setPlayerSelected(player);
        setOpenView(true);
    };

    const handleClose = () => {
        setOpenView(false);
      };
    return(
        <Grid container>
            {players.map((player: PlayerType, index: number) => (
                <PlayerCircle player={player} onPlayerClick={(e: any) => handlePlayerClick(player)}/>
            ))}

        <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={openView}
            onClose={handleClose}
            className={classes.modal}
        >
        <PlayerDetail {...playerSelected}></PlayerDetail>
        </Modal>
        </Grid>
    )
}
export default Players;