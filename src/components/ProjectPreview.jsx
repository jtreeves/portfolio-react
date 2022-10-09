function ProjectPreview(props) {
    return (
        <li>
            <img 
                src={props.image} 
                alt={props.title}
            />

            <article>
                <h3>
                    {props.title}
                </h3>

                <button onClick={props.setter}>
                    Learn more
                </button>
            </article>
        </li>
    )
}

export default ProjectPreview
