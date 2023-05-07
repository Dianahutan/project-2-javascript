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
    console.log(data)
    const el = createElemment(data)
    listEl.appendChild(el)
  })
}

const createElemment = (itemData) => {
  const containerElement = document.createElement("div")
  containerElement.classList.add("main")

  const containerElementCard= document.createElement("div")
  containerElement.classList.add("element_card")
  const imageEl = document.createElement("img")
  const titleEl = document.createElement("h1")
  const overviewEl = document.createElement("p")
  const priceEl = document.createElement("p")
  const buyEl= document.createElement("buttton")
 
  imageEl.src = itemData.api_featured_image
  imageEl.style.width = "150px"
  titleEl.innerText = itemData.name
  overviewEl.innerText = itemData.description.split("\n").join("")
  buyEl.innerText= "Buy now!"
  priceEl.innerText = itemData.price + " €"

  containerElement.appendChild(containerElementCard)
  containerElementCard.appendChild(imageEl)
  containerElementCard.appendChild(titleEl)
  containerElementCard.appendChild(overviewEl)
  containerElementCard.appendChild(priceEl)
  containerElementCard.appendChild(buyEl)
  


  return containerElement
}

createList()

/*data.filter(function (value) {
  return value="bronzer"
  })  */
ronzer"
