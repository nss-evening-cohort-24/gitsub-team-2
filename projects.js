const projectData = [

  {
    title: "Example 1",
    description: "No description",
    isPublic: false,
    updated: "Updated 44 seconds ago",
  },

  {
    title: "my-goals",
    description: "No description",
    isPublic: true,
    updated: "Updated 7 hours ago",
  },

  {
    title: "Sample My Goals",
    description: "Goals for the NSS Bootcamp",
    isPublic: true,
    updated: "Updated 1 minute ago",
  },

];


const projectsArea = document.querySelector("#projects")

function renderProjects() {
  let domString = "";
  domString += `
