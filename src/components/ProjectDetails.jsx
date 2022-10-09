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
        <div>
            <h2>{props.project.title}</h2>

            <p>{props.project.description}</p>

            <img 
                src={props.project.image} 
                alt={props.project.title}
            />

            <p>{props.project.inspiration}</p>

            <ul>
                <h3>Features</h3>

                {features}
            </ul>

            <span>{formatDate(props.project.date)}</span>

            <article>
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
            </article>

            <TechnologiesList 
                technologies={props.project.technologies}
                setTechnology={props.setTechnology}
                setSection={props.setSection}
            />
        </div>
    )
}

export default ProjectDetails
