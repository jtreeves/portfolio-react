import about from '../data/about'
import '../styles/home.css'

function Home(props) {
    return (
        <section id='home' ref={props.domNode}>
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
