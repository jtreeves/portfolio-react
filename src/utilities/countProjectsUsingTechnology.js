import projects from '../data/projects'

function countProjectsUsingTechnology(technologyTerm) {
    let count = 0

    projects.forEach(project => {
        if (project.technologies.some(technology => technology === technologyTerm)) {
            count++
        }
    })

    return count
}

export default countProjectsUsingTechnology
