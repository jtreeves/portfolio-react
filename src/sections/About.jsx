import FavoritesList from '../components/FavoritesList'
import about from '../data/about'
import '../styles/about.css'

function About(props) {
    const bio = about.bio.map((paragraph, index) => {
        return (
            <p key={index}>
                {paragraph}
            </p>
        )
    })

    return (
        <section id='about' ref={props.domNode}>
            <h1>About</h1>

            <div id='about-content'>
                <img 
                    src={about.casualPhoto} 
                    alt={about.name}
                />

                <article>
                    <div id='bio'>
                        {bio}
                    </div>

                    <FavoritesList 
                        favorites={about.favorites.books} 
                        type='books' 
                    />

                    <FavoritesList 
                        favorites={about.favorites.movies} 
                        type='movies' 
                    />
                </article>
            </div>
        </section>
    )
}

export default About
