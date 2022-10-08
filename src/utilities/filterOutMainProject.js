import projects from '../data/projects'

function filterOutMainProject(projectTitle) {
    return projects.filter(project => {
        return project.title !== projectTitle
    })
}

export default filterOutMainProject
