import resume from '../data/resume'
import calculateDuration from './calculateDuration'
import capitalizeWord from './capitalizeWord'
import findUniqueCategories from './findUniqueCategories'

function summarizeJobsByCategoryDuration() {
    let total = 0

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

    categories.forEach(category => {
        total += category.duration
    })

    categories.forEach(category => {
        category.percentage = category.duration / total
    })

    const finalCategories = categories.map(category => {
        return {
            name: capitalizeWord(category.name),
            percentage: Math.round(category.percentage * 10000) / 100
        }
    })

    return finalCategories
}

export default summarizeJobsByCategoryDuration
