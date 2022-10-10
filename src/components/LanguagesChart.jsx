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
        <div className='chart'>
            <h2>Languages</h2>

            <p>how many projects I have built in each language</p>
            
            <BarChart
                width={300}
                height={200}
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
        </div>
    )
}

export default LanguagesChart
