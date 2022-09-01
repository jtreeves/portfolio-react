import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faComment, faPaperPlane, faFileAlt, faTools } from '@fortawesome/free-solid-svg-icons'
import person from '../data/person'

function Home() {
    return (
        <main id='home'>
            <h1>{person.name}</h1>

            <h2>{person.title}</h2>

            <img 
                src={person.professionalPhoto} 
                alt={person.name}
            />

            <p>{person.tagline}</p>

            <article>
                <Link 
                    to='/about' 
                    className='linked-icons'
                >
                    <FontAwesomeIcon 
                        icon={faComment} 
                        size='6x' 
                    />

                    <p>about</p>
                </Link>

                <Link 
                    to='/contact'
                    className='linked-icons'
                >
                    <FontAwesomeIcon 
                        icon={faPaperPlane} 
                        size='6x' 
                    />

                    <p>contact</p>
                </Link>

                <Link 
                    to='/resume'
                    className='linked-icons'
                >
                    <FontAwesomeIcon 
                        icon={faFileAlt} 
                        size='6x' 
                    />

                    <p>resume</p>
                </Link>

                <Link 
                    to='/projects'
                    className='linked-icons'
                >
                    <FontAwesomeIcon 
                        icon={faBriefcase} 
                        size='6x' 
                    />

                    <p>projects</p>
                </Link>

                <Link 
                    to='/technologies'
                    className='linked-icons'
                >
                    <FontAwesomeIcon 
                        icon={faTools} 
                        size='6x' 
                    />

                    <p>technologies</p>
                </Link>
            </article>
        </main>
    )
}

export default Home
