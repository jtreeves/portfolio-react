import {
    PieChart,
    Pie,
    Cell,
    Legend,
    Tooltip
} from 'recharts'
import generateRandomColors from '../utilities/generateRandomColors'
import summarizeJobsByCategoryDuration from '../utilities/summarizeJobsByCategoryDuration'

function IndustriesChart() {
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
        <div className='chart'>
            <h2>Industries</h2>

            <p>how many years I have spent in each industry</p>

            <PieChart 
                width={300} 
                height={200}
                margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
            >
                <Pie 
                    data={categoryDurations} 
                    dataKey='duration' 
                    nameKey='name' 
                    cx='50%' 
                    cy='50%' 
                    outerRadius={75} 
                >
                    {cells}
                </Pie>

                <Legend />
                <Tooltip />
            </PieChart>
        </div>
    )
}

export default IndustriesChart
