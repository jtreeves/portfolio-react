function TechnologyPreview(props) {
    return (
        <button onClick={props.setter}>
            {props.technology}
        </button>
    )
}

export default TechnologyPreview
