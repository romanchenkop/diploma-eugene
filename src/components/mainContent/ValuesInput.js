import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import { Button, Typography } from '@material-ui/core'
import 'typeface-roboto'

const useStyles = makeStyles({
  input: {
    width: '50px',
    // marginLeft: '50px',
    marginTop: '10px',
  },
  labels: {
    // position: 'absolute',
    fontFamily: 'Roboto',
    fontSize: '10px',
    marginTop: '17px',
    marginRight: '10px',
    fontWeight: 700,
  },
})

const ValuesInput = () => {
  const classes = useStyles()

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}
    >
      <div style={{ display: 'flex' }}>
        <span className={classes.labels}>
          <Typography component="span">Розмір вікна</Typography>
        </span>

        <TextField
          className={classes.input}
          size="small"
          id="standard-number"
          type="number"
          variant="standard"
        />
      </div>
      <div style={{ display: 'flex' }}>
        <span className={classes.labels}>
          <Typography component="span">Відсоток різниці</Typography>
        </span>
        <TextField
          className={classes.input}
          size="small"
          id="standard-number"
          type="number"
          variant="standard"
        />
      </div>
      <div style={{ marginTop: '14px', marginRight: '11px' }}>
        <Button size="small" color="primary">
          OK
        </Button>
      </div>
    </div>
  )
}

export default ValuesInput
