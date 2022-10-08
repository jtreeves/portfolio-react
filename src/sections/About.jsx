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
        </section>
    )
}

export default About
