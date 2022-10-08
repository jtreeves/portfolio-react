import TechnologiesList from '../components/TechnologiesList'
import TechnologyDetails from '../components/TechnologyDetails'
import listAllTechnologies from '../utilities/listAllTechnologies'

function Technologies(props) {
    const technologies = listAllTechnologies()

    return (
        <section>
            <h1>Technologies</h1>

            <TechnologyDetails 
                technology={props.technology}
            />

            <TechnologiesList 
                technologies={technologies}
                setTechnology={props.setTechnology}
            />
        </section>
    )
}

export default Technologies
