import React, { Component } from 'react'
import { Intro } from "../../components/Landing/Intro/Intro"
import { About } from "../../components/Landing/About/About"
import { Video } from "../../components/Landing/Video/Video"
import { InfoSection } from "../../components/Landing/InfoSection/InfoSection"
import "./Landing.css"

export class Landing extends Component {
    render() {
        return (
            <div>
                <Intro />
                <div id="aboutVideo">
                    <About />
                    <Video />
                </div>
                <InfoSection />
            </div>
        )
    }
}

export default Landing
