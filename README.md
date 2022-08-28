# Instructions

## Minimum Features

- App coded by you (e.g., a React app; not something from a free website builder like Wix or SquareSpace)
- Deployed (e.g., Netlify)
- Landing page that prominently features your name (e.g., “above the scroll”)
- Easy to navigate (e.g., a nav bar; if a user goes to another page, they should at least have place where they can easily go back to your home page)
- About section with your name, photo, and bio
- Contact section with a call to action and way to reach you (e.g., a link to your email or a contact form)
- Resume section describing your basic work experience and featuring a link to download a PDF of your resume
- Projects section with all your past coding projects (presumably the section will include a list of projects that you can click on to view more details for each project)

## Grading Requirements

Note that many of the Deployed Site requirements directly map to a corresponding Coded Repository requirements. We only broke them up to emphasize that we’ll be looking at the Deployed Site rubric when viewing your Netlify site and looking at the Coded Repository rubric when viewing your GitHub repo. The overlap also nicely emphasizes how code translates to the user experience.

### Deployed Site

- Deployed using Netlify with a customized URL (e.g., jackson-reeves-portfolio, not something randomly generated like spicy-koala-happy123)
- Landing page prominently features your name (e.g., above the scroll)
- Navigation bar (it must at least link to the home page, but additional links are recommended)
- About section with your name, photo, and bio
- Contact section with a call to action and way to reach you (e.g., a link to your email or a contact form)
- Resume section describing your basic work experience and featuring a link to download a PDF of your resume
- Projects section with all your past coding projects (should include a list of projects that you can click on to view more details for each project; must include your unit 1 and unit 2 projects, but you are encouraged to also include any other coding projects you have publicly deployed, either from classwork or beyond—for instance, if you did a neat Tic Tac Toe game, include it)
- Favicon with your face or something else to clearly identify you (not the React icon)

### Coded Repository

- Freshly created React app (i.e., not a forked or cloned repo)
- Regular commits (at least 10)
- Component for landing page (it can be the App.jsx file if desired)
- Component for navigation bar
- Component for about section
- Component for contact section
- Component for resume section
- Component for projects section (it should be a list containing multiple project teasers)
- Component for project teasers (it should display a minimal amount of information for the project; clicking on one will show you that project’s details page)
- Component for project details (it should display all the info you’ve stored on your projects)
- Data folder or file with info for your past projects; each project’s info should be contained in an object, and you must include at least the name of the project, a link to an image of the project, a description of the project, a link to the project’s GitHub repo, and a link to the deployed version of the project
- README explaining that this is your portfolio, which you built using React

### Failure Criteria

There are always many ways to fail an assignment. Failure to complete any individual requirement mentioned above will result in failing this assignment. Here are two additional ways that will result in an immediate failure, as they strongly imply not having done the actual work and having just directly plagiarized the provided solution code, which has been provided only for guidance and clarity:

- Submitting a repo that was forked from another repo
- Submitting a repo that was not forked but only contains 1 commit with your final solution

NOTE: Plagiarism is not tolerated at GA, and violation of that can result in more serious consequences than merely failing an assignment.

### Leveling Up

Although not hard requirements, a personalized design can help your portfolio stand out, and a mobile-responsive design will be useful in the event someone ever wants to view your portfolio on their phone or tablet. The bonus section discusses how to implement both of these, and we highly recommend you incorporate them before you begin promoting your portfolio. But, again, they are not requirements in order to pass this assignment.

## Steps

You do not need to follow these steps to successfully complete the assignment. As long as you turn something in that meets the above requirements, you’ll pass! Feel free to skip these steps and just try it on your own. However, we’ve provided these steps to give you a guaranteed blueprint for creating a solid portfolio. Furthermore, even if you want your portfolio to differ dramatically from some of the sample portfolios you’ve seen that use this basic template, we would still recommend that you follow along with these initial steps, since many of the concepts should be applicable to any sort of portfolio. In other words, this template is designed to allow for flexibility either now while you initially create it or later if you want to add something on to it (or remove something from it). But, again, don’t feel obligated to follow these instructions to the letter (e.g., you don’t need to use the exact same file structure we recommend).

### 1. Initialize repo

#### A. Create app

#### B. Delete boilerplate

Clear the README, empty out the contents of App.jsx, and delete the 2 CSS files at the root.

#### C. Install dependencies

Bootstrap, React Router, Font Awesome

#### D. Set up file structure

Folders within `src`:

