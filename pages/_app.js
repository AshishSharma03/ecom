import { CacheProvider} from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material';
import Head from 'next/head';
import  PropTypes  from 'prop-types';
import createEmotionCache from '../src/createEmotionCache'
// import '../styles/globals.css'
import theme from '../src/theme';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props){
    const {Component , emotionCache = clientSideEmotionCache, pageProps} = props;
  return(
    <CacheProvider value={emotionCache}> 
    <ThemeProvider theme={theme}>
    <CssBaseline/>
    <Component {...pageProps} />
    </ThemeProvider>
    </CacheProvider>
    )
  
}
 
MyApp.prototype ={
  Component: PropTypes.elementType.isRequired,
  emotionCache : PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};


export default MyApp