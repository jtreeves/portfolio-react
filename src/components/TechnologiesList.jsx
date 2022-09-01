import TechnologyPreview from './TechnologyPreview'

function TechnologiesList(props) {
    const technologyButtons = props.technologies.map((technology, index) => {
        return (
            <li key={index}>
                <TechnologyPreview 
                    technology={technology}
                />
            </li>
        )
    })

    return (
        <ul>
            {technologyButtons}
        </ul>
    )
}

export default TechnologiesList
