// import the functions
import { getFaceProducts } from "./main.js"
import { createFavoritesList, removeProductFromFavorites } from './favorites.js'


const createFaceProducts = async () => {
  const listEl = document.querySelector(".face__results")
  const data = await getFaceProducts()

  data.forEach((data) => {
    console.log(data)
    const el = createElement(data)
    if (listEl) {
      listEl.appendChild(el)
    }
  })
}

const createElement = (product) => {
  const containerElement = document.createElement("div")
  containerElement.classList.add("main")

  const containerElementCard = document.createElement("div")
  containerElementCard.classList.add("element_card")

  const imageEl = document.createElement("img")
  imageEl.classList.add("photo_element")

  const titleEl = document.createElement("h1")
  titleEl.classList.add("product_title")

  const overviewEl = document.createElement("p")
  overviewEl.classList.add("overview_element")

  const priceEl = document.createElement("div")

  const containerButtonElement = document.createElement("div")
  const buyEl = document.createElement("button")
  containerButtonElement.classList.add("buy_button")

  const containerFavoritesElement = document.createElement("div")
  const favoritesEl = document.createElement("button")
  containerFavoritesElement.classList.add("favorites_button")
  favoritesEl.innerText = "Add to favorites"
  favoritesEl.addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("products")) || []
    favorites.push(product)
    localStorage.setItem("products", JSON.stringify(favorites))
  })
  /*favoritesEl.src = "./ASSETS/heart-solid.SVG"
    favoritesEl.style.width= "20px" */


  imageEl.src = product.api_featured_image
  imageEl.style.width = "150px"
  titleEl.innerText = product.name
  overviewEl.innerText = product.description.split("\n").join("")
  buyEl.innerText = "Buy now!"
  priceEl.innerText = product.price + " €"

  containerElement.appendChild(containerElementCard)
  containerElementCard.appendChild(imageEl)
  containerElementCard.appendChild(titleEl)
  containerElementCard.appendChild(overviewEl)
  containerElementCard.appendChild(priceEl)
  containerElementCard.appendChild(favoritesEl)
  containerElement.appendChild(containerFavoritesElement)
  containerFavoritesElement.appendChild(favoritesEl)
  containerElement.appendChild(containerButtonElement)
  containerButtonElement.appendChild(buyEl)

  return containerElement
}

// add event listener to face button
const faceButton = document.getElementById("face-link")
faceButton.addEventListener("click", () => {
  window.location.href = "Face.html"
})

// call createMascaraList function


  createFaceProducts()
  createFavoritesList()
  removeProductFromFavorites()


