# A PERSONAL PROJECTS SHOWCASE APP

## Introduction
This is a single page React application that enables the user to showcase their personal projects.

## Tools and Resources
* Text editor eg VS Code
* Version Control (Github)
* Developer tools
* Vite

## Task
* A personal project showcase application with a landing page displaying a list of projects, a form to add new features and a search feature

## Set-up
* Open a new directory in VS Code
* On the terminal, run npm install vite@latest to install and configure vite
* Open localhost URL on the browser

## Steps
### Component Hierarchy
* App.jsx is the root component. Inside it we will nest Header.jsx, Form.jsx and ProjectList.jsx as the children components. Functions and variables will be passed from App.jsx to the children components.

### Inside App.jsx
* Create state for form data that will be updated when a user fills the form.
* Create state for projects to hold submitted projects.
* Create handleFormInput function and handleSubmit function to handle form input and submission.
* After the handleSubmit function, update the projects state to add new projects to the array. Assign a unique id to the new project.
* Update form data state to clear input fields.
* Return the Header component.
* Return the form component with {formData, handleFormInput and handleSubmit} passed as props.
* Return ProjectList component with {projects} passed as a prop.

### Handling Components
* In Header.jsx, return the application heading.
* In Form.jsx, return a form that allows input of a project title, description and submission with a button.
Add event listeners, onSubmit for submisssion and onChange for text input.
* In ProjectList.jsx, iterate through the projects to return a list of individual projects, displaying the title and description.

### Styling
Apply relevant styling using CSS, implementing a responsive design for various screen sizes.

## Document and Maintain
* Add project to github. Commit and push further changes.




