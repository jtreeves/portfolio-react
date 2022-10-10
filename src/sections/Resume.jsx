import LanguagesChart from '../components/LanguagesChart'
import resume from '../data/resume'
import formatDate from '../utilities/formatDate'
import '../styles/resume.css'

function Resume(props) {
    const jobs = resume.jobs.map((job, index) => {
        const startDate = formatDate(job.startDate)
        const endDate = job.endDate ? formatDate(job.endDate) : 'present'

        return (
            <li key={index}>
                {job.position} at {job.company} ({startDate}-{endDate})
            </li>
        )
    })

    const feedback = resume.feedback.map((testimonial, index) => {
        return (
            <li key={index}>
                {testimonial.quote} - {testimonial.name} ({testimonial.company})
            </li>
        )
    })

    return (
        <section id='resume' ref={props.domNode}>
            <h1>Resume</h1>

            <p>
                Click the link to download <a href='/Jackson_Reeves_Resume.pdf' download>my resume</a>.
            </p>

            <ul>
                <h2>Experience</h2>

                {jobs}
            </ul>

            <ul>
                <h2>Reviews</h2>

                {feedback}
            </ul>

            <LanguagesChart />
        </section>
    )
}

export default Resume
