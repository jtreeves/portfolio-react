import '../styles/projects.css'

function ProjectPreview(props) {
    return (
        <li 
            onClick={props.setter}
            className='project-preview'
            title='Click to learn more about this project'
        >
            <img 
                src={props.image} 
                alt={props.title}
            />

            <h3>
                {props.title}
            </h3>
        </li>
    )
}

export default ProjectPreview
