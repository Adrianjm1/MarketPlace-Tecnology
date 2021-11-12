import React from 'react';
import Head from 'next/head';
import { AppBar,Container, Toolbar, Typography } from '@mui/material';
import useStyles from '../utils/styles';


export default function Layout({children}) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <title> Marketplace</title>

            </Head>

            <AppBar position="static" className="barra">
                <Toolbar>
                    <Typography> Marketplace</Typography>
                </Toolbar>

            </AppBar>

            <Container className="main">{children}</Container>

                <footer className="footer">
                    <Typography>
                        All rights reserverd. Next Marketplace
                    </Typography>
                </footer>
                
        </div>
    )
}
