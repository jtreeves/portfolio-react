import { useState } from 'react'
import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Technologies from './sections/Technologies'
import NavBar from './components/NavBar'
import projects from './data/projects'
import './style/main.css'

function App() {
    const [section, setSection] = useState('home')
    const [project, setProject] = useState(projects[0])
    const [technology, setTechnology] = useState()

    return (
        <>
            <NavBar setSection={setSection} />

            {section === 'home' && <Home />}
            {section === 'about' && <About />}
            {section === 'contact' && <Contact />}
            {section === 'resume' && <Resume />}
            
            {section === 'projects' && 
                <Projects 
                    project={project}
                    setProject={setProject}
                />
            }

            {section === 'technologies' && 
                <Technologies 
                    technology={technology}
                    setTechnology={setTechnology} 
                />
            }
        </>
    )
}

export default App
