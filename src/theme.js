import { Typography } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";



const theme = createTheme({
    palette :{
        primary:{
            main: '#2445ff'
        },
        secondary:{
            main:'#269e44',
        },
        error:{
            main: '#ff6554',
        },
    },
})


export default theme


