import TechnologiesList from '../components/TechnologiesList'
import TechnologyDetails from '../components/TechnologyDetails'
import filterOutMainTechnology from '../utilities/filterOutMainTechnology'

function Technologies(props) {
    return (
        <section>
            <h1>Technologies</h1>

            <TechnologyDetails 
                technology={props.technology}
                setSection={props.setSection}
                setProject={props.setProject}
            />

            <TechnologiesList 
                technologies={filterOutMainTechnology(props.technology)}
                setTechnology={props.setTechnology}
                setSection={props.setSection}
            />
        </section>
    )
}

export default Technologies
