import React from 'react';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';   // These are the elements imported from material-ui, These will be helpful for making of cards
import Countup from 'react-countup';
import cx from 'classnames';

// First Destructing of data then destructing of all these things {confirmed, recovered, deaths, lastUpdate}
const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {          // props replaved As we need to go one step deeper for from confirm to get values here

    if (!confirmed) {
        return 'loading...';
    }

    return (
        <div className={styles.container}>                  {/* Jsx structure */}

            <Grid container spacing={3} justify="center">     {/* Making Cards location on page and spacing b/w them */}

                <Grid item component={Card} xd={12} md={3} className={cx(styles.card, styles.infected)}>                {/* This will Make Card Look like paper className will be used for designing "extra small device" <=xd  md=> "medium to large devices"*/}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>    {/*Use for Write Text in Card, gutterBottom Provide Padding on Bottom*/}
                        {/*<Typography varaint="h5">{confirmed.value}</Typography>*/}             {/*varaint is for text size*, confirmed.val going to gives us real value*/}
                        <Typography color="textSecondary">
                            <Countup start={0}                       /*From from just now in seconds*/
                                end={confirmed.value}            /*Will End on This Value*/
                                duration={4}                      /*Number Will move till 4 sec*/
                                separator=","                    /*As Number is Large So best for Human Readable*/
                            ></Countup>
                        </Typography>                                                                   {/* For Animation we can replace confirmed.value with countup tag*/}
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>      {/*lastupdate is not in Human readable form for that makes its object as new Date()then apply .toDatestring()*/}
                        <Typography varaint="body2">Number of Active Cases of COVID-19</Typography>  {/*varaint is for text size*/}
                    </CardContent>
                </Grid>

                <Grid item component={Card} xd={12} md={3} className={cx(styles.card, styles.recovered)}>                    {/* This will Make Card Look like paper */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>    {/*Use for Write Text in Card, gutterBottom Provide Padding on Bottom*/}
                        <Typography varaint="h5">                {/*varaint is for text size*/}
                            <Countup
                                start={0}
                                end={recovered.value}
                                duration={4}
                                separator=","
                            ></Countup>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of recoveries from COVID-19</Typography>  {/*varaint is for text size*/}
                    </CardContent>
                </Grid>

                <Grid item component={Card} xd={12} md={3} className={cx(styles.card, styles.deaths)}>                {/* This will Make Card Look like paper */}
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>    {/*Use for Write Text in Card, gutterBottom Provide Padding on Bottom*/}
                        <Typography varaint="h5">            {/*varaint is for text size*/}
                            <Countup
                                start={0}
                                end={deaths.value}
                                duration={4}
                                separator=","
                            ></Countup>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography varaint="body2">Number of Deaths Cases by Crona Virus</Typography>  {/*varaint is for text size*/}
                    </CardContent>
                </Grid>

            </Grid>

        </div>
    )
}

export default Cards;