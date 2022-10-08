import person from '../data/person'

function NavBar(props) {
    return (
        <nav>
            <span onClick={() => props.setSection('home')}>
                {person.name}
            </span>

            <ul>
                <li onClick={() => props.setSection('about')}>
                    About
                </li>
                
                <li onClick={() => props.setSection('contact')}>
                    Contact
                </li>
                
                <li onClick={() => props.setSection('resume')}>
                    Resume
                </li>
                
                <li onClick={() => props.setSection('projects')}>
                    Projects
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
