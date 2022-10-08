import TechnologyPreview from './TechnologyPreview'

function TechnologiesList(props) {
    const technologyCards = props.technologies.map((technology, index) => {
        const setter = () => {
            props.setTechnology(technology)
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
        <ul>
            {technologyCards}
        </ul>
    )
}

export default TechnologiesList
