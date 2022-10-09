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
    const domNode = useRef(null)
    const waiting = useRef(false)

    const clearProjectAndTechnology = () => {
        setProject(null)
        setTechnology(null)
    }

    const reset = () => {
        window.scrollTo({ top: 0 })
        waiting.current = true
        setTimeout(() => {
            waiting.current = false
        }, 2000)
    }

    useEffect(() => {
        const onScroll = () => {
            const scrollY = window.scrollY
            const innerHeight = window.innerHeight
            const nodeHeight = domNode.current.scrollHeight

            if (scrollY + innerHeight > nodeHeight + 50 && scrollY > 0 && !waiting.current) {
                setSection(findNextSection(section))
                reset()
            }
            
            if (scrollY < -50 && !waiting.current) {
                setSection(findPreviousSection(section))
                reset()
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [domNode, waiting, section])

    return (
        <>
            <NavBar 
                setSection={setSection} 
                clearProjectAndTechnology={clearProjectAndTechnology}
            />

            {section === 'home' && 
                <Home domNode={domNode} />
            }

            {section === 'about' && 
                <About domNode={domNode} />
            }

            {section === 'contact' && 
                <Contact domNode={domNode} />
            }

            {section === 'resume' && 
                <Resume domNode={domNode} />
            }

            {section === 'projects' && 
                <Projects 
                    domNode={domNode}
                    project={project}
                    setProject={setProject}
                    setTechnology={setTechnology}
                    setSection={setSection}
                />
            }

            {section === 'technologies' && 
                <Technologies 
                    domNode={domNode}
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
