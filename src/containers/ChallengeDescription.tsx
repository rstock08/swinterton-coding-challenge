import { Typography, Grid } from "@material-ui/core";
import React from "react";

export default function ChallengeDescription() {
    return (
        <Grid container>
            <Grid item xs={2} />
            <Grid item xs={8}>
                <Typography variant="h4" component="h2">
                    <b>Challenge:</b>
                </Typography>
            </Grid>
            <Grid item xs={2} />

            <Grid item xs={2} />
            <Grid item xs={8}>
                <Typography variant="body1" gutterBottom>
                    Write a React app that lets you choose the attached CSV file from your computer and sum the values.
                <br />
                The app should print out a single integer of the sum of all values.
            </Typography>
            </Grid>
            <Grid item xs={2} />

            <br />
            <br />
            <br />
            <br />

            <Grid item xs={2} />
            <Grid item xs={8}>
                <Typography variant="h5" component="h2">
                    <b>For Fun:</b>
                </Typography>
            </Grid>
            <Grid item xs={2} />

            <Grid item xs={2} />
            <Grid item xs={8}>
                <Typography variant="body1" gutterBottom>
                    Created tables that show the data.
                <br />
                Created tables that sum individual rows of the data.
                <br />
                Created routes for different pages, one for the data analysis, and one for the challenge description.
            </Typography>
            </Grid>
            <Grid item xs={2} />
        </Grid>
    )
}