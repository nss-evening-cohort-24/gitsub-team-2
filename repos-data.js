const reposData = [
  {
    id: 1,
    repoTitle: "testing",
    about: "This is my test branch",
    attribute: ["java", "jamstack", "html", "python"],
    langColor: "#e34c26",
    language: "HTML",
    isPublic: "Public",
    isFav: 392,
    branches: 539,
    lastUpdated: "Updated 1 hour ago"
  },
  {
    id: 2,
    repoTitle: "testing again",
    about: "This is my test branch, again",
    attribute: ["jamstack", "css"],
    langColor: "#f1e05a",
    language: "JavaScript",
    isPublic: "Public",
    isFav: 10,
    branches: 35,
    lastUpdated: "Updated on Aug 22, 2018"
  },
  {
    id: 3,
    repoTitle: "Clean my room",
    about: "With the press of a button and a little magic, clicking it will clean your room!",
    attribute: ["python", "ruby"],
    langColor: "#3572A5",
    language: "Python",
    isPublic: "Public",
    isFav: 143,
    branches: 59,
    lastUpdated: "Updated just now"
  }
];

const reposOnDom = (array) => {
  let domString = '<div id="repos-find" class="mb-md-0 mx-md-3"><input class="repos-input repo" type="search" placeholder="Find a repository...">';
  for (const repo of array) {
    domString += `
      <div id="repos-page" class="repo">
        <ul>
          <li class="col-12 d-flex justify-content-between w-auto py-4 border-bottom">
            <div class="col-10 col-lg-9 d-inline-block">
              <div class="d-flex mb-1 flex-row title-color">
                <h3 class="wb-break-all">${repo.repoTitle}</h3>
                <span class="label align-middle mb-1 span-tag public-color">
                  <button class="public-btn">${repo.isPublic}</button>
                </span>
              </div>
            <div>
          <p class="col-9 d-inline-block mb-3 text-white">${repo.about}</p>
            </div>
            <div class="desc-btns">
              <button class="attributes">${repo.attribute[0]}</button>
              <button class="attributes">${repo.attribute[1]}</button>
            </div>
            <div class="fs-6 mt-2 color-custom">
              <svg height="10" width="10">
                <circle cx="5" cy="5" r="5" fill="${repo.langColor}" />
              </svg>
              <span class="span-tag">${repo.language}</span>
              <button class="public-btn favoured"><img src="./assets/svg/star.svg"> ${repo.isFav}</button>
              <button class="public-btn favoured"><img src="./assets/svg/diagram-2.svg"> ${repo.branches}</button>
              <span class="span-tag">${repo.lastUpdated}</span>
            </div>
            </div>
            <div class="col-2 d-flex row justify-content-around end-full">
              <button id="fill-click" class="star-btn" data-toggle="dropdown"><img src="./assets/svg/star.svg" /> Star</button>
            </div>
          </li>
        </ul>
      </div>
  `
  }
  renderToDom("#repos-show", domString);
}

function repoFormOnDom() {
  let domString = "";
  domString += `
  <form>
    <div id="createRepoBox">
      <div class="spacing mb-md-0 mx-md-3">
      <div class="border-bottom mb-2">
        <h3>Create a New Repository</h3>
      </div>
      <div class="mb-3">
        <label for="repo-name" class="form-label mt-2 fw-bold">Repository name 
          <span class="required">*</span> 
        </label>
        <input class="form-control form-width w-25" id="repo-name" rows="1" required>
      </div>
      <h6 id="createProjectDesc" class="mb-4">
        Great repository names are short, meaningful and memorable. Need inspiration? How about <span class="name-inspo">utopia-aoty</span>?
      </h6>
      <div class="mb-3">
        <label for="repo-about" class="form-label fw-bold">Description
          <span class="opt-desc">(optional)</span>
        </label>
        <textarea class="form-control form-width border-bottom w-75" id="repo-about"
        rows="1"></textarea>
      </div>
        <button type="submit" class="btn btn-success border-bottom" id="createRepoBtn">Create repository</button>
      </div>
    </div>
  </form>
  `
  renderToDom("#repos-form", domString);
};


reposOnDom(reposData);
repoFormOnDom()


// variables
const repoSubmit = document.querySelector("form");
const fillClick = document.querySelector("#fill-click")
const starEmpty = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>';
const starFill = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="whitesmoke" class="bi bi-star" viewBox="0 0 16 16"><path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/></svg>';

// allows to toggle star fill on if off
function toggleStar() {
  let currentFill = 2;

  if (currentFill === 2) {
    fillClick.innerHTML = `${starEmpty} Star`;
    currentFill = 1;
  } else {
    fillClick.innerHTML = `${starFill} Star`;
    currentFill = 2;
  }
}
// const randomAtt = reposData.attribute[Math.floor(Math.random() * reposData[0].attribute.length)];

// function that takes form input and displays on repos tab
const formInput = (e) => {
  e.preventDefault();


  const repoPush = {
    id: reposData.length + 1,
    repoTitle: document.querySelector("#repo-name").value,
    about: document.querySelector("#repo-about").value,
    attribute: ["HTML", "javascript"],
    langColor: "#f1e05a",
    language: "JavaScript",
    isPublic: "Public",
    isFav: 0,
    branches: 0,
    lastUpdated: "Updated just now"
  }

  reposData.push(repoPush);
  reposOnDom(reposData);
  document.querySelector("form").reset();
}

// event listeners
repoSubmit.addEventListener("submit", formInput);
fillClick.addEventListener("click", toggleStar)
