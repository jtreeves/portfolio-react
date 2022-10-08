import projects from '../data/projects'

function sortProjects(criteria) {
    switch(criteria) {
        case 'alpha-asc':
            return projects.sort((a, b) => a.title - b.title)
        case 'alpha-desc':
            return projects.sort((a, b) => b.title - a.title)
        case 'chrono-asc':
            return projects.sort((a, b) => Number(a.date) - Number(b.date))
        case 'chrono-desc':
            return projects.sort((a, b) => Number(b.date) - Number(a.date))
        default:
            return projects.sort((a, b) => Number(b.date) - Number(a.date))
    }
}

export default sortProjects
