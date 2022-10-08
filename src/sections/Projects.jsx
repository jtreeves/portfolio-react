import { useState } from 'react'
import ProjectDetails from '../components/ProjectDetails'
import ProjectsList from '../components/ProjectsList'
import filterOutMainProject from '../utilities/filterOutMainProject'
import sortProjects from '../utilities/sortProjects'

function Projects(props) {
    const [projects, setProjects] = useState(filterOutMainProject(props.project.title))

    const handleSorting = (e) => {
        e.preventDefault()

        const criteria = e.target.value
        const sortedProjects = sortProjects(criteria)
        const firstSortedProject = sortedProjects[0]
        const remainingSortedProjects = sortedProjects.slice(1)
        props.setProject(firstSortedProject)
        setProjects(remainingSortedProjects)
    }

    return (
        <section id='projects'>
            <h1>Projects</h1>

            <form action={handleSorting}>
                <label htmlFor='sorting'>Sort By</label>
                <select name='sorting'>
                    <option value='alpha-asc'>Alphabetical (A-Z)</option>
                    <option value='alpha-desc'>Alphabetical (Z-A)</option>
                    <option value='chrono-desc'>Chronological (Most Recent First)</option>
                    <option value='chrono-asc'>Chronological (Earliest First)</option>
                </select>

                <button type='submit'>Submit</button>
            </form>

            <ProjectDetails 
                project={props.project}
                setTechnology={props.setTechnology}
                setSection={props.setSection}
            />

            <ProjectsList 
                projects={projects} 
                setProject={props.setProject}
                setSection={props.setSection}
            />
        </section>
    )
}

export default Projects
