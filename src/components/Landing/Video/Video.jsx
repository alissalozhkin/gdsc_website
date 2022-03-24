import React, { Component } from 'react'
import { Grid } from "@material-ui/core"

export class Video extends Component {
    render() {
        return (
            <div id="videoComponent">
                <Grid justify='center' container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <iframe className="videoLanding" width="100%" height="378" src="https://www.youtube.com/embed/rYAlnlg_vaw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <iframe className="videoLanding" width="100%" height="378" src="https://www.youtube.com/embed/suqRP5sBMMM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default Video
