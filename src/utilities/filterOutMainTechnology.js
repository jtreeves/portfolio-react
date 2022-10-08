import listAllTechnologies from './listAllTechnologies'

function filterOutMainTechnology(technologyTerm) {
    const technologies = listAllTechnologies()

    return technologies.filter(technology => {
        return technology !== technologyTerm
    })
}

export default filterOutMainTechnology
