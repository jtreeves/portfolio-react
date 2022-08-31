import hyphenateWords from './hyphenateWords'

function createProjectPath(words) {
    const title = hyphenateWords(words)
    const projects = 'projects'
    const path = projects + '/' + title
    return path
}

export default createProjectPath
