import person from '../data/person'

function About() {
    const bio = person.bio.map((paragraph, index) => {
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
                    src={person.casualPhoto} 
                    alt={person.name}
                />

                <article>
                    {bio}
                </article>
            </div>
        </section>
    )
}

export default About
