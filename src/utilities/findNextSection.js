import sections from '../data/sections'

function findNextSection(currentSectionName) {
    let currentIndex = -1

    sections.forEach((section, index) => {
        if (section.name === currentSectionName) {
            currentIndex = index
        }
    })
    
    const nextIndex = currentIndex + 1
    const lengthOfSections = sections.length

    if (nextIndex < lengthOfSections) {
        return sections[nextIndex].name
    } else {
        return 'home'
    }
}

export default findNextSection
