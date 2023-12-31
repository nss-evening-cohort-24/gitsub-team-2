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

  {
    title: "Harry Potter Sorting Hat",
    description: "Sorting hat for hogwarts",
  },

  {
    title: "Calculator",
    description: "Fully functional calculator",
  },
]; 

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newProject = {
      title: document.querySelector("#projectName").value,
      description: document.querySelector("#projectDescription").value,
    }
    
    projectData.push(newProject);
    renderProjects(projectData);
    projectForm.reset();
  });

renderProjects(projectData);

renderFooter();
renderProfile();
