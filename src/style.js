import { makeStyles } from '@mui/styles'
import theme from './theme';

const useStyles = makeStyles(({
   navbar:{
        backgroundColor:'#0080ff',
        '& a':{
            color:'#ffffff',
            marginLeft: 10,
        },
   },
   main:{
       minHeight:'90vh'
   },
   footer:{
    padding:'20px',
    textAlign:'center',       
   }
}))
export default useStyles