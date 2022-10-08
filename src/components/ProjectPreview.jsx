function ProjectPreview(props) {
    return (
        <li>
            <img 
                src={props.image} 
                alt={props.title}
            />

            <section>
                <h3>
                    {props.title}
                </h3>

                <button onClick={props.setter}>
                    Learn more
                </button>
            </section>
        </li>
    )
}

export default ProjectPreview
