import React, { Component } from 'react'
import { Grid, Button } from '@material-ui/core'
import Typed from 'react-typed'
import discordLogo from '../../../assets/discordLogo.svg'
import instagramLogo from '../../../assets/instagramLogo.svg'
import logo from '../../../assets/dsclogolarge.png'
import styles from './Intro.css'

export class Intro extends Component {
    render() {
        return (
            <div id='intro'>
                <div id='introContent'>
                    <Grid container spacing={5}>
                        {/* <Grid item xs={12}>
                            <img id='introLogo' src={logo} />
                        </Grid> */}
                        {/* <h1 className="">
                        Developer Student Clubs
                    </h1>
                    <h2 className="">
                        University of Toronto St. George
                    </h2> */}
                        <Grid item xs={12} id='typing'>
                            <Typed
                                strings={[
                                    "Build",
                                    "Empower",
                                    "Grow",
                                ]}
                                typeSpeed={100}
                                backDelay={1125}
                                backSpeed={50}
                                loop
                            />
                        </Grid>
                        <Grid item xs={12} id="introBtn">
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMfyBJFZSd2z9ZOthc2fp5ANqMPdamUi2GQegsRWtq8FQdlg/viewform">
                                <Button style={{minWidth: '150px', minHeight: '45px'}} variant="contained" id="joinBtn">
                                    Join the Club
                                </Button>
                            </a>
                        </Grid>
                        {/* <Grid item xs={12}>
                            <Grid container justify='center' >
                                <Grid item xs={1}>
                                    <a target="_blank" href="https://discord.gg/dJUsUvQH">
                                        <img src={discordLogo} class='socialLogo' alt="discord logo"/>
                                    </a>
                                </Grid>
                                <Grid item xs={1}>
                                    <a target="_blank" href="https://www.instagram.com/dscutsg/">
                                        <img src={instagramLogo} class='socialLogo' alt="discord logo"/>
                                    </a>
                                </Grid>
                            </Grid>
                            
                        </Grid> */}
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Intro
