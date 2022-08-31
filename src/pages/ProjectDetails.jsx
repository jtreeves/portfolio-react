import { useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import findProject from '../utilities/findProject'

function ProjectDetails() {
    const location = useLocation()
    const path = location.pathname
    const project = findProject(path)

    return (
        <main id='project-details'>
            <h1>{project.title}</h1>

            <p>{project.description}</p>

            <img 
                src={project.image} 
                alt={project.title}
            />

            <article>
                <a 
                    href={project.deploymentLink}
                    target='_blank'
                    rel='noreferrer'
                >
                    <Button variant='primary'>
                        View deployed {project.type}
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
            </article>
        </main>
    )
}

export default ProjectDetails
