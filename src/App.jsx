import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import Resume from './sections/Resume'
import Projects from './sections/Projects'
import NavBar from './components/NavBar'
import './style/main.css'
import { useState } from 'react'

function App() {
    const [section, setSection] = useState('home')

    return (
        <>
            <NavBar setSection={setSection} />

            {section === 'home' && <Home />}
            {section === 'about' && <About />}
            {section === 'contact' && <Contact />}
            {section === 'resume' && <Resume />}
            {section === 'projects' && <Projects />}
        </>
    )
}

export default App
