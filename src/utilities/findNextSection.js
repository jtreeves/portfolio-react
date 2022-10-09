import sections from '../data/sections'

function findNextSection(currentSection) {
    const currentIndex = sections.indexOf(currentSection)
    const nextIndex = currentIndex + 1
    const lengthOfSections = sections.length

    if (nextIndex < lengthOfSections) {
        return sections[nextIndex]
    } else {
        return 'home'
    }
}

export default findNextSection
