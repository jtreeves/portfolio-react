import { useState } from 'react'
import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Technologies from './sections/Technologies'
import NavBar from './components/NavBar'
import projects from './data/projects'
import listAllTechnologies from './utilities/listAllTechnologies'
import './style/main.css'

function App() {
    const [section, setSection] = useState('home')
    const [project, setProject] = useState(projects[0])
    const [technology, setTechnology] = useState(listAllTechnologies()[0])
    console.log('SECTION: ', section)
    console.log('PROJECT: ', project)
    console.log('TECHNOLOGY: ', technology)

    return (
        <>
            <NavBar 
                setSection={setSection} 
            />

            {section === 'home' && <Home />}
            {section === 'about' && <About />}
            {section === 'contact' && <Contact />}
            {section === 'resume' && <Resume />}

            {section === 'projects' && 
                <Projects 
                    project={project}
                    setProject={setProject}
                    setTechnology={setTechnology}
                    setSection={setSection}
                />
            }

            {section === 'technologies' && 
                <Technologies 
                    technology={technology}
                    setTechnology={setTechnology} 
                    setProject={setProject}
                    setSection={setSection}
                />
            }
        </>
    )
}

export default App
