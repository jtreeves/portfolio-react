import { useParams } from 'react-router-dom'
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
                    <button>
                        View deployed {project.type}
                    </button>
                </a>

                <a 
                    href={project.repositoryLink}
                    target='_blank'
                    rel='noreferrer'
                >
                    <button>
                        View code
                    </button>
                </a>
            </article>
        </main>
    )
}

export default ProjectDetails
