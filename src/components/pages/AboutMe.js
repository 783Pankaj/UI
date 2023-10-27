import React from 'react'
import HeaderNav from '../header/Header'
import Card from 'react-bootstrap/Card';

const AboutMe = () => {

    return (
        <div style={{ backgroundColor: 'rgb' }}>
            <div>
                <HeaderNav />
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                <div>
                    <Card style={{ width: '28rem', margin: 70 }}>
                        <Card.Body>Phone</Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '28rem', margin: 70 }}>
                        <Card.Body>Email</Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '28rem', margin: 70 }}>
                        <Card.Body>Address</Card.Body>
                    </Card>
                </div>
                <div>
                    <Card style={{ width: '58rem', margin: 70 }}>
                        <Card.Body>Get In Touch</Card.Body>
                        <input type='text' placeholder='name' style={{ width: '8rem', margin: 5 }} />
                        <input type='text' placeholder='email' style={{ width: '8rem', margin: 5 }} />
                        <input type='text' placeholder='contact' style={{ width: '8rem', margin: 5 }} />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default AboutMe