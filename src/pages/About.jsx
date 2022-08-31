import person from '../data/person'

function About() {
    return (
        <main>
            <h1>About</h1>

            <img 
                src={person.photo} 
                alt={person.name} 
                className='profile-picture'
            />
            
            <p>{person.bio}</p>
        </main>
    )
}

export default About
