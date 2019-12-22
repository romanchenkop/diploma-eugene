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
})

export default function HeaderInput() {
  const classes = useStyles()
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className={classes.input}
          color={'secondary'}
          size={'small'}
          id="outlined-basic"
          label="1"
          variant="outlined"
        />
      </form>
    </div>
  )
}
