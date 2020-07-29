 import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles( theme => ({
    forLoading: {
      position: 'absolute',
      left: '50vw',
      top: '40vh'
    },

    buttonStyle: props => {
      return {
          background: 'blue',
          [theme.breakpoints.down('sm')] : {
              background: 'purple'
          },
          color: props.caaa ? "orange" : "yellow"
      }
  }
}))

export default useStyles

