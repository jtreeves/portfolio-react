import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBriefcase, faComment, faPaperPlane, faFileAlt } from '@fortawesome/free-solid-svg-icons'


function Home() {
    return (
        <main>
            <h1>Home</h1>
            <FontAwesomeIcon icon={faComment} size='6x' />
            <FontAwesomeIcon icon={faPaperPlane} size='6x' />
            <FontAwesomeIcon icon={faBriefcase} size='6x' />
            <FontAwesomeIcon icon={faFileAlt} size='6x' />
        </main>
    )
}

export default Home
