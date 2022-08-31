import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import findProject from '../utilities/findProject'

function ProjectDetails() {
    const location = useLocation()
    const path = location.pathname
    const project = findProject(path)

    return (
        <main>
            <h1>{project.title}</h1>

            <img src={project.image} alt={project.title} />

            <p>{project.description}</p>

            <a 
                href={project.deploymentLink}
                target='_blank'
                rel='noreferrer'
            >
                <Button variant='primary'>
                    View deployed site
                </Button>
            </a>

            <a 
                href={project.repositoryLink}
                target='_blank'
                rel='noreferrer'
            >
                <Button variant='primary'>
                    View code
                </Button>
            </a>
        </main>
    )
}

export default ProjectDetails
