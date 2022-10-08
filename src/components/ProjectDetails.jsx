import TechnologiesList from './TechnologiesList'

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
            <h1>{props.project.title}</h1>

            <p>{props.project.description}</p>

            <p>{props.project.inspiration}</p>

            <img 
                src={props.project.image} 
                alt={props.project.title}
            />

            <ul>
                {features}
            </ul>

            <span>{props.project.date}</span>

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
