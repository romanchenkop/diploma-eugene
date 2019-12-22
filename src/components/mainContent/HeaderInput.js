import React from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    '& > *': {
      marginTop: 20,
      width: 400,
    },
  },
  label: {
    marginLeft: '-215px',
    marginTop: '31px',
    position: 'absolute',
  },
})

export default function HeaderInput() {
  const classes = useStyles()
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <span className={classes.label}>1. </span>
        <TextField
          className={classes.input}
          color={'secondary'}
          size={'small'}
          id="outlined-basic"
          variant="standard"
        />
      </form>
    </div>
  )
}
