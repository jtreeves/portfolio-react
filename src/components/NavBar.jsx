import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sections from '../data/sections'
import about from '../data/about'
import capitalizeWord from '../utilities/capitalizeWord'

function NavBar(props) {
    const items = sections.map((section, index) => {
        const handleClick = () => {
            props.clearProjectAndTechnology()
            props.setSection(section.name)
        }

        return (
            <li
                key={index}
                title={capitalizeWord(section.name)}
                onClick={handleClick}
            >
                <FontAwesomeIcon 
                    icon={section.icon} 
                    size='1x' 
                />
            </li>
        )
    })

    return (
        <nav>
            <span onClick={() => props.setSection('home')}>
                {about.name}
            </span>

            <ul>
                {items}
            </ul>
        </nav>
    )
}

export default NavBar
