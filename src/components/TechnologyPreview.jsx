import '../styles/technologies.css'

function TechnologyPreview(props) {
    return (
        <li>
            <button onClick={props.setter}>
                {props.technology}
            </button>
        </li>
    )
}

export default TechnologyPreview
