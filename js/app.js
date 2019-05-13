document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const submitForm = document.querySelector('#new-animal');
  submitForm.addEventListener('submit', handleSubmit)

  const deleteAll = document.querySelector('#delete-all')
  deleteAll.addEventListener('click', deleteLiElements)






})

const handleSubmit = function (event) {
  event.preventDefault()
  console.log(event)

  const newAnimal = document.querySelector('#animal-list')

  const animal = document.createElement('li')
  newAnimal.appendChild(animal)

  const species = document.createElement('h3')
  animal.appendChild(species)
  species.textContent = `Species: ${event.target[0].value}`

  const conservation = document.createElement('h4')
  animal.appendChild(conservation)
  conservation.textContent = `Conservation Status: ${event.target[1].value}`

  const continent = document.createElement('p')
  animal.appendChild(continent)
  continent.textContent = `Continent: ${event.target[2].value}`

}

const deleteLiElements = function (event) {

  console.log("delete all button pressed")
  const delete = document.querySelector('ul')
  delete.
}
