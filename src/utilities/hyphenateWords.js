function hyphenateWords(words) {
    const lowerCased = words.toLowerCase()
    const hyphenated = lowerCased.replace(/\s/g, '-')
    const pruned = hyphenated.replace(/[.,!?']/g, '')
    return pruned
}

export default hyphenateWords
