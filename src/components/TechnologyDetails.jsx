import ProjectsList from './ProjectsList'
import findProjectsByTechnology from '../utilities/findProjectsByTechnology'

function TechnologyDetails(props) {
    const projects = findProjectsByTechnology(props.technology)

    return (
        <div>
            <h1>{props.technology}</h1>

            <ProjectsList 
                projects={projects}
                setProject={props.setProject}
                setSection={props.setSection}
            />
        </div>
    )
}

export default TechnologyDetails
