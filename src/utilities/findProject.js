import hyphenateWords from './hyphenateWords'
import projects from '../data/projects'

function findProject(path) {
    const title = path.replace('/projects/', '')
    const filteredProjects = projects.filter(project => {
        const currentTitle = hyphenateWords(project.title)
        return currentTitle === title
    })
    const result = filteredProjects[0]
    return result
}

export default findProject
