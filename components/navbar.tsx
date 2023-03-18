import {Container, Navbar,NavDropdown} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Link from 'next/link';
import Image from 'next/image';
export default function CustomNav(){
    return(
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
        <Container>
            <Navbar.Brand href="/">
                <Image src='/images/logo.svg' alt="" width={181} height={90} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link style={{padding:'40px'}}href="/catchMe">Catch Me!</Nav.Link>
                    <Nav.Link style={{padding:'40px'}} href="/diary">Diary</Nav.Link>
                    <Nav.Link style={{padding:'40px'}} href="/music">Music</Nav.Link>
                    <Nav.Link style={{padding:'40px'}} href="/book">Book&Movie</Nav.Link>
                    <Nav.Link style={{padding:'40px'}} href="/programming">Programming</Nav.Link>
                    <Nav.Link style={{padding:'40px'}} href="/travel">Travel</Nav.Link>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>

    );
}