import React from 'react';
import Footer from '../components/footer';
import Icon from '../components/icons';

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Wrapper>
            <Footer.Row>
                <Footer.Column>
                <Footer.Title>About Us</Footer.Title>
                    <Footer.Link href="#">Home</Footer.Link>
                    <Footer.Link href="#">Events</Footer.Link>
                    <Footer.Link href="#">Blog</Footer.Link>
                    <Footer.Link href="#">Team</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                <Footer.Title>Social</Footer.Title>
                    <Footer.Link href="#">Facebook</Footer.Link>
                    <Footer.Link href="#">Instagram</Footer.Link>
                    <Footer.Link href="#">Youtube</Footer.Link>
                    <Footer.Link href="#">Twitter</Footer.Link>
                </Footer.Column>
            </Footer.Row>
                <Footer.Column>
                    <Footer.Subheading>Built by the Google Developer Student Clubs Chapter at UTSG.</Footer.Subheading>
                </Footer.Column>
            </Footer.Wrapper>
        </Footer>
    )
}