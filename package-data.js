import renderToDom from './main.js'


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
    description: 'A default package manager used for the Java programming language and the Java runtime environment.'
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

function packagesOnDom(array) {
  let domString = ''
  for (const package of array) {
    domString += `<div class="card" id='proj-cards' style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>`
  }

  renderToDom('#package-container', domString)
} 
