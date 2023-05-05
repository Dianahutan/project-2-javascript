const url =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

const getProducts = async () => {
  const data = await fetch(url)
  return data.json()
}

getProducts()

const createList = async () => {
  const listEl = document.querySelector(".list")
  const data = await getProducts()

  data.forEach((data) => {
    const el = createElemment(data)
    listEl.appendChild(el)
  })
}

const createElemment = (itemData) => {
  const columnElement = document.createElement("div")
  const productEl = document.createElement("p")
  const imageEl = document.createElement("img")
  const titleEl = document.createElement("h1")
  const overviewEl = document.createElement("p")
  const priceEl = document.createElement("p")

  productEl.innerText = itemData.product_type
  imageEl.src = itemData.api_featured_image
  imageEl.style.width = "150px"
  titleEl.innerText = itemData.name
  overviewEl.innerText = itemData.description
  priceEl.innerText = itemData.price

  columnElement.appendChild(productEl)
  columnElement.appendChild(imageEl)
  columnElement.appendChild(titleEl)
  columnElement.appendChild(overviewEl)
  columnElement.appendChild(priceEl)

  return columnElement
}

createList()

/*data.filter(function (value) {
  return value="bronzer"
  })  */