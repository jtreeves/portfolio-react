import LanguagesChart from '../components/LanguagesChart'
import IndustriesChart from '../components/IndustriesChart'
import '../styles/resume.css'
import SkillsChart from '../components/SkillsChart'
import resume from '../data/resume'
import Feedback from '../components/Feedback'

function Resume(props) {
    const feedback = resume.feedback.map((item, index) => {
        return (
            <Feedback 
                key={index}
                quote={item.quote}
                name={item.name}
                company={item.company}
            />
        )
    })

    return (
        <section id='resume'>
            <h1>Resume</h1>

            <p>If you'd like to learn more about my work, feel free to <a href='/Jackson_Reeves_Resume.pdf' download>download my resume</a>, check out some graphical analyses of my experiences, or read some reviews from fellow developers.</p>

            <article>
                <LanguagesChart />

                <IndustriesChart />

                <SkillsChart />
            </article>

            <h2>Reviews</h2>
            
            {feedback}
        </section>
    )
}

export default Resume
