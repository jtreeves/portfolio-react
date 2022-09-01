import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import TechnologiesList from '../components/TechnologiesList'
import findProject from '../utilities/findProject'

function ProjectDetails() {
    const params = useParams()
    const name = params.projectName
    const project = findProject(name)

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

            <TechnologiesList 
                technologies={project.technologies}
            />
        </main>
    )
}

export default ProjectDetails
