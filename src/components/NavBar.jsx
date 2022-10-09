import sections from '../data/sections'
import about from '../data/about'
import capitalizeWord from '../utilities/capitalizeWord'

function NavBar(props) {
    const items = sections.map((section, index) => {
        const handleClick = () => {
            props.clearProjectAndTechnology()
            props.setSection(section)
        }

        return (
            <li
                key={index}
                onClick={handleClick}
            >
                {capitalizeWord(section)}
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
