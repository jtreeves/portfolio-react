import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell
} from 'recharts'
import summarizeLanguagesByProjects from '../utilities/summarizeLanguagesByProjects'
import generateRandomColors from '../utilities/generateRandomColors'

function LanguagesChart() {
    const languages = ['JavaScript', 'Python', 'Ruby']
    const summaries = summarizeLanguagesByProjects(languages)
    const colors = generateRandomColors(summaries.length)

    const cells = colors.map((color, index) => {
        return (
            <Cell 
                key={`language-cell-${index}`} 
                fill={color.color}
            />
        )
    })

    return (
        <div className='chart'>
            <h2>Languages</h2>

            <p>how many projects I have built in each language</p>
            
            <BarChart
                width={300}
                height={200}
                data={summaries}
                margin={{ top: 0, left: 0, right: 0, bottom: 0 }}
            >
                <XAxis dataKey='name' />

                <YAxis label={{ value: 'projects', angle: -90, position: 'insideLeft' }} />

                <CartesianGrid strokeDasharray='3 3' />

                <Bar 
                    dataKey='projects' 
                    background={{ fill: '#ddd' }}
                    strokeWidth={1}
                >
                    {cells}
                </Bar>
            </BarChart>
        </div>
    )
}

export default LanguagesChart
