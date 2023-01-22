import React, { useEffect, useState } from 'react';
import './Application.scss';
import ProgressBar from '@src/components/ProgressBar';
import { Container, Button, FormControl, Grid, InputLabel, Paper, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles'

export interface IProgress {
  completed: number;
}

export const progressBarData: IProgress[] = [
  { completed: 25 },
  { completed: 50 },
  { completed: 75 },
];

const Application: React.FC = () => {
  const classes = useStyles();


  const [progressBar, setProgressBar] = useState<IProgress[]>([]);
  const [selectedProgressBar, selectProgressBar] = useState<number>(0);


  useEffect(() => {
    setProgressBar(progressBarData)
  }, [])

  function renderContent() {

    return progressBar.map(({completed}, index) => (
      <ProgressBar key={index} completed={completed} />
    ))
  }

  const handleChange = (event: any) => {
    console.log('change', event.target.value);
    selectProgressBar(event.target.value)
  }
  const changeProgressBar = (changeVal: number) => {
    const updatedProgressBar = progressBar.map((progress: IProgress, index)=>{
      if (index === selectedProgressBar) {
        progress.completed = (progress.completed + changeVal) < 0 ? 0 :  (progress.completed + changeVal);
      }
      return progress;
    })
    setProgressBar(updatedProgressBar);

  }


  return (
    <Container>
      <h1>Progress Bars Demo</h1>
      <Grid id='top-row' container spacing={10}>
        <Grid item xs={4}>
          {renderContent()}
        </Grid>
      </Grid>
      <Grid id='bottom-row' container spacing={10}>
        <Grid item xs={4}>
          <Paper>
            <FormControl className={classes.formControl}>
              <InputLabel id='demo-simple-select-label'>Select progress bar</InputLabel>
              <Select
                id='demo-simple-select'
                value={selectedProgressBar}
                onChange={handleChange}>
                <MenuItem value={0}>Progress bar 1</MenuItem>
                <MenuItem value={1}>Progress bar 2</MenuItem>
                <MenuItem value={2}>Progress bar 3</MenuItem>
              </Select>
            </FormControl>
            <FormControl className={classes.navigationBtns}>
              <div className={classes.root}>
                <Button variant="contained" color="primary" size="small" onClick={()=>changeProgressBar(-25)}>-25</Button>
                <Button variant="contained" color="primary" size="small"  onClick={()=>changeProgressBar(-10)}>-10</Button>
                <Button variant="contained" color="primary" size="small"  onClick={()=>changeProgressBar(+10)}>+10</Button>
                <Button variant="contained" color="primary" size="small"  onClick={()=>changeProgressBar(+25)}>+25</Button>
              </div>

            </FormControl>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
};

export default Application;
