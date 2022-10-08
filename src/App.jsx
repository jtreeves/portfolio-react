import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import NavBar from './components/NavBar'
import './style/main.css'
import { useState } from 'react'

function App() {
    const [activeSection, setActiveSection] = useState('home')
    console.log('ACTIVE SECTION: ', activeSection)

    const displaySection = () => {
        switch (activeSection) {
            case 'home':
                return <Home />
            case 'about': 
                return <About />
            case 'contact':
                return <Contact />
            case 'resume':
                return <Resume />
            case 'projects':
                return <Projects />
            default:
                return <Home />
        }
    }

    return (
        <>
            <NavBar setActiveSection={setActiveSection} />

            {displaySection()}
        </>
    )
}

export default App
