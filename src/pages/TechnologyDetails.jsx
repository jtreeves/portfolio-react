import { useParams } from 'react-router-dom'
import ProjectsList from '../components/ProjectsList'
import findTechnology from '../utilities/findTechnology'
import findProjectsByTechnology from '../utilities/findProjectsByTechnology'

function TechnologyDetails() {
    const params = useParams()
    const name = params.technologyName
    const technology = findTechnology(name)
    const projects = findProjectsByTechnology(technology)

    return (
        <main id='technology-details'>
            <h1>{technology}</h1>

            <ProjectsList 
                projects={projects} 
            />
        </main>
    )
}

export default TechnologyDetails
