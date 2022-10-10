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

            <h2>
                {props.title}
            </h2>
        </li>
    )
}

export default ProjectPreview
