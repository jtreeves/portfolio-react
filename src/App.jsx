import {
    Routes,
    Route,
    Navigate,
    useLocation
} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import ProjectDetails from './pages/ProjectDetails'
import Technologies from './pages/Technologies'
import TechnologyDetails from './pages/TechnologyDetails'
import NavBar from './components/NavBar'
import './style/main.css'

function App() {
    const location = useLocation()
    const notHome = location.pathname !== '/'

    return (
        <>
            {notHome && <NavBar />}

            <Routes>
                <Route
                    path='/'
                    element={<Home />}
                />
                
                <Route
                    path='home'
                    element={<Navigate to='/' replace />}
                />

                <Route
                    path='about'
                    element={<About />}
                />
                
                <Route
                    path='contact'
                    element={<Contact />}
                />

                <Route
                    path='resume'
                    element={<Resume />}
                />

                <Route
                    path='projects'
                    element={<Projects />}
                />

                <Route 
                    path='projects/:projectName'
                    element={<ProjectDetails />}
                />

                <Route
                    path='technologies'
                    element={<Technologies />}
                />

                <Route 
                    path='technologies/:technologyName'
                    element={<TechnologyDetails />}
                />
            </Routes>
        </>
    )
}

export default App
