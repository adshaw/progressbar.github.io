import React from 'react'
import {IProps} from './types';
import useStyles from './styles'

const ProgressBar = (props: IProps) => {

  const defaultColor = 'rgb(171, 212, 230)';
  const overLimitColor = '#ff0000'

  const { completed } = props;
  const classes = useStyles()

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    maxWidth: '100%',
    backgroundColor: `${completed >= 100 ? overLimitColor : defaultColor}`,
    borderRadius: 'inherit',
    textAlign: 'center' as 'center',
    transition: 'width 0.5s ease-in-out',
  }


  return (
    <div className={classes.containerStyles}>
      <div style={fillerStyles} data-testid="progress-bar-fill">
        <span className={classes.labelStyles} data-testid="progress-bar">{`${completed < 0 ? 0 : completed }%`}</span>
  </div>
  </div>
);
}

export default ProgressBar
