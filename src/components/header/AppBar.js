import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  contrainer: {
    backgroundColor: '#eb4d55',
    flex: 1,
    justifyContent: 'flex-end space-between',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 10,
  },
  infoBar: {
    flexGrow: 3,
    justifyContent: 'flex-end',
    marginRight: '-20px',
  },
}))

export default function AppBarMenu() {
  const classes = useStyles()
  return (
    <>
      <AppBar className={classes.contrainer} position="sticky">
        <Toolbar className={classes.title}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Toolbar className={classes.infoBar}>
            <Button edge={'end'} color="inherit">
              Аналітичний модуль
            </Button>
            <Button color="inherit">Мої дані</Button>
            <Button edge={'end'} color="inherit">
              Акаунт
            </Button>
          </Toolbar>
        </Toolbar>
      </AppBar>
    </>
  )
}
