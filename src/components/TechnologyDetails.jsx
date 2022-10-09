import ProjectsList from './ProjectsList'
import findProjectsByTechnology from '../utilities/findProjectsByTechnology'
import '../styles/technologies.css'

function TechnologyDetails(props) {
    const projects = findProjectsByTechnology(props.technology)

    return (
        <div>
            <h2>{props.technology}</h2>

            <p>Products I have built using {props.technology}:</p>

            <ProjectsList 
                projects={projects}
                setProject={props.setProject}
                setSection={props.setSection}
            />
        </div>
    )
}

export default TechnologyDetails
