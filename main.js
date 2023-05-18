import { createFavoritesList, removeProductFromFavorites } from "./favorites.js"

const url =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

const getProducts = async () => {
  const data = await fetch(url)
  return data.json()
}

const createList = async () => {
  const listEl = document.querySelector(".list")
  const data = await getProducts()

  data.forEach((data) => {
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
  containerElementCard.classList.add("element_card_main")

  const imageEl = document.createElement("img")
  imageEl.classList.add("photo_element")

  const titleEl = document.createElement("h1")
  titleEl.classList.add("product_title")

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

  imageEl.src = product.api_featured_image
  imageEl.style.width = "150px"
  titleEl.innerText = product.name
  priceEl.innerText = product.price + " €"

  favoritesEl.addEventListener("click", () => {
    const favorites = JSON.parse(localStorage.getItem("products")) || []
    favorites.push(product)
    localStorage.setItem("products", JSON.stringify(favorites))
  })
 
  containerElement.appendChild(containerElementCard)
  containerElementCard.appendChild(imageEl)
  containerElementCard.appendChild(titleEl)
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

export const getMascaraProducts = async () => {
  const url =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  const data = await fetch(url)
  const products = await data.json()
  return products.filter(
    (product) =>
      product.product_type === "mascara" ||
      product.product_type === "eyeliner" ||
      product.product_type === "eyeshadow" ||
      product.product_type === "eyebrow"
  )
}

export const getLipsProducts = async () => {
  const url =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  const data = await fetch(url)
  const products = await data.json()
  return products.filter(
    (product) =>
      product.product_type === "" ||
      product.product_type === "lipstick" ||
      product.product_type === "lip_liner"
  )
}

export const getFaceProducts = async () => {
  const url =
    "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"
  const data = await fetch(url)
  const products = await data.json()
  return products.filter(
    (product) =>
      product.product_type === "foundation" ||
      product.product_type === "bronzer" ||
      product.product_type === "blush"
  )
}

createList()
createFavoritesList()
removeProductFromFavorites()
