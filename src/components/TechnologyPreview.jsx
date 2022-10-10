import '../styles/technologies.css'

function TechnologyPreview(props) {
    return (
        <li>
            <button 
                onClick={props.setter}
                title='Click to see what projects I have built using this technology'
            >
                {props.technology}
            </button>
        </li>
    )
}

export default TechnologyPreview
