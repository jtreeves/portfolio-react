import countProjectsUsingTechnology from '../utilities/countProjectsUsingTechnology'

const resume = {
    jobs: [
        {
            position: 'Software Engineer',
            company: 'Slalom Build',
            startDate: new Date('June 20, 2022'),
            endDate: null
        },
        {
            position: 'Salesforce Developer',
            company: 'Slalom',
            startDate: new Date('June 27, 2021'),
            endDate: new Date('June 20, 2022')
        },
        {
            position: 'Director',
            company: 'Hyperion Academics',
            startDate: new Date('September 1, 2017'),
            endDate: new Date('February 1, 2022')
        },
        {
            position: 'Senior Educator',
            company: 'Atlanta Tutors',
            startDate: new Date('January 1, 2013'),
            endDate: new Date('September 1, 2017')
        },
        {
            position: 'Digital Media Producer',
            company: 'Atlanta Magazine',
            startDate: new Date('April 1, 2011'),
            endDate: new Date('September 1, 2013')
        },
        {
            position: 'Assistant Editor',
            company: 'Atlanta Magazine',
            startDate: new Date('April 1, 2010'),
            endDate: new Date('March 1, 2011')
        },
        {
            position: 'Editorial Assistant',
            company: 'Public Broadcasting Atlanta',
            startDate: new Date('November 1, 2009'),
            endDate: new Date('March 1, 2010')
        }
    ],
    feedback: [
        {
            name: 'Jeremy Uriz',
            company: 'General Assembly',
            callout: 'Synthesizes Answers',
            quote: `Jackson asks questions. Just as important, he synthesizes answers quickly to compound his knowledge. These skills are crucial for a software engineer. Jackson and I were half of the “Kaleidoscope” team, a MERN app created during our time together in General Assembly’s Software Engineering Immersion course. Jackson was the Git master, built out the backend API and database, and created test cases to ensure the integrity of the application. The quality of the Kaleidoscope app is a testament to the work Jackson produces.`
        },
        {
            name: 'Thomas Gilbert',
            company: 'General Assembly',
            callout: 'Natural Thoroughness',
            quote: `While I believe everyone on our team provided unique value in creating our full-stack application "Kaleidoscope," Jackson's role as git-master and backend-engineer was definitely the reason our project did not fly off the rails. With Jackson, there is a natural thoroughness to his work process that I have seldom seen before, and as a result, he certainly provided the scaffolding that enabled us to get this project finished. From documentation and task delegation, to database modeling and code testing, Jackson did everything with a "measure twice, cut once" approach. As a result, his code was always DRY and easy to understand. It's working with people like Jackson that make group projects a breeze, and I could only hope that I get to work with more people like him moving forward.`
        },
        {
            name: 'Alan Avery',
            company: 'General Assembly',
            callout: 'High-Potential Developer',
            quote: `As students of the same software engineering intensive, I immediately recognized Jackson as a high-potential developer. He was engaged right from the get-go: asking questions, driving discussions, and always eager to help anyone falling behind. It was clear that copying code and memorizing syntax wasn’t sufficient for Jackson; he wanted to understand the “how” and “why” of each new technology, and it was that drive that I instantly admired. It’s also the reason why I gladly teamed up with him on a big, unit-end project. I knew he would make a hard-working partner, and that together, we’d be able to deliver a polished, well-designed product. And that’s precisely what happened. Jackson kept the entire team organized and on-track, pushing each of us to write better, error-free code. We all looked to him for direction, and as a result, regarded him as the team’s leader. His own contributions to the project’s back end were rock solid, and even now, he continues to find ways to improve the final product. I’m fortunate I got to work with Jackson, and I’d be delighted to do it again.`
        }
    ],
    languages: [
        {
            name: 'JavaScript',
            count: countProjectsUsingTechnology('JavaScript')
        },
        {
            name: 'Python',
            count: countProjectsUsingTechnology('Python')
        },
        {
            name: 'Ruby',
            count: countProjectsUsingTechnology('Ruby')
        }
    ]
}

export default resume
