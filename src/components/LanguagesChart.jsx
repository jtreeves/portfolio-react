import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Cell
} from 'recharts'
import resume from '../data/resume'

function LanguagesChart() {
    const cells = resume.languages.map((language, index) => {
        return (
            <Cell 
                key={`language-cell-${index}`} 
                fill={language.color}
            />
        )
    })

    return (
        <BarChart
            width={400}
            height={300}
            data={resume.languages}
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
    )
}

export default LanguagesChart
