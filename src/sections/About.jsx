import FavoritesList from '../components/FavoritesList'
import about from '../data/about'

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

            <div>
                <img 
                    src={about.casualPhoto} 
                    alt={about.name}
                />

                <article>
                    {bio}
                </article>
            </div>

            <h3>Favorite Books</h3>

            <FavoritesList favorites={about.favorites.books} />

            <h3>Favorite Movies</h3>

            <FavoritesList favorites={about.favorites.movies} />
        </section>
    )
}

export default About
