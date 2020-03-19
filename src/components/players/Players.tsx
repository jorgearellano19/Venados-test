import React, { useEffect, useState } from 'react'
import { Grid, Modal } from '@material-ui/core';
import { useSelector, useDispatch } from "react-redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import players from "../../services/players";
import { PlayerResponseType, PlayerType } from '../../common/types';
import PlayerCircle from './_PlayerCircle';
import PlayerDetail from './_PlayerDetail';
import { State } from '../../common/interfaces';
import { getData } from '../../store/actions/actions';

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
    const content = (useSelector(state => state) as State);
    const dispatch = useDispatch();
    const [playerSelected, setPlayerSelected] = useState(({} as PlayerType));
    const [openView, setOpenView] = useState(false);
    useEffect(() => {
        dispatch(getData('players'));
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
            {content.players.map((player: PlayerType, index: number) => (
                <PlayerCircle key={index} player={player} onPlayerClick={(e: any) => handlePlayerClick(player)}/>
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