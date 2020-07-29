import { createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'
import { orange, blue } from '@material-ui/core/colors'


const theme = createMuiTheme({
    palette: {
        type: 'dark',
        primary: blue ,
        secondary: green
    },
    status: {
        danger: orange
    },
    typography: {
        fontFamily: "Arial",
        h1: {
            fontSize: '1em'
        }
    }
})

export default theme