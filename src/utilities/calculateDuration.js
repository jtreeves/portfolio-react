function calculateDuration(startDate, endDate) {
    const endExists = !!endDate
    const now = new Date()
    const verifiedEndDate = endExists ? endDate : now
    const durationMs = verifiedEndDate - startDate
    const durationYrs = durationMs / 31556952000

    return durationYrs
}

export default calculateDuration
