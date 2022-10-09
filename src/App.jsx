import { useState, useRef, useEffect } from 'react'
import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import Technologies from './sections/Technologies'
import NavBar from './components/NavBar'
import findNextSection from './utilities/findNextSection'
import findPreviousSection from './utilities/findPreviousSection'
import './styles/main.css'

function App() {
    const [section, setSection] = useState('home')
    const [project, setProject] = useState(null)
    const [technology, setTechnology] = useState(null)
    const active = useRef(null)

    const clearProjectAndTechnology = () => {
        setProject(null)
        setTechnology(null)
    }

    useEffect(() => {
        const onScroll = () => {
            console.log('ACTIVE', active.current)
            console.log('HEIGHT', active.current.scrollHeight)
            const scrollY = window.scrollY
            const innerHeight = window.innerHeight
            const scrollHeight = active.current.scrollHeight

            if (scrollY + innerHeight > scrollHeight && scrollY > 0) {
                setSection(findNextSection(section))
                window.scrollTo({ top: 0 })
            }
            
            if (scrollY < 0) {
                setSection(findPreviousSection(section))
                window.scrollTo({ top: 0 })
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [active, section])

    return (
        <>
            <NavBar 
                setSection={setSection} 
                clearProjectAndTechnology={clearProjectAndTechnology}
            />

            {section === 'home' && <Home active={active} />}
            {section === 'about' && <About active={active} />}
            {section === 'contact' && <Contact active={active} />}
            {section === 'resume' && <Resume active={active} />}

            {section === 'projects' && 
                <Projects 
                    active={active}
                    project={project}
                    setProject={setProject}
                    setTechnology={setTechnology}
                    setSection={setSection}
                />
            }

            {section === 'technologies' && 
                <Technologies 
                    active={active}
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
