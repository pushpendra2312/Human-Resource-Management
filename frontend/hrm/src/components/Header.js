import React from 'react'
import { Card, Nav } from 'react-bootstrap'
function Header() {
    return (
        <Card>
            <Card.Header>
                <Nav variant="pills">
                    <Nav.Item>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/add">Add</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="/view">View</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
        </Card>
    )
}

export default Header
