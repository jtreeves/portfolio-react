import { Link } from 'react-router-dom'
import person from '../data/person'

function NavBar() {
    return (
        <nav>
            <Link 
                to='/'
            >
                {person.name}
            </Link>

            <ul>
                <li>
                    <Link
                        to='/about'
                    >
                        About
                    </Link>
                </li>

                <li>
                    <Link
                        to='/contact'
                    >
                        Contact
                    </Link>
                </li>

                <li>
                    <Link
                        to='/resume'
                    >
                        Resume
                    </Link>
                </li>
                
                <li>
                    <Link
                        to='/projects'
                    >
                        Projects
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
