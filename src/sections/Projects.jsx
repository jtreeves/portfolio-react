import ProjectDetails from '../components/ProjectDetails'
import ProjectsList from '../components/ProjectsList'
import filterOutMainProject from '../utilities/filterOutMainProject'

function Projects(props) {
    return (
        <section id='projects'>
            <h1>Projects</h1>

            <ProjectDetails 
                project={props.project}
            />

            <ProjectsList 
                projects={filterOutMainProject(props.project.title)} 
                setProject={props.setProject}
            />
        </section>
    )
}

export default Projects
