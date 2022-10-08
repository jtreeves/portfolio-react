import ProjectsList from '../components/ProjectsList'
import projects from '../data/projects'

function Projects() {
    return (
        <main id='projects'>
            <h1>Projects</h1>

            <ProjectsList 
                projects={projects} 
            />
        </main>
    )
}

export default Projects
