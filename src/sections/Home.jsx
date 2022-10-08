import about from '../data/about'

function Home() {
    return (
        <section id='home'>
            <h1>{about.name}</h1>

            <h2>{about.title}</h2>

            <img 
                src={about.professionalPhoto} 
                alt={about.name}
            />

            <p>{about.tagline}</p>
        </section>
    )
}

export default Home
