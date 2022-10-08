function ProjectDetails(props) {
    return (
        <div id='project-details'>
            <h1>{props.project.title}</h1>

            <p>{props.project.description}</p>

            <img 
                src={props.project.image} 
                alt={props.project.title}
            />

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
        </div>
    )
}

export default ProjectDetails
