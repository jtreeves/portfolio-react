import ProjectsList from '../components/ProjectsList'
import projects from '../data/projects'

function Projects() {
    return (
        <section id='projects'>
            <h1>Projects</h1>

            <ProjectsList 
                projects={projects} 
            />
        </section>
    )
}

export default Projects
