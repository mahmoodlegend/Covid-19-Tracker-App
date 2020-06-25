import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';   // These are the elements imported from material-ui, These will be helpful for making of cards


const Cards = (props) => {
    console.log(props);           // To See Either We Are Getting Data or not So data was come but was not shown so we need three component here

    return (
        <div className={styles.container}>                  {/* Jsx strutute */}

            <Grid container spacing={3} justify="center">     {/* Making Cards location on page and spacing b/w them */}

                <Grid item component={Card}>                {/* This will Make Card Look like paper */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>    {/*Use for Write Text in Card, gutterBottom Provide Padding on Bottom*/}
                        <Typography varaint="h5">REAL DATA</Typography>             {/*varaint is for text size*/}
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography varaint="body2">Number of Active Cases of COVID-19</Typography>  {/*varaint is for text size*/}
                    </CardContent>
                </Grid>

                <Grid item component={Card}>                {/* This will Make Card Look like paper */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>    {/*Use for Write Text in Card, gutterBottom Provide Padding on Bottom*/}
                        <Typography varaint="h5">REAL DATA</Typography>             {/*varaint is for text size*/}
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography varaint="body2">Number of recoveries from COVID-19</Typography>  {/*varaint is for text size*/}
                    </CardContent>
                </Grid>

                <Grid item component={Card}>                {/* This will Make Card Look like paper */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>    {/*Use for Write Text in Card, gutterBottom Provide Padding on Bottom*/}
                        <Typography varaint="h5">REAL DATA</Typography>             {/*varaint is for text size*/}
                        <Typography color="textSecondary">REAL DATE</Typography>
                        <Typography varaint="body2">Number of Deaths Cases by Crona Virus</Typography>  {/*varaint is for text size*/}
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards;