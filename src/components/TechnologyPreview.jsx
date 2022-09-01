import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import createPath from '../utilities/createPath'

function TechnologyPreview(props) {
    const technologyPath = createPath(props.technology, 'technologies')

    return (
        <Link to={technologyPath}>
            <Button variant='secondary'>
                {props.technology}
            </Button>
        </Link>
    )
}

export default TechnologyPreview
