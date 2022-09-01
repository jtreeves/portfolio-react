import hyphenateWords from './hyphenateWords'

function createPath(name, type) {
    const hyphenatedName = hyphenateWords(name)
    const path = '/' + type + '/' + hyphenatedName
    return path
}

export default createPath
