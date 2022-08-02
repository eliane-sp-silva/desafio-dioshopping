import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography, Button } from '@material-ui/core/';
import Cart from './Cart';

const Header = () => {
    return(

        <Grid container >
        <Grid container direction="row" 
        justify="space-evenly" alignItems="center" xs={12}>
            <Typography variant='h4'color="primary">
                Moda Evangélica Dio
            </Typography>
            <Link to="/">
                <Button color="primary">Home</Button>
            </Link>
            <Link to="/contato">
                <Button color="primary">Contato</Button>
            </Link>
            <Cart />   
            
        </Grid>
        </Grid>
    )
}

export default Header;
