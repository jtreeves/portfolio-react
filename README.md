# Instructions

## Goal

It's finally time to create your portfolio! We want you to have a professional portfolio that you can use to show off all the projects you've built in this cohort to prospective employers. And what better way to do than by helping you build one yourself using React? The basic instructions in this lab will result in a simple portfolio that you can personally style and customize to your heart's content.

Here's an example of the sort of bare-bones portfolio that this lab can help you create: [Jackson's Basic portfolio](https://basics--jackson-reeves-portfolio.netlify.app)

And here are some examples of how you can use the bonuses and personal styling to really customize it for your own brand:
- [Jackson's Portfolio](https://complete--jackson-reeves-portfolio.netlify.app)
- Emily's Portfolio
- Beryl's Portfolio

## Minimum Requirements

### Deployed Site

- Deployed using Netlify with a customized URL (e.g., jackson-reeves-portfolio, not something randomly generated like spicy-koala-happy123)
- Landing page prominently features your name (i.e., above the scroll)
- Navigation bar (it must at least link to the home page, but additional links are recommended)
- About section with your name, photo, and bio
- Contact section with a call to action and way to reach you (e.g., a link to your email or a contact form)
- Resume section featuring a link to download a PDF of your resume
- Projects section with all your past coding projects (should include a list of projects that you can click on to view more details for each project; must include your unit 1 and unit 2 projects, but you are encouraged to also include any other coding projects you have publicly deployed, either from classwork or beyond—for instance, if you did a neat Tic Tac Toe game, include it)

### Coded Repository

- Public repository on GitHub
- Freshly created React app (i.e., not a forked or cloned repo)
- Regular commits (at least 10)
- Component for landing page (it can be the App.js file if desired)
- Component for navigation bar
- Component for about section
- Component for contact section
- Component for resume section
- Component for projects section (it should be a list containing multiple project teasers)
- Component for project teasers (it should display a minimal amount of information for the project; clicking on one will show you that project’s details page)
- Component for project details (it should display all the info you’ve stored on your projects)
- Data folder or file with info for your past projects; each project’s info should be contained in an object, and you must include at least the name of the project, a link to an image of the project, a description of the project, a link to the project’s GitHub repo, and a link to the deployed version of the project
- README explaining that this is your portfolio, which you built using React

### Leveling Up

Although not hard requirements, a personalized design can help your portfolio stand out, and a mobile-responsive design will be useful in the event someone ever wants to view your portfolio on their phone or tablet. The bonus section discusses how to implement both of these, and we highly recommend you incorporate them before you begin promoting your portfolio. But, again, they are not requirements in order to pass this assignment.

## Steps

You do not need to follow these steps to successfully complete the assignment. As long as you turn something in that meets the above requirements, you’ll pass! Feel free to skip these steps and just try it on your own. However, we’ve provided these steps to give you a guaranteed blueprint for creating a solid portfolio. Furthermore, even if you want your portfolio to differ dramatically from some of the sample portfolios you’ve seen that use this basic template, we would still recommend that you follow along with these initial steps, since many of the concepts should be applicable to any sort of portfolio. In other words, this template is designed to allow for flexibility either now while you initially create it or later if you want to add something on to it (or remove something from it).

### 1. Initialize repo

Use `npx create-react-app` to generate a new React repo. Remember to only do so after entering your labs folder, and remember to include the name of the project at the end of that command (e.g., `portfolio-react`). Once created locally, be sure to also create a remote version on GitHub, then link the two via the CLI. Commits matter! So link them first thing, and periodically push your code after completing each step.

### 2. Mock out basic functional components for all pages

Since our portfolio will have separate pages for each section, we'll want to create separate components for each of them. Since they'll all be pages, lets group them together in their own folder.

Add a `pages` folder within your project's `src` folder. Within that folder, create separate files for each of the pages: Home, About, Contact, Resume, and Projects. Let's add functional components to each of those files. We'll build them out later, but for now let's just return a heading with the name of the page.

Here's what the About component would look like at this stage:

```js
function About() {
    return (
        <h1>About</h1>
    )
}
```

(Remember to export it!)

### 3. Add routing

Now we need to add a way to view those components. We'll have each one live on its own route; as a result, if you're running your repo locally, and you go to `localhost:3000/about`, you should see the heading from the About component. But that doesn't work currently because our app doesn't have any routing yet. Let's fix that!

Install React Router:

```bash
npm i react-router-dom
```

In your `App.js`, import `Routes` and `Route` from `react-router-dom`. Also import the components for the pages you made in the last section. The top of your file should now look similar to this:

```js
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
```

Delete all the boilerplate from the App component. Then add opening and closing `Routes` tags to enclose all the routes. For each page, create a `Route` for it inside those `Routes` tags. Here's how the About route would look:

```js
<Route path='about' element={<About />} />
```

Make sure you put the Home component on the root route (aka, `/`). Confirm that you can now see the About header when viewing `localhost:3000/about`.

### 4. Build NavBar component

Now we want a way to easily visit the different pages without needing to manually type in the URL path each time. A navigation bar should do the trick! And we can store it in its own component. Since this won't be a page, let's create a new folder for it (and other non-page components we'll need to build later). Within the `src` folder, create an `elements` folder. Then add a new file: `NavBar.js`. While we could use standard HTML `nav` tags to build our nav bar, let's use Bootstrap. It won't offer any major benefits for the basic version of this portfolio, but later if you try to make it mobile-responsive, you'll probably want a collapsible nav bar, and Bootstrap's Navbar component will make that a much easier upgrade later.

Install React Bootstrap:

```bash
npm i react-bootstrap
```

Within your nav bar file, create a NavBar component. Import `Container`, `Navbar`, and `Nav` from `react-bootstrap`. Since each element in the nav bar will need to be linked, import `Link` from `react-router-dom`. You can use this starter code:

```js
<Navbar bg='light'>
    <Container fluid>
        <Link to='/' className='navbar-brand'>
            Your Name
        </Link>

        <Nav>
            <Link to='/about' className='nav-link'>
                About
            </Link>
            
            <Link to='/contact' className='nav-link'>
                Contact
            </Link>
        </Nav>
    </Container>
</Navbar>
```

Remember to add links to each of the pages you've created so far.

After you create the component, add it to all of your pages by placing it within your App component, above the routes.

### 5. Flesh out your static pages

Previously, we just added some dummy text to all our pages. Let's go back and give each of them some real content. (Don't worry about the Projects page yet; we'll do that next.)

On your home page, include your name, your photo, plus your title (e.g., “Software Engineer”). On your about page, include your photo along with a paragraph or two about yourself. On your contact page, add a basic call to action (e.g., "Reach out if you'd like to work with me!") and a link to your email. On your resume page, add a link to download a PDF of your resume. (You'll need to update your resume, export it as a PDF, and add it to this project's `public` folder first.)

### 6. Store your project data

Create an array in the `projects.js` file. Each project will be an object inside that array with the following keys (and their corresponding values):

- title
- description
- image
- repositoryLink
- deploymentLink

### 8. Display projects

#### A. Build ProjectPreview section

Use a Bootstrap card to display a project’s title and image. It should obtain this info via its props. It should be hyperlinked based on its props’ link property.

#### B. Build ProjectsList section

Map over an array of projects, which it should obtain via its props. For each project, return a ProjectPreview component, which will receive the project’s title, image, and a link to take the user to the appropriate path to see all the project’s details. To generate the right path for the link, fill out the hyphenateWords utility function, which should take a string of words (e.g., a project’s title), lowercase all letters, then replace all spaces in the title with hyphens (if there are any spaces). It should then return this hyphenated string. Then fill out the createProjectPath utility function. It should take a string of words (e.g., a project’s title), apply the hyphenateWords function, then return that string with “/projects/” appended at the beginning. The createProjectPath function will need to be imported into the ProjectsList component, invoked within the map, passed the project’s title, and its result should be set to a link variable and then passed to the ProjectPreview component.

#### C. Build Projects page

Import projects from the data folder. Render the ProjectsList component, and pass it the projects array as its projects prop. Like the static pages, this component should display the NavBars component.

#### D. Build ProjectDetails page

Use the useParams hook to determine what hyphenated projectName is coming in from the route. Fill out the determineTitle utility function, which should take in a hyphenated string, replace its hyphens with spaces, then capitalize the words appropriately (e.g., all words except for specific words like “and,” “the,” or “from,” unless those happen to the be the first word; you’ll need to make sure the titles of your projects abide by these rules), then returns the title as a string. Fill out the findProject utility function, which should take in a hyphenated string and return the object for the project that matches that hyphenated string. To do this, you will need to import the projects data file along with the recently created determineTitle function. You will invoke the determineTitle function with hyphenated string that the findProject function takes as an argument, then the function will search through the projects array until it finds an object with a title that matches the aforementioned title. It will then return that project’s object. You will need to import the findProject function in the ProjectDetails component, then pass it the hyphenated string that it got from the useParams function to retrieve the specific project. On the page, render the title, image, and description, along with links to the GitHub repo and the deployed site. Like the static pages, this component should display the NavBars component.

### 9. Update README

Specify that this is your portfolio, that you coded it in JavaScript, built it with the React framework, and mention the libraries you used. Add any other features to your README to give it some personality. For instance, include a Future Goals section listing out what additional features you’d like to add to your portfolio (e.g., dark mode, a contact form, mobile responsiveness).

### 10. Deploy repo

Confirm that everything runs locally as desired, then deploy to Netlify. Customize your URL. Then reconfirm that everything runs as desired on its deployed version.

## Bonuses

### 1. Add personalized styling

### 2. Make mobile responsive

### 3. Customize favicon

### 4. Add submission form to Contact page

### 5. Add footer

Include copyright info, plus links to your social accounts.

### 6. Add more text-based details to each project

For instance, date, inspiration, lessons learned, or future goals.

### 7. Add technologies list to each project

### 8. Display technologies independently with their own pages

### 9. Add dark mode option

## Suggestions

Add a feed of your blog posts from Medium or DEV. Turn it into more of a SPA portfolio by putting the pages all on the home page, giving them id’s, and having the nav bar just slide to them when clicked. Look at some other portfolios for more ideas.