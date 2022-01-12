import React ,{useState }from 'react'
import dynamic from 'next/dynamic';
import { AppBar, Button, Container, Grid, Toolbar, Typography } from '@mui/material';
import useStyles from '../src/style';
import { Head } from 'next/document';

function Layout({children}) {
    const classes = useStyles()
    return (
        <div>
            <title>Ecom</title>
            <AppBar position='static' className={classes.navbar}>
                <Toolbar>
                    <Typography>MYcom</Typography>
                </Toolbar>
            </AppBar>
            <Container className={classes.main}>{children}</Container>
            <footer className={classes.footer}>
                <Typography>All rights reserved. Ecom.</Typography>
            </footer>
        </div>
    )
}


// export default dynamic(()=> Promise.resolve(Layout),{
//   ssr: true,
// });

export default Layout