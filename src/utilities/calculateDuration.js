function calculateDuration(startDate, endDate) {
    const present = !endDate
    const now = new Date()
    const verifiedEndDate = !present ? endDate : now
    const duration = verifiedEndDate - startDate

    return duration
}

export default calculateDuration
