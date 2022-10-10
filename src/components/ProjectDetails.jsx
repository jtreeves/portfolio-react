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
            <img 
                src={props.project.image} 
                alt={props.project.title}
                title='Screenshot of the project'
            />
        
            <article>
                <h2>{props.project.title}</h2>

                <p id='project-description'>{props.project.description}</p>

                <div id='project-inspiration'>
                    <h3>Inspiration</h3>

                    <p>{props.project.inspiration}</p>
                </div>

                <div id='project-features'>
                    <h3>Features</h3>

                    <ul id='features'>{features}</ul>
                </div>

                <div id='project-technologies'>
                    <h3>Technologies</h3>

                    <TechnologiesList 
                        technologies={props.project.technologies}
                        setTechnology={props.setTechnology}
                        setSection={props.setSection}
                    />
                </div>
                
                <div id='project-links'>
                    <h3>Links</h3>

                    <span id='link-buttons'>
                        <a 
                            href={props.project.deploymentLink}
                            target='_blank'
                            rel='noreferrer'
                            className='link-button'
                        >
                            View deployed {props.project.type}
                        </a>

                        <a 
                            href={props.project.repositoryLink}
                            target='_blank'
                            rel='noreferrer'
                            className='link-button'
                        >
                            View code
                        </a>
                    </span>
                </div>

                <span id='project-date'>{formatDate(props.project.date)}</span>
            </article>
        </div>
    )
}

export default ProjectDetails
