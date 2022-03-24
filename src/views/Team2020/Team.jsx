import React, { Component } from 'react'
import { Profile } from "../../components/Team/Profile/Profile"
import { TeamHeading } from "../../components/Team/TeamHeading/TeamHeading"

export class Team extends Component {
    render() {
        return (
            <div id='teamContainer'>
                <TeamHeading />
                <Profile />
            </div>
        )
    }
}

export default Team
