import ProjectPreview from './ProjectPreview'

function ProjectsList(props) {
    const projectCards = props.projects.map(project => {
        return (
            <li>
                <ProjectPreview 
                    title={project.title}
                    image={project.image}
                />
            </li>
        )
    })

    return (
        <ul>
            {projectCards}
        </ul>
    )
}

export default ProjectsList
