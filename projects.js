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

  projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titleInput = document.querySelector("#projectName");
    const descriptionInput = document.querySelector("#projectDescription");

    const title = titleInput.value.trim();
    const description = descriptionInput.value.trim();

    if (title === "" || description === "") {
      alert("Both title and description are required.");
      return;
    }

    const newProject = {
      title: document.querySelector("#projectName").value,
      description: document.querySelector("#projectDescription").value,
    }
    
    projectData.push(newProject);
    renderProjects(projectData);
    projectForm.reset();
  });
