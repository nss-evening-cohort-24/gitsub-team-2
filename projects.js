//this defines an array of product objects
const projectData = [
  {
    title: "Example 1",
    description: "No description",
  },

  {
    title: "my-goals",
    description: "No description",
  },

  {
    title: "Sample My Goals",
    description: "Goals for the NSS Bootcamp",
  },
]; 

//these select the DOM elements with the ID "proj" and "projectSearchInput" and stores them in a variable
const projectsArea = document.querySelector("#proj");
const projectSearchInput = document.querySelector("#projectSearchInput");

//this defines a function to render the list of projects on the webpage
function renderProjects(projects) {
  let domString = '<ul class="list-group">';

  //this goes through each project and builds the HTML representation
  projects.forEach(project => {
    domString += `
    <li class="list-group-item">
    <div class="title-column">${project.title}</div>
    <div class="description-column">${project.description}</div>
    </li>`;
  });

  domString += "</ul>";

  //this updates the HTML of the projects area with the generated HTML
  projectsArea.innerHTML = domString;
}

//this defines a function to filter and display projects based on a search term
function searchProjects(searchTerm) {

  //this filters projects whose titles contain the search term and is case sensitive
  const filteredProjects = projectData.filter(project => {
    return project.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //this renders the filtered projects
  renderProjects(filteredProjects);
}

//this defines a function to initialize the webpage functionality
function initialize() {
  
  //this renders all projects initially
  renderProjects(projectData);

  //this adds an event listener to the search input field
  projectSearchInput.addEventListener("input", event => {

    //this gets the current input value
    const searchTerm = event.target.value;

    //this calls the searchProjects function to filter and display projects
    searchProjects(searchTerm);
  });
}

//this calls the initialize function to start the webpage functionality
initialize();
