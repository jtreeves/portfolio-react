import { Link } from 'react-router-dom'
import hyphenateWords from '../utilities/hyphenateWords'

function ProjectPreview(props) {
    const projectPath = hyphenateWords(props.title)

    return (
        <div>
            <img 
                src={props.image} 
                alt={props.title}
            />

            <section>
                <h3>
                    {props.title}
                </h3>

                <Link to={projectPath}>
                    <button>
                        Learn more
                    </button>
                </Link>
            </section>
        </div>
    )
}

export default ProjectPreview
