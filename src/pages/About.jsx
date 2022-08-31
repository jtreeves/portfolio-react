import person from '../data/person'

function About() {
    const bio = person.bio.map(paragraph => {
        return (
            <p>{paragraph}</p>
        )
    })

    return (
        <main id='about'>
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
        </main>
    )
}

export default About
