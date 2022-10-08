import projects from '../data/projects'

function findProjectsByTechnology(term) {
    return projects.filter(project => {
        return project.technologies.includes(term)
    })
}

export default findProjectsByTechnology
