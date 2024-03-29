import about from '../data/about'
import '../styles/home.css'

function Home() {
    return (
        <section id='home'>
            <h1>{about.name}</h1>

            <img 
                src={about.professionalPhoto} 
                alt={about.name}
            />

            <h2>{about.title}</h2>
            
            <p>{about.tagline}</p>
        </section>
    )
}

export default Home
