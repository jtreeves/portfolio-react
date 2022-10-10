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
                key={`cell-${index}`} 
                fill={language.color}
            />
        )
    })

    return (
        <BarChart
            width={500}
            height={400}
            data={resume.languages}
            margin={{ 
                top: 20, 
                right: 20, 
                left: 20, 
                bottom: 5
            }}
        >
            <XAxis 
                dataKey='name'
            />

            <YAxis 
                label={{ 
                    value: 'projects', 
                    position: 'insideLeft',
                    angle: -90
                }} 
            />

            <CartesianGrid 
                strokeDasharray='3 3' 
            />

            <Bar 
                dataKey='projects' 
                fill='#06063F' 
                background={{ fill: '#eee' }}
                strokeWidth={1}
            >
                {cells}
            </Bar>
        </BarChart>
    )
}

export default LanguagesChart
