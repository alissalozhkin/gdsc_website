import React, { Component } from 'react'
import { Grid, Container, Typography } from "@material-ui/core"
import alissa from '../../../assets/team/alissa.jpg'
import ali from '../../../assets/team/ali.jpg'
import anushka from '../../../assets/team/anushka.jpg'
import bhavjot from '../../../assets/team/bhavjot.jpg'
import divya from '../../../assets/team/divya.jpeg'
import jose from '../../../assets/team/jose.jpg'
import karishma from '../../../assets/team/karishma.jpeg'
import mihir from '../../../assets/team/mihir.jpg'
import samreen from '../../../assets/team/samreen.jpg'
import shysta from '../../../assets/team/shysta.jpg'
import tanya from '../../../assets/team/tanya.jpeg'
import blank from '../../../assets/team/blank.png'
import chloe from '../../../assets/team/chloe.jpg'
import jeannie from '../../../assets/team/jeannie.jpg'
import shahan from '../../../assets/team/shahan.jpg'
import erica from '../../../assets/team/erica.jpg'
import sashveena from '../../../assets/team/sashveena.jpg'
import joseph from '../../../assets/team/joseph.jpg'
import jia from '../../../assets/team/jia.jpg'
import vama from '../../../assets/team/vama.jpg'
import william from '../../../assets/team/william.jpg'
import jolina from '../../../assets/team/jolina.jpg'
import mahak from '../../../assets/team/mahak.jpg'
import './Profile.css'

// link will break eventually, picked up from linkedin
// const placeholderImage = 'https://media-exp1.licdn.com/dms/image/C4E03AQEfLYXGn9QJWg/profile-displayphoto-shrink_800_800/0/1618599413564?e=1637193600&v=beta&t=M9JHP-T1ny_WRmBMDX_WIuPQAjCooahcrJezWTNpeBI'

const members = [
    {
        name: 'Chloe Bell',
        photo: chloe,
        position: 'GDSC Lead',
    },
    {
        name: 'Jose Siliézar',
        photo: jose,
        position: 'GDSC Vice-Lead',
    },
    {
        name: 'Anushka Saini',
        photo: anushka,
        position: 'Marketing Director',
    },
    {
        name: 'Jeannie Yoo',
        photo: jeannie,
        position: 'Marketing Director',
    },
    {
        name: 'Samreen Khatib Syed',
        photo: samreen,
        position: 'Graphic Designer',
    },
    {
        name: 'Shahan Nanda',
        photo: shahan,
        position: 'Graphic Designer',
    },
    {
        name: 'Divya Gupta',
        photo: divya,
        position: 'Content Writer',
    },
    {
        name: 'Erica Eng',
        photo: erica,
        position: 'Content Writer',
    },
    {
        name: 'Shashveena Kanapathy',
        photo: sashveena,
        position: 'Project Director',
    },
    {
        name: 'Karishma Shah',
        photo: karishma,
        position: 'Mentorship Director',
    },
    {
        name: 'Tanya Thaker',
        photo: tanya,
        position: 'Mentorship Director',
    },
    {
        name: 'Joseph Lee',
        photo: joseph,
        position: 'Experience Director',
    },
    {
        name: 'Shysta Sehgal',
        photo: shysta,
        position: 'Research Director',
    },
    {
        name: 'Mihir Vittalam',
        photo: mihir,
        position: 'Events Director',
    },
    {
        name: 'Bhavjot Grewal',
        photo: bhavjot,
        position: 'Web Developer',
    },
    {
        name: 'Alissa Lozhkin',
        photo: alissa,
        position: 'Web Developer',
    },
    {
        name: 'Jia Hao Choo',
        photo: jia,
        position: 'Technical Director',
    },
    {
        name: 'Ali Syed',
        photo: ali,
        position: 'Technical Director',
    },
    {
        name: 'Vama Dave',
        photo: vama,
        position: 'Outreach Associate',
    },
    {
        name: 'William Zhang',
        photo: william,
        position: 'Outreach Associate',
    },
    {
        name: 'Sanjana Dasadia',
        photo: blank,
        position: 'Outreach Associate',
    },
    {
        name: 'Jolina Li',
        photo: jolina,
        position: 'Operations Associate',
    },
    {
        name: 'Mahak Khurmi',
        photo: mahak,
        position: 'Operations Associate',
    }
]

export class Profile extends Component {
    render() {
        return (
            <div className="memberContainer">
                <Grid container justify="center" spacing={3}>
                    {members.map((member, i) => {
                        return (
                            <Grid item lg={3} md={4}>
                                <div className='member'>
                                    <a href="/">
                                        <img className='memberPhoto' src={`${member.photo}`} alt='user' />
                                        <div className='memberInfo'>
                                            <h3 className='memberName'>{member.name}</h3>
                                            <small className='memberPosition'>{member.position}</small>
                                            {/* <p className='memberDesc'>{member.desc}</p> */}
                                        </div>
                                    </a>
                                </div>
                            </Grid>
                        )
                    })}
                </Grid>
            <br></br>
            <br></br>
            </div>)
    }
}

export default Profile
