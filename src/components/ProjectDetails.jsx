import TechnologiesList from './TechnologiesList'
import formatDate from '../utilities/formatDate'
import '../styles/projects.css'

function ProjectDetails(props) {
    const features = props.project.features.map((feature, index) => {
        return (
            <li key={index}>
                {feature}
            </li>
        )
    })

    return (
        <div id='project-details'>
            <p>{props.project.description}</p>

            <div>
                <img 
                    src={props.project.image} 
                    alt={props.project.title}
                    title='Screenshot of the project'
                />
            
                <article>
                    <p>{props.project.inspiration}</p>
                    <h3>Features</h3>
                    <ul>{features}</ul>

                    <div>
                        <span>{formatDate(props.project.date)}</span>
                        <a 
                            href={props.project.deploymentLink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button>
                                View deployed {props.project.type}
                            </button>
                        </a>

                        <a 
                            href={props.project.repositoryLink}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <button>
                                View code
                            </button>
                        </a>
                    </div>

                    <h3>Technologies Used By This Project</h3>

                    <TechnologiesList 
                        technologies={props.project.technologies}
                        setTechnology={props.setTechnology}
                        setSection={props.setSection}
                    />
                </article>
            </div>
        </div>
    )
}

export default ProjectDetails
