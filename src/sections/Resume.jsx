import resume from '../data/resume'

function Resume() {
    const jobs = resume.jobs.map((job, index) => {
        const startDate = job.startDate.toLocaleString('default', { month: 'long' }) + ' ' + job.startDate.getFullYear()
        const endDate = job.endDate ? job.endDate.toLocaleString('default', { month: 'long' }) + ' ' + job.endDate.getFullYear() : 'present'

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
        <section id='resume'>
            <h1>Resume</h1>

            <p>
                Click the link to download <a href='/Jackson_Reeves_Resume.pdf' download>my resume</a>.
            </p>

            <h2>Experience</h2>

            <ul>
                {jobs}
            </ul>

            <h2>Reviews</h2>

            <ul>
                {feedback}
            </ul>
        </section>
    )
}

export default Resume
