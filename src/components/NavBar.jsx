import { Link } from 'react-router-dom'
import { Container, Navbar as BootstrapNavBar, Nav } from 'react-bootstrap'
import person from '../data/person'

function NavBar() {
    return (
        <BootstrapNavBar 
            bg='light'
        >
            <Container fluid>
                <Link 
                    to='/' 
                    className='navbar-brand'
                >
                    {person.name}
                </Link>

                <Nav>
                    <Link
                        to='/about'
                        className='nav-link'
                    >
                        About
                    </Link>
                    
                    <Link
                        to='/contact'
                        className='nav-link'
                    >
                        Contact
                    </Link>
                    
                    <Link
                        to='/resume'
                        className='nav-link'
                    >
                        Resume
                    </Link>
                    
                    <Link
                        to='/projects'
                        className='nav-link'
                    >
                        Projects
                    </Link>
                </Nav>
            </Container>
        </BootstrapNavBar>
    )
}

export default NavBar
