
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

  // const renderToDom = (divId, htmlRender) => {
  //   const selectedDiv = document.querySelector(divId);
  //   selectedDiv.innerHTML = htmlRender;
  // };

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


packagesOnDom(packages)

function formOnDom() {
  let domString = ''

  domString += `<div id="createPackageBox">
  <h3>Create a New Package</h3>
  <h6 id="createPackageDesc">Coordinate, track, and update your work in one place, so projects stay transparent and on schedule.</h6>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class  ="form-label">Package Name</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <button type="button" class="btn btn-success" id="createPackageBtn">Create Package</button>
  </div>`

  renderToDom('#form-container', domString)
}

formOnDom()
               