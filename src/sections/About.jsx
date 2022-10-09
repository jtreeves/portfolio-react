import FavoritesList from '../components/FavoritesList'
import about from '../data/about'
import '../styles/about.css'

function About() {
    const bio = about.bio.map((paragraph, index) => {
        return (
            <p key={index}>
                {paragraph}
            </p>
        )
    })

    return (
        <section id='about'>
            <h1>About</h1>

            <img 
                src={about.casualPhoto} 
                alt={about.name}
            />

            <article>
                {bio}
            </article>

            <FavoritesList 
                favorites={about.favorites.books} 
                type='books' 
            />

            <FavoritesList 
                favorites={about.favorites.movies} 
                type='movies' 
            />
        </section>
    )
}

export default About
