import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar
} from 'recharts'
import resume from '../data/resume'
import colors from '../data/colors'

function SkillsChart() {
    return (
        <div className='chart'>
            <h2>Skills</h2>

            <p>how strong I am with each skill</p>

            <RadarChart 
                data={resume.skills}
                cx='50%'
                cy='50%'
                outerRadius={75}
                width={300}
                height={200}
            >
                <PolarGrid />

                <PolarAngleAxis 
                    dataKey='name' 
                />

                <PolarRadiusAxis 
                    tickCount={6} 
                    domain={[0, 5]} 
                />

                <Radar 
                    dataKey='value' 
                    stroke={colors[2]}
                    fill={colors[2]} 
                    fillOpacity={0.6} 
                />
            </RadarChart>
        </div>
    )
}

export default SkillsChart