- pages
    - Home.jsx
    - About.jsx
    - Contact.jsx
    - Resume.jsx
    - Projects.jsx
    - ProjectDetails.jsx
- sections
    - NavBar.jsx
    - ProjectsList.jsx
    - ProjectPreview.jsx
- data
    - projects.js
    - unit1Project.js
    - unit2Project.js
- utilities
    - hyphenateWords.js
    - createProjectPath.js
    - determineTitle.js
    - findProject.js
- styling
    - main.css
    - home.css
    - about.css
    - contact.css
    - resume.css
    - projects.css

For this stage, you just need the files to exist; they don’t need to contain any content.

#### E. Upload any images to an external site for hosting

We recommend Imgur. This would include a photo of you, plus screenshots for each of your projects. Hint: You might want to make all of your images square before uploading them.

#### F. Change favicon to something customized to you

Use a third-party site to create a favicon from a photo of you or something else you would like to use to represent you. Name it `favicon.ico`, then upload it to the public folder.

#### G. Add a PDF of your resume to the public folder

You’ll need to update your resume, prettify it, and convert it to a PDF.

### 2. Mock out basic functional components for all pages

You’ll need function declarations containing return statements, along with default exports at the bottom, for the Home, About, Contact, Resume, and Projects components stored in the pages folder. For each one, in the return statement, add an `h1` with the name of the page (e.g., the About component should contain an `h1` containing the text “About”).

### 3. Add routing

#### A. Import necessary library modules and page components in App

#### B. Create a Router wrapper in App

#### C. Create routes for each page within Router wrapper

Confirm these work by running the app and going to each page. When you visit each page, you should see the appropriate heading (e.g., when you visit `/about`, you should see a heading containing “About”). Add a route for root (`/`), and have it render or redirect to the Home component. The Project Details component should live on a subpath to `/projects` (e.g., `/projects/:projectName`)

### 4. Build NavBar section

Use Bootstrap. Add links to all the pages.

### 5. Build Home page

Include your name, your photo, plus your title (e.g., “Software Engineer”). Add links to all the other pages using icons from Font Awesome. This page should not include the NavBar component.

### 6. Build other static pages

All these pages should include the NavBar component.

#### A. Build About page

Include your name, photo, and bio.

#### B. Build Contact page

Include a call to action and a link to email you.

#### C. Build Resume page

Include a short description of your work experience along with a link to download a PDF of your resume.

### 7. Fill in your project data

#### A. Fill in each project’s details

Each project you want to include should have its own file within the data folder. In those files, create objects named after their respective project, and add the following keys (and their corresponding values):

- title
- description
- image
- repositoryLink
- deploymentLink

Export each object at the bottom of its file.

#### B. Create an array of all projects

Import each individual project’s object into the main `projects.js` file. Create an array called `projects` that contains each of the imported project objects. Export the array at the bottom of the file.

### 8. Display projects

#### A. Build ProjectPreview section

Use a Bootstrap card to display a project’s title and image. It should obtain this info via its props. It should be hyperlinked based on its props’ link property.

#### B. Build ProjectsList section

Map over an array of projects, which it should obtain via its props. For each project, return a ProjectPreview component, which will receive the project’s title, image, and a link to take the user to the appropriate path to see all the project’s details. To generate the right path for the link, fill out the hyphenateWords utility function, which should take a string of words (e.g., a project’s title), lowercase all letters, then replace all spaces in the title with hyphens (if there are any spaces). It should then return this hyphenated string. The fill out the createProjectPath utility function. It should take a string of words (e.g., a project’s title), apply the hyphenateWords function, then return that string with “/projects/” appended at the beginning. The createProjectPath function will need to be imported into the ProjectsList component, invoked within the map, passed the project’s title, and its result should be set to a link variable and then passed to the ProjectPreview component.

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

### 3. Add submission form to Contact page

### 4. Add dark mode option

### 5. Add footer

Include copyright info, plus links to your social accounts.

### 6. Add more text-based details to each project

For instance, date, inspiration, lessons learned, or future goals.

### 7. Add technologies list to each project

### 8. Display technologies independently with their own pages

## Suggestions

Add a Twitter feed of your latest tweets (this will require having a backend), add a feed of your blog posts from Medium or DEV, add a feed of your GitHub commits. Turn it into more of a SPA portfolio by putting the pages all on the home page, giving them id’s, and having the nav bar just slide to them when clicked. Look at some other portfolios for more ideas.