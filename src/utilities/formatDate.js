function formatDate(date) {
    const month = date.toLocaleString('default', { month: 'long' })
    const year = date.getFullYear()
    const result = month + ' ' + year
    
    return result
}

export default formatDate
