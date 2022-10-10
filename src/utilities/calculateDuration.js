function calculateDuration(startDate, endDate) {
    const endExists = !!endDate
    const now = new Date()
    const verifiedEndDate = endExists ? endDate : now
    const duration = verifiedEndDate - startDate

    return duration
}

export default calculateDuration
