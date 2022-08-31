import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, Navbar as BootstrapNavBar, Nav } from 'react-bootstrap'

function NavBar() {
    const [expanded, setExpanded] = useState(false)

    return (
        <BootstrapNavBar 
            expanded={expanded} 
            bg="light" 
            expand="lg"
        >
            <Container fluid>
                <Link 
                    to="/" 
                    className="navbar-brand"
                >
                    Jackson Reeves
                </Link>

                <BootstrapNavBar.Toggle
                    aria-controls="navbarScroll"
                    onClick={() => setExpanded(expanded ? false : "expanded")}
                />

                <BootstrapNavBar.Collapse 
                    id="navbarScroll"
                >
                    <Nav 
                        className="me-auto my-2 my-lg-0" 
                        navbarScroll
                    >
                        <Link
                            to="/about"
                            className="nav-link"
                            onClick={() => setExpanded(false)}
                        >
                            About
                        </Link>
                        
                        <Link
                            to="/contact"
                            className="nav-link"
                            onClick={() => setExpanded(false)}
                        >
                            Contact
                        </Link>
                        
                        <Link
                            to="/resume"
                            className="nav-link"
                            onClick={() => setExpanded(false)}
                        >
                            Resume
                        </Link>
                        
                        <Link
                            to="/projects"
                            className="nav-link"
                            onClick={() => setExpanded(false)}
                        >
                            Projects
                        </Link>
                    </Nav>
                </BootstrapNavBar.Collapse>
            </Container>
        </BootstrapNavBar>
    )
}

export default NavBar
