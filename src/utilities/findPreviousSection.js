import sections from '../data/sections'

function findPreviousSection(currentSection) {
    const currentIndex = sections.indexOf(currentSection)
    const previousIndex = currentIndex - 1

    if (previousIndex >= 0) {
        return sections[previousIndex]
    } else {
        return 'home'
    }
}

export default findPreviousSection
