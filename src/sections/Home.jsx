import person from '../data/person'

function Home() {
    return (
        <section id='home'>
            <h1>{person.name}</h1>

            <h2>{person.title}</h2>

            <img 
                src={person.professionalPhoto} 
                alt={person.name}
            />

            <p>{person.tagline}</p>
        </section>
    )
}

export default Home
