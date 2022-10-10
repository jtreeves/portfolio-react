import resume from '../data/resume'

function findUniqueCategories() {
    const allCategories = resume.jobs.map(job => {
        return job.category
    })
    const uniqueCategories = [...new Set(allCategories)]

    return uniqueCategories
}

export default findUniqueCategories
