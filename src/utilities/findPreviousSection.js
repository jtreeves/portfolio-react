import sections from '../data/sections'

function findPreviousSection(currentSectionName) {
    let currentIndex = -1

    sections.forEach((section, index) => {
        if (section.name === currentSectionName) {
            currentIndex = index
        }
    })

    const previousIndex = currentIndex - 1

    if (previousIndex >= 0) {
        return sections[previousIndex].name
    } else {
        return 'home'
    }
}

export default findPreviousSection
