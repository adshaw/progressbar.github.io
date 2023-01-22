import {makeStyles} from '@material-ui/core/styles'

export default makeStyles((theme: any) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  navigationBtns: {
    verticalAlign: 'bottom',
  }
}))
