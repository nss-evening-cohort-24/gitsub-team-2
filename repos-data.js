const reposData = [
  {
    id: 1,
    repoTitle: "testing",
    about: "This is my test branch",
    attribute: "JavaScript",
    tags: "JavaScript",
    language: "Javascript",
    isPublic: "Public",
    isFav: 392,
    branches: 539,
    lastUpdated: "Updated 1 hour ago"
  },
  {
    id: 2,
    repoTitle: "testing again",
    about: "This is my test branch, again",
    attribute: "JavaScript",
    tags: "JavaScript",
    language: "Javascript",
    isPublic: "Public",
    isFav: 10,
    branches: 35,
    lastUpdated: "Updated 25 weeks ago"
  },
  {
    id: 3,
    repoTitle: "Clean my room",
    about: "With the press of a button and a little magic, clicking it will clean   your room!",
    attribute: "React",
    tags: "JavaScript",
    language: "JavaScript",
    isPublic: "Public",
    isFav: 0,
    branches: 0,
    lastUpdated: "Updated just now"
  }
];

const reposOnDom = (array) => {
  let domString = "";
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
            <div class="fs-6 mt-2 color-custom">
              <span class="repo-language-color"></span>
              <span class="span-tag">${repo.tags}</span>
              <button class="public-btn favoured"><img src="./assets/svg/star.svg"> ${repo.isFav}</button>
              <button class="public-btn favoured"><img src="./assets/svg/diagram-2.svg"> ${repo.branches}</button>
              <span class="span-tag">${repo.lastUpdated}</span>
            </div>
            </div>
            <div class="col-2 d-flex row justify-content-around end-full">
              <button class="star-btn"><img src="./assets/svg/star.svg" /> Star</button>
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
        <textarea class="form-control form-width border-bottom w-25" id="repo-about"
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

const repoSubmit = document.querySelector("form");

const formInput = (e) => {
  e.preventDefault();

  // const randomAttribute = reposData.attribute[Math.floor(Math.random() * reposData.attributes.length)];

  const repoPush = {
    id: reposData.length + 1,
    repoTitle: document.querySelector("#repo-name").value,
    about: document.querySelector("#repo-about").value,
    attribute: randomAttribute,
    tags: "JavaScript",
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

// repoSubmit.addEventListener("click", (e) => {
//   console.log("clicked");
// })
repoSubmit.addEventListener("submit", formInput);
