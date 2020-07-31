 import {makeStyles} from '@material-ui/styles'
 import { blue } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
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
  },

    headerStyle: {
        background: 'blue',
        textAlign: 'center',
        fontSize: '10vh'
    },
    sect: {
      background: 'red',
      // height: '60vh'      
    
    },

    foot: {
      background: 'yellow',
      height: '15vh'
    
    }

}))

export default useStyles

