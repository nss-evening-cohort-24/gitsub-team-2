// UTILITY FUNCTION

const renderToDom = (divId, htmlRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlRender;
};

//Variables
const footer = document.querySelector("#footer");
const navbarElement = document.querySelector("#navbar")
//const overviewBtnelement = document.querySelector("overviewBtn")


//Functions
function renderFooter() {
  domString = "";

  domString += `
  <div id="'footer-div">
    <span><a href="https://github.blog/">  Blog  </a></span>
    <span><a href="https://github.com/about">  About  </a></span>
    <span><a href="https://services.github.com/">  Training  </a></span>
    <span><a href="https://docs.github.com/">  API  </a></span>
    <span><img id="tiny-git" src='./assets/images/github-logo.png'></span>
    <span><a href="https://github.com/pricing">  Pricing  </a></span>
    <span>
      <a href="https://support.github.com/?tags=dotcom-footer">
         Contact GitHub 
      </a>
    </span>
    <span><a href="https://www.githubstatus.com/">  Status  </a></span>
  </div>`;

  renderToDom("#footer", domString);
}

function eventListeners(){
  navbarElement.addEventListener("click", (e) =>{
    if(e.target.id === "overviewBtn"){
      console.log("Overview Button Clicked!")
    } else if(e.target.id === "repositoriesBtn"){
      console.log("Repositories Button Clicked!")
    }
    else if(e.target.id === "projectsBtn"){
      console.log("Projects Button Clicked!")
    }
    else if(e.target.id === "packagesBtn"){
      console.log("Packages Button Clicked!")
    }
  })
}
renderFooter();

eventListeners()