import projects from '../data/projects'

function findProjectsByTechnology(term) {
    const filteredProjects = projects.filter(project => {
        return project.technologies.includes(term)
    })
    return filteredProjects
}

export default findProjectsByTechnology
