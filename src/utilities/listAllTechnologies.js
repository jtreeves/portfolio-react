import projects from '../data/projects'

function listAllTechnologies() {
    const technologyArrays = projects.map(project => {
        return project.technologies
    })
    const technologiesArray = technologyArrays.flat()
    const uniqueTechnologies = [...new Set(technologiesArray)]
    const sortedTechnologies = uniqueTechnologies.sort()
    
    return sortedTechnologies
}

export default listAllTechnologies
