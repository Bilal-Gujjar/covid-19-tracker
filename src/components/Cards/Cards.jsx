import React from 'react';
//import style from './Cards.module.css'
import { Card,CardContent,Typography,Grid } from '@material-ui/core' ;
    
const Cards = {(confirmed, recovered, deaths, lastUpdate)} => {
    console.log(confirmed, recovered, deaths, lastUpdate);

    return (
        <div className="container">
            <Grid container spacing ={3} justify ="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color = "testSecondary" gutterBotton>Infected</Typography>
                        <Typography variant = "h5" >Real DATA</Typography>
                        <Typography colr = "testSecondary">Real DAY</Typography>
                        <Typography variant ="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color = "testSecondary" gutterBotton>Recovered</Typography>
                        <Typography variant = "h5" >Real DATA</Typography>
                        <Typography colr = "testSecondary">Real DAY</Typography>
                        <Typography variant ="body2">Number of recoveries cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color = "testSecondary" gutterBotton>Deaths</Typography>
                        <Typography variant = "h5" >Real DATA</Typography>
                        <Typography colr = "testSecondary">Real DAY</Typography>
                        <Typography variant ="body2">Number of death cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                
            </Grid>

        </div>
    )
}

export default Cards;
