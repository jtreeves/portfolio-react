import ProjectDetails from '../components/ProjectDetails'
import ProjectsList from '../components/ProjectsList'
import filterOutMainProject from '../utilities/filterOutMainProject'

function Projects(props) {
    return (
        <section id='projects'>
            <h1>Projects</h1>

            <ProjectDetails 
                project={props.project}
                setTechnology={props.setTechnology}
                setSection={props.setSection}
            />

            <ProjectsList 
                projects={filterOutMainProject(props.project.title)} 
                setProject={props.setProject}
                setSection={props.setSection}
            />
        </section>
    )
}

export default Projects
