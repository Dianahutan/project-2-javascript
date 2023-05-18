// import the functions
import { getMascaraProducts } from "./main.js"
import { createFavoritesList, removeProductFromFavorites } from './favorites.js'

const createMascaraList = async () => {
  const listEl = document.querySelector(".eyes__results")
  const data = await getMascaraProducts()

  data.forEach((data) => {
    console.log(data)
    const el = createElement(data)
    if (listEl) {
      listEl.appendChild(el)
    }
  })
}

// Create the main container which all elements 

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

  const containerButtons = document.createElement("div")
  containerButtons.classList.add("buttons_heart_cart")

  const containerButtonElement = document.createElement("div")
  const buyEl = document.createElement("button")
  containerButtonElement.classList.add("buy_button")
  const cartIcon = document.createElement("i")
  cartIcon.classList.add("fas", "fa-shopping-cart")

  const containerFavoritesElement = document.createElement("div")
  containerFavoritesElement.classList.add("favorites_button")
  const favoritesEl = document.createElement("button")
  favoritesEl.classList.add("heart-button")
  const icon = document.createElement("i")
  icon.classList.add("fas", "fa-heart")

  // Add event listener to the "favorites" button 
  favoritesEl.addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("products")) || []
    favorites.push(product)
    localStorage.setItem("products", JSON.stringify(favorites))
  })

  imageEl.src = product.api_featured_image
  imageEl.style.width = "150px"
  titleEl.innerText = product.name
  overviewEl.innerText = product.description.split("\n").join("")
  priceEl.innerText = product.price + " €"

  containerElement.appendChild(containerElementCard)
  containerElementCard.appendChild(imageEl)
  containerElementCard.appendChild(titleEl)
  containerElementCard.appendChild(overviewEl)
  containerElementCard.appendChild(priceEl)
  containerElementCard.appendChild(containerButtons)
  containerButtons.appendChild(containerButtonElement)
  containerButtons.appendChild(containerFavoritesElement)
  containerButtons.appendChild(favoritesEl)
  favoritesEl.appendChild(icon)
  containerButtonElement.appendChild(buyEl)
  buyEl.appendChild(cartIcon)

  return containerElement
}

// add event listener to eyes button
const eyesButton = document.getElementById("eyes-link")
eyesButton.addEventListener("click", () => {
  window.location.href = "Eyes.html"
})

// call createMascaraList function
createMascaraList()
createFavoritesList()
removeProductFromFavorites()
