import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
import LanguagesChart from '../components/LanguagesChart'
import ExperienceChart from '../components/ExperienceChart'
import '../styles/resume.css'

function Resume(props) {
    return (
        <section id='resume' ref={props.domNode}>
            <h1>Resume</h1>

            <article>
                <LanguagesChart />

                <ExperienceChart />
            </article>
            
            <a 
                href='/Jackson_Reeves_Resume.pdf' 
                download
            >
                <FontAwesomeIcon 
                    icon={faFilePdf} 
                    size='10x' 
                    title='Download my resume'
                />
            </a>
        </section>
    )
}

export default Resume
