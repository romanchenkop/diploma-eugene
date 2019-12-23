import React, { useEffect, useState } from 'react'
import './App.css'
import AppBarMenu from './components/header/AppBar'
import HeaderInput from './components/mainContent/HeaderInput'
import Divider from '@material-ui/core/Divider'
import { makeStyles } from '@material-ui/core/styles'
import ValuesInput from './components/mainContent/ValuesInput'
import SideContentStatus from './components/mainContent/SideContentStatus'
import plotScores from './mocks/mock'
import HeaderChart from './components/charts/HeaderChart'
import { tableData, tableTitles } from './mocks/tableData'
import { TableContainer, Paper, Table, TableRow } from '@material-ui/core'
import CustomTableHeaderRow from './components/tables/CustomTableHeaderRow'
import CustomTableBody from './components/tables/CustomTableBody'

const useStyles = makeStyles({
  divider: {
    marginTop: '10px',
    height: '2px',
    marginLeft: '10px',
    marginRight: '10px',
  },
  page1Table: {
    minWidth: '600px',
    marginTop: '100px',
  },
  page1TableHeader: {
    backgroundColor: 'black',
  },
})

function App() {
  useEffect(() => {
    console.log(plotScores)
    console.log(tableTitles)
  })
  const classes = useStyles()

  return (
    <div style={{ height: '1000px' }}>
      <AppBarMenu />
      <SideContentStatus />

      <div className="container">
        {/* <HeaderInput />
        <Divider className={classes.divider} variant="middle" /> */}
        <ValuesInput />
        <HeaderChart />
        <TableContainer className={classes.page1Table} component={Paper}>
          <Table>
            <CustomTableHeaderRow
              className={classes.page1TableHeader}
              titles={tableTitles}
            />
            <CustomTableBody data={tableData} />
            <TableRow />
            <TableRow />
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}

export default App
