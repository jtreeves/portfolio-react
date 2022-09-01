import ProjectPreview from './ProjectPreview'

function ProjectsList(props) {
    const projectCards = props.projects.map((project, index) => {
        return (
            <li key={index}>
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
