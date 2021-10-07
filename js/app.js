const list_dogs = document.getElementById("list_dogs")
const random_dog = document.getElementById("random_dog")
const loading = document.getElementById("loading")
const btn_random_dog = document.getElementById("btn_random_dog")
const form_random_doglist = document.getElementById("form_random_doglist")

// https://dog.ceo/api/breeds/image/random
// https://dog.ceo/api/breeds/image/random/3

btn_random_dog.addEventListener('click', () => {
  getRandomDog()
})

form_random_doglist.addEventListener('submit', (evento) =>{
  evento.preventDefault()
  getRandomDogList(evento)
})

async function getRandomDog(){
  loading.innerHTML = '<div class="loading"><img src="./img/dog.gif" alt="" class="loading-img"></div>'
  const respuesta = await fetch('https://dog.ceo/api/breeds/image/random')
  const data = await respuesta.json()
  random_dog.src = data.message
  loading.innerHTML = ''
}


async function getRandomDogList(evento) {
  const number = evento.target.number.value

  loading.innerHTML = '<div class="loading"><img src="./img/dog.gif" alt="" class="loading-img"></div>'
  const respuesta = await fetch('https://dog.ceo/api/breeds/image/random/' + number)
  const data = await respuesta.json()

  list_dogs.innerHTML = ''
  data.message.forEach(imagen => {
    list_dogs.innerHTML += `<img class="img-dog" src="${imagen}" alt="">`
  });

  loading.innerHTML = ''
}