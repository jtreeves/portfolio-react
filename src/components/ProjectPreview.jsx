import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import createProjectPath from '../utilities/createProjectPath'

function ProjectPreview(props) {
    const projectPath = createProjectPath(props.title)

    return (
        <Card>
            <Card.Img 
                variant='top' 
                src={props.image} 
            />

            <Card.Body>
                <Card.Title>
                    {props.title}
                </Card.Title>

                <Link to={projectPath}>
                    <Button variant='primary'>
                        Learn more
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ProjectPreview
