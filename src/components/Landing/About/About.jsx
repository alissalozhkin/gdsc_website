import React, { Component } from 'react'
import './About.css'
import { Card, CardContent, Typography, Grid, Paper } from '@material-ui/core';

const cards = [
    {
        title: 'Build',
        body: 'Attend workshops, learn new technologies, and apply your knowledge to build impactful projects.',
    },
    {
        title: 'Empower',
        body: 'Empower others to make a difference by creating and building innovative projects.',
    },
    {
        title: 'Grow',
        body: 'Apply new learnings to build great solutions for local problems. Advance your skills, career, and network.',
    }
]

export class About extends Component {
    render() {
        return (
            <div className='aboutContainer'>
            <Grid container spacing={3} justify="center">
                {cards.map((card, i) => {
                    return (
                        <Grid item component={Card} xs={12} md={3} className={`card card${i + 1}`}>
                        <CardContent>
                            <Typography variant="h4">
                                {card.title}
                            </Typography>
                            <Typography variant="body3" className="cardContent">
                            {card.body}
                            </Typography>
                        </CardContent>
                        </Grid>
                    )
                })}
            </Grid>
        </div>
        )
    }
}

export default About
