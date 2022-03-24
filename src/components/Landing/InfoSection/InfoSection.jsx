import React, { Component } from 'react'
import { Grid, Container, Typography } from "@material-ui/core"
import "./InfoSection.css"
import stock1 from "../../../assets/stock1.jpeg"
import stock2 from "../../../assets/stock2.jpeg"
import stock3 from "../../../assets/stock3.png"
import { StylesContext } from '@material-ui/styles'

export class InfoSection extends Component {
    render() {
        return (
            <div id="infoSectionContainer">
            <Grid container justify="center" spacing={5}>
                <Grid item md={12} spacing={3} style={{backgroundColor: 'white'}}>
                    <div className='infoSectionContent'>
                    <Grid container justify="center" spacing={5}>
                        <Grid item md={5} spacing={2}>
                                <h2>Connect</h2>
                                <p>
                                    Meet students at UofT with a similar passion for technology, and 
                                    share your interest for developer technologies. Anyone, from any
                                    backgroumd, is welcome to join us!
                                </p> 
                        </Grid>
                        <Grid item md={5} spacing={2}>
                            <img src={stock1} className='infoSectionImg' alt="stock" />
                        </Grid>
                    </Grid>
                    </div>
                </Grid>
                <Grid item md={12} spacing={5}>
                    <div className='infoSectionContent'>
                    <Grid container justify="center" spacing={5}>
                        <Grid item md={5} spacing={2}>
                                <img src={stock2} className='infoSectionImg' alt="stock" />
                        </Grid>
                        <Grid item md={5} spacing={2}>
                            <h2>Learn</h2>
                            <p>
                                Learn a wide range of technical topics, from programming languages to frameworks,
                                and gain new skills through workshops, events, and projects. Work with teams of 
                                students and apply your knowledge to projects!
                            </p>
                        </Grid>
                    </Grid>
                    </div>
                </Grid>
                <Grid item md={12} spacing={5} style={{backgroundColor: 'white'}}>
                    <div className='infoSectionContent'>
                    <Grid container justify="center" spacing={5}>
                        <Grid item md={5} spacing={2}>
                            <h2>Join Us</h2>
                            <p>
                                Join us at GDSC UTSG and uncover your passion for technology! Make sure to follow
                                GDSC UTSG on Social Media and sign up for our mailing list to stay up to date:
                                <br></br>
                                <li>Mailing List: <a href="https://bit.ly/joindscutsg">
                                https://bit.ly/joindscutsg</a></li>

                                <li>Join our Discord Server: <a href="https://bit.ly/joindscutsg">
                                https://bit.ly/dscutsg</a></li>

                                <li>Instagram: @dscutsg</li>

                                <li>Facebook: @utsgdsc</li>

                                <li>Linkedin: @dscutsg</li>

                            </p>
                        </Grid>
                        <Grid item md={5} spacing={2}>
                            <img src={stock3} className='infoSectionImg' alt="stock" />
                        </Grid>
                    </Grid>
                    </div>
                </Grid>
            </Grid>
            </div>
        )
    }
}

export default InfoSection

