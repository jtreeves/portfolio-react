import listAllTechnologies from './listAllTechnologies'
import hyphenateWords from './hyphenateWords'

function findTechnology(term) {
    const allTechnologies = listAllTechnologies()
    const filteredTechnologies = allTechnologies.filter(technology => {
        const currentTerm = hyphenateWords(technology)
        return currentTerm === term
    })
    const result = filteredTechnologies[0]
    return result
}

export default findTechnology
