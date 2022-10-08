import { useState } from 'react'
import ProjectDetails from '../components/ProjectDetails'
import ProjectsList from '../components/ProjectsList'
import projects from '../data/projects'
import filterOutMainProject from '../utilities/filterOutMainProject'

function Projects() {
    const [project, setProject] = useState(projects[0])

    return (
        <section id='projects'>
            <h1>Projects</h1>

            <ProjectDetails 
                project={project}
            />

            <ProjectsList 
                projects={filterOutMainProject(project.title)} 
                setProject={setProject}
            />
        </section>
    )
}

export default Projects
