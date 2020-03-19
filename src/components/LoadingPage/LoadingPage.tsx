import React from 'react'
import { CircularProgress, Theme, makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   progress: {
       position: "absolute",
       top: "50%",
       left: '50%'
   }
  })
);
export default function LoadingPage() {
    const classes = useStyles();
    return(
        <CircularProgress className={classes.progress} color="secondary" />
    )
}