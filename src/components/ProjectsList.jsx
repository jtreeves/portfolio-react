import ProjectPreview from './ProjectPreview'

function ProjectsList(props) {
    const projectCards = props.projects.map((project, index) => {
        const setter = () => {
            props.setProject(project)
            props.setSection('projects')
            window.scrollTo({ top: 0 })
        }

        return (
            <ProjectPreview 
                key={index}
                title={project.title}
                image={project.image}
                setter={setter}
            />
        )
    })

    return (
        <ul>
            {projectCards}
        </ul>
    )
}

export default ProjectsList
