import ProjectDetails from '../components/ProjectDetails'
import ProjectsList from '../components/ProjectsList'
import allProjects from '../data/projects'
import filterOutMainProject from '../utilities/filterOutMainProject'

function Projects(props) {
    const projects = props.project ? filterOutMainProject(props.project.title) : allProjects

    return (
        <section id='projects' ref={props.domNode}>
            <h1>Projects</h1>

            {props.project && <ProjectDetails 
                project={props.project}
                setTechnology={props.setTechnology}
                setSection={props.setSection}
            />}

            {props.project && <h2>Other Projects</h2>}

            <ProjectsList 
                projects={projects} 
                setProject={props.setProject}
                setSection={props.setSection}
            />
        </section>
    )
}

export default Projects
