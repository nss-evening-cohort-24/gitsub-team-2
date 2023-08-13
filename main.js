// UTILITY FUNCTION

const renderToDom = (divId, htmlRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlRender;
};

//Variables
const footer = document.querySelector("#footer");
const navContainerElement = document.querySelector("#navContainer");
const profileArea = document.querySelector("#profile-area");

// Function to render the footer on page
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

// Function to render the profile area on page
function renderProfile() {
  let domString = "";
  domString += `
    <div class="m-5 mt-2">
      <div class="profile-img" >
        <img class="profile-icon" src="https://cdn-icons-png.flaticon.com/512/552/552721.png" alt="A stock image of a new user."/>
      </div>
      <div class="profile-name">
        <h3 class="profile-user">John Doe</h3>
        <h6 class="profile-username">@johndoe</h6>
      </div>
      <div class="profile-about">
        <p>This is a test for the test. I am testing right now. Would you like for me to continue testing? Ok, great.</p>
      </div>
      <div class="profile-btn d-flex justify-content-center">
        <button class="profile-btn-follow w-50">Follow</button>
        <button class="profile-btn-sponsor w-50">Sponsor</button>
        <button class="profile-btn-extras">...</button>
      </div>
      <div class="profile-social">
        <a class="followers">1.3M</a>
        &nbsp;
        <p>followers</p>
        &nbsp;
        <p> · </p>
        &nbsp;
        <a class="following">573</a>
        &nbsp;
        <p>following</p>
      </div>
      <div class="profile-info">
        <ul class="info-list">
          <li><img src="./assets/svg/geo-alt.svg">&nbsp;&nbsp;Nashville, TN</li>
          <li><img src="./assets/svg/envelope.svg">&nbsp;&nbsp;email@email.com</li>
          <li><img src="./assets/svg/link-45deg.svg">&nbsp;&nbsp;mywebsite.com</li>
          <li><img src="./assets/svg/twitter.svg">&nbsp;&nbsp;@mysocials</li>
        </ul>
      </div>
      <div class="profile-separator">
        <hr class="profile-line">
      </div>
      <div class="profile-highlights">
        <div class="highlights-left">
          <h5>Highlights</h5>
        </div>
        <div class="highlight-div">
          <ul class="highlight-icons">
            <li><img src="./assets/svg/asterisk.svg">&nbsp;&nbsp;Clean my room</li>
            <li><img src="./assets/svg/star-fill.svg">&nbsp;&nbsp;testing</li>
            <li><img src="./assets/svg/star.svg">&nbsp;&nbsp;<button class="pro-btn">PRO</button></li>
          </ul>
        </div>
      </div>
      <div class="profile-separator">
        <hr class="profile-line">
      </div>
      <div class="profile-organization">
        <div class="highlights-left">
          <h5>Organizations</h5>
        </div>
        <div class="org-imgs">
          <a href="#"><img class="react-img" src="https://ultimatecourses.com/assets/category/react-d70ee2dc77a69c09d8eec8578ebba8c0b1eb5c1288c330c384d3674bc7e38409.svg"></a>
          <a href="#"><img class="node-img" src="https://academyclass.com/wp-content/uploads/2021/11/ACCL-NodeJS.png"></a>
          <a href="#"><img class="vsc-img" src="https://gitlab.ethz.ch/uploads/-/system/project/avatar/22394/VSCode.png"></a>
        </div>
      </div>
      <br>
      <div class="profile-separator">
        <hr class="profile-line">
      </div>
      <div class="profile-sponsors">
        <h5>Sponsors</h5>
        <div class="people-pics"> 
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <img class="people" src="https://cdn-icons-png.flaticon.com/512/552/552721.png">
          <button class="sponsor-btn">+41</button>
        </div>
      </div>
    </div>
  `;
  renderToDom("#profile-area", domString);
}


// Event Listeners
function eventListeners() {
  navContainerElement.addEventListener("click", (e) => {
    if (e.target.id === "overviewBtn") {
      console.log("Overview Button Clicked!");
    } else if (e.target.id === "repositoriesBtn") {
      console.log("Repositories Button Clicked!");
    } else if (e.target.id === "projectsBtn") {
      console.log("Projects Button Clicked!");
    } else if (e.target.id === "packagesBtn") {
      console.log("Packages Button Clicked!");
    } else if (e.target.id === "createProjectBtn") {
      console.log("Create Project Button Clicked!");
    }
  });

  projectSearchInput.addEventListener("input", (event) => {
    //this gets the current input value
    const searchTerm = event.target.value;

    //this calls the searchProjects function to filter and display projects
    searchProjects(searchTerm);
  });
}

// Rendering (later to be modularized)
renderProfile();
renderFooter();
eventListeners();
