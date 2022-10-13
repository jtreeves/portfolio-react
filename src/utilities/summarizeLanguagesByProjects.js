import countProjectsUsingTechnology from './countProjectsUsingTechnology'

function summarizeLanguagesByProjects(languages) {
    const summaries = languages.map(language => {
        return {
            name: language,
            projects: countProjectsUsingTechnology(language)
        }
    })

    return summaries
}

export default summarizeLanguagesByProjects
