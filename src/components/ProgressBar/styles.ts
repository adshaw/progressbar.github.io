import {makeStyles} from '@material-ui/core/styles'

export default makeStyles(() => ({
  containerStyles: {
    height: 30,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 10
  },
  labelStyles: {
    position: 'relative',
    top: 4,
    color: '#000',
    fontWeight: 'bold',
    padding: 5
  },
  active: {
    backgroundColor: 'darkred'
  }

}))