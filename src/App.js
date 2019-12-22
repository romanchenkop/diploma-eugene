import React, { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import { LineChart, Line, XAxis, YAxis } from 'recharts'
import mockData from '/home/digtrannee/Desktop/example/src/mocks/page_2_scores_plot.json'
import AppBarMenu from './components/header/AppBar'
import HeaderInput from './components/mainContent/HeaderInput'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import ValuesInput from './components/mainContent/ValuesInput'

const useStyles = makeStyles({
  divider: {
    marginTop: '10px',
    height: '2px',
    marginLeft: '10px',
    marginRight: '10px',
  },
})

function App() {
  const classes = useStyles()

  return (
    <div style={{ height: '1000px' }}>
      <AppBarMenu />
      <div className="container">
        <HeaderInput />
        <Divider className={classes.divider} variant="middle" />
        <ValuesInput />
      </div>
    </div>
  )
}

export default App
