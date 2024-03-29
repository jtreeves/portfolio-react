import TechnologiesList from '../components/TechnologiesList'
import TechnologyDetails from '../components/TechnologyDetails'
import filterOutMainTechnology from '../utilities/filterOutMainTechnology'
import listAllTechnologies from '../utilities/listAllTechnologies'

function Technologies(props) {
    const technologies = props.technology ? filterOutMainTechnology(props.technology) : listAllTechnologies()

    return (
        <section id='technologies'>
            <h1>Technologies</h1>

            {props.technology && <TechnologyDetails 
                technology={props.technology}
                setSection={props.setSection}
                setProject={props.setProject}
            />}

            {props.technology && <h2>Other Technologies</h2>}

            <TechnologiesList 
                technologies={technologies}
                setTechnology={props.setTechnology}
                setSection={props.setSection}
            />
        </section>
    )
}

export default Technologies
