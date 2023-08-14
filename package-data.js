const form = document.querySelector('form')
const packages = [
  {
    id: 1,
    name: 'Docker',
    description: 'A software platform used for building applications based on containers --- small and lightweight execution environments.'
  }
  ,
  {
    id: 2,
    name: 'Apache Maven',
    description: '<br> A default package manager used for the Java programming language and the Java runtime environment.'
  }
  ,
  {
    id: 3,
    name: 'NuGet',
    description: ' A free and open source package manager used for the Microsoft development platforms including .NET'
  }
  ,
  {
    id: 4,
    name: 'RubyGems',
    description: 'A standard format for distributing Ruby programs and libraries used for the Ruby programming language.'
  }
  ,
  {
    id: 5,
    name: 'npm',
    description: 'A package manager for JavaScript included with node.js. npm makes it easy for developers to share and reuse code.'
  }
  ,
  {
    id: 6,
    name:'Containers',
    description: 'A single place for your team to manage docker images and decide who can see and access your images.'
  }
]

//
function packagesOnDom(array) {
  let domString = ''
  for (const package of array) {
    domString += `<div class='single-card'> <div class="card" id='proj-cards' style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${package.name}</h5>
      <p class="card-text">${package.description}</p>
      <a href="#" class="btn btn-primary">Learn More</a>
    </div>
   </div> 
  </div>`
  }

  renderToDom('#package-container', domString)
} 


//Renders form to Dom
function formOnDom() {
  let domString = ''

  domString += `<div id="createPackageBox">
  <h3>Create a New Package</h3>
  <h6 id="createPackageDesc">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</h6>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class  ="form-label">Package Name</label>
  <input required class="form-control" id="name" rows="3"></input>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea required class="form-control" id="description" rows="3"></textarea>
  </div>
  <button type="submit" class="btn btn-success" id="createPackageBtn">Create Package</button>
  </div>`

  renderToDom('#form-container', domString)
}



function packageEventListeners() {
pkgForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const newPackageObj = {
    id: packages.length + 1,
    name: document.querySelector('#name').value,
    description: document.querySelector('#description').value
  }

  packages.push(newPackageObj)
  packagesOnDom(packages)
  pkgForm.reset()
})
}

function packageStart() {
  packagesOnDom(packages)
  formOnDom()
  packageEventListeners()
}
              
packageStart()
