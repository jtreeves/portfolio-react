import ProjectsList from './ProjectsList'
import findProjectsByTechnology from '../utilities/findProjectsByTechnology'

function TechnologyDetails(props) {
    const projects = findProjectsByTechnology()

    return (
        <div>
            <h1>{props.technology}</h1>

            <ProjectsList 
                projects={projects}
            />
        </div>
    )
}

export default TechnologyDetails
