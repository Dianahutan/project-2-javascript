export function createFavoritesList() {
  const favorites = JSON.parse(localStorage.getItem("products"))
  let favoritesContainer = document.getElementById("favorites-list")

  if (!favoritesContainer) {
    console.error("Favorites container element not found.")
    return
  }

  favoritesContainer.innerHTML = ""

  if (!favoritesContainer.dataset.favoritesLoaded) {
    favoritesContainer.innerHTML = ""

    if (favorites) {
      favorites.forEach((favorite) => {
        const favoriteElement = document.createElement("div")
        favoriteElement.classList.add("favorite")

        const containerElementFav = document.createElement("div")
        containerElementFav.classList.add("element_card_favorites")

        const imageFav = document.createElement("img")
        imageFav.classList.add("photo_favorites")
        imageFav.src = favorite.api_featured_image
        imageFav.style.width = "150px"

        const nameElement = document.createElement("h2")
        nameElement.classList.add("title_favorites")
        nameElement.innerText = favorite.name

        const descriptionElement = document.createElement("p")
        descriptionElement.classList.add("text_favorites")
        descriptionElement.innerText = favorite.description.split("\n").join("")

        const priceElement = document.createElement("p")
        priceElement.classList.add("price_favorites")
        priceElement.innerText = `$${favorite.price}`

        favoritesContainer.appendChild(favoriteElement)
        favoriteElement.appendChild(containerElementFav)
        containerElementFav.appendChild(imageFav)
        containerElementFav.appendChild(nameElement)
        containerElementFav.appendChild(descriptionElement)
        containerElementFav.appendChild(priceElement)

        const removeButton = document.createElement("button")
        removeButton.innerText = "Remove from favorites"
        removeButton.classList.add("remove_button")
        removeButton.addEventListener("click", () => {
          removeProductFromFavorites(favorite)
          favoriteElement.remove()
        })
        favoriteElement.appendChild(nameElement)
        favoriteElement.appendChild(descriptionElement)
        favoriteElement.appendChild(priceElement)
        favoriteElement.appendChild(removeButton)
        favoritesContainer.appendChild(favoriteElement)
      })
    }
    favoritesContainer.dataset.favoritesLoaded = true
  }
}

export function removeProductFromFavorites(product) {
  if (!product || !product.hasOwnProperty("name")) {
    return
  }

  const favorites = JSON.parse(localStorage.getItem("products")) || []
  const updatedFavorites = favorites.filter(
    (favorite) => favorite.name !== product.name
  );
  localStorage.setItem("products", JSON.stringify(updatedFavorites))
}




