import person from '../data/person'

function NavBar(props) {
    return (
        <nav>
            <span onClick={props.setActiveSection('home')}>
                {person.name}
            </span>

            <ul>
                <li >
                    <div onClick={props.setActiveSection('about')}>
                        About

                    </div>
                </li>
                
                <li onClick={props.setActiveSection('contact')}>
                    Contact
                </li>
                
                <li onClick={props.setActiveSection('resume')}>
                    Resume
                </li>
                
                <li onClick={props.setActiveSection('projects')}>
                    Projects
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
