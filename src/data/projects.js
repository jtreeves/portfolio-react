const projects = [
    {
        title: 'Kaleidoscope',
        type: 'app',
        description: 'Budget app that lets users compare different possible expense plans',
        inspiration: 'I wanted to build an app in the finance sector, and I was able to achieve that by working with a team of other developers',
        date: new Date('January 6, 2021'),
        image: 'https://i.imgur.com/vKOdCf9.png',
        repositoryLink: 'https://github.com/jtreeves/budget-frontend',
        deploymentLink: 'https://kaleidoscope-budget.herokuapp.com',
        technologies: [
            'JavaScript',
            'React',
            'MongoDB'
        ],
        features: [
            'database allows users to store their information for long-term persistence',
            'ability to upload multiple budgets per user',
            'ability to compare your budgets against one another'
        ]
    },
    {
        title: 'Regressions',
        type: 'library',
        description: 'Library to generate statistical regressions models from provided data sets',
        inspiration: 'I wanted to learn how to create and launch my own library that others could implement as a third-party package',
        date: new Date('May 16, 2021'),
        image: 'https://i.imgur.com/NXAcCbT.png',
        repositoryLink: 'https://github.com/jtreeves/regressions_library',
        deploymentLink: 'https://pypi.org/project/regressions/',
        technologies: [
            'Python',
            'PyPI'
        ],
        features: [
            'linear, quadratic, cubic, hyperbolic, exponential, logarithmic, logistic, and sinusoidal regression models',
            'correlation coefficients allow users to determine model of best fit'
        ]
    },
    {
        title: 'Math Attack!',
        type: 'app',
        description: 'Game to test your knowledge with basic arithmetic operations',
        inspiration: 'I wanted to play around with the Vue framework and get more experience building web games',
        date: new Date('March 20, 2022'),
        image: 'https://i.imgur.com/XUexFZD.png',
        repositoryLink: 'https://github.com/jtreeves/vue-learn-math',
        deploymentLink: 'https://vue-math-attack.netlify.app/',
        technologies: [
            'JavaScript',
            'Vue'
        ],
        features: [
            'different difficulty levels, based on type of operation and length of numbers',
            'feedback messages informing player about correct answer if they got the question incorrect',
            'score board to keep track of status',
            'timer to encourage players to answer quickly'
        ]
    },
    {
        title: 'Salesforce Certification Calculator',
        type: 'library',
        description: 'Module to determine the cumulative score for Salesforce exams',
        inspiration: 'I wanted an easy way to calculate cumulative scores for Salesforce exams that I could implement via the CLI',
        date: new Date('July 30, 2022'),
        image: 'https://i.imgur.com/kH9ITXj.png',
        repositoryLink: 'https://github.com/jtreeves/salesforce_certification_calculator',
        deploymentLink: 'https://rubygems.org/gems/salesforce_certification_calculator',
        technologies: [
            'Ruby'
        ],
        features: [
            'CLI executable that users can immediately use as soon as they install the package',
            'interactive CLI prompts, so users can understand just what they are entering and just what they are receiving'
        ]
    }
]

export default projects
