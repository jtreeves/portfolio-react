import TechnologiesList from '../components/TechnologiesList'
import listAllTechnologies from '../utilities/listAllTechnologies'

function Technologies() {
    const technologies = listAllTechnologies()

    return (
        <main id='technologies'>
            <h1>Technologies</h1>

            <TechnologiesList 
                technologies={technologies} 
            />
        </main>
    )
}

export default Technologies
