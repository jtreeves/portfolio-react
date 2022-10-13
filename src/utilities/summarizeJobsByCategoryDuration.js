import resume from '../data/resume'
import calculateDuration from './calculateDuration'
import capitalizeWord from './capitalizeWord'
import findUniqueCategories from './findUniqueCategories'

function summarizeJobsByCategoryDuration() {
    const uniqueCategories = findUniqueCategories()

    const categories = uniqueCategories.map(category => {
        return {
            name: category
        }
    })

    resume.jobs.forEach(job => {
        const categoryIndex = categories.findIndex(c => c.name === job.category)
        const duration = calculateDuration(job.startDate, job.endDate)

        if (!categories[categoryIndex].duration) {
            categories[categoryIndex].duration = duration
        } else {
            categories[categoryIndex].duration += duration
        }
    })

    const finalCategories = categories.map(category => {
        return {
            name: capitalizeWord(category.name),
            duration: Math.round(category.duration * 100) / 100
        }
    })

    return finalCategories
}

export default summarizeJobsByCategoryDuration
