import TechnologyPreview from './TechnologyPreview'
import '../styles/technologies.css'

function TechnologiesList(props) {
    const technologyCards = props.technologies.map((technology, index) => {
        const setter = () => {
            props.setTechnology(technology)
            props.setSection('technologies')
        }

        return (
            <TechnologyPreview 
                key={index}
                technology={technology}
                setter={setter}
            />
        )
    })

    return (
        <ul id='technologies-list'>
            {technologyCards}
        </ul>
    )
}

export default TechnologiesList
