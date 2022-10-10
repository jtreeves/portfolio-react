import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip
} from 'recharts'
import generateRandomColors from '../utilities/generateRandomColors'
import summarizeJobsByCategoryDuration from '../utilities/summarizeJobsByCategoryDuration'

function ExperienceChart() {
    const categoryDurations = summarizeJobsByCategoryDuration()
    const colors = generateRandomColors(categoryDurations.length)

    const cells = colors.map((color, index) => {
        return (
            <Cell 
                key={`color-cell-${index}`}
                fill={color}
            />
        )
    })

    return (
        <PieChart 
            width={400} 
            height={300}
            margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
        >
            <Pie 
                data={categoryDurations} 
                dataKey='percentage' 
                nameKey='name' 
                cx='50%' 
                cy='50%' 
                outerRadius={100} 
            >
                {cells}
            </Pie>

            <Legend />
            <Tooltip />
        </PieChart>
    )
}

export default ExperienceChart
