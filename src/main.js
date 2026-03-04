import axios from "axios"
const app = document.getElementById("app")
const list = document.getElementById("lista-pizza")
const select = document.getElementById("seleziona-pizza")

const endpoint = "https://v1lmr.wiremockapi.cloud/pizzalist"

getList()

select.addEventListener("change", function () {

  getList()
  console.log(select)
})

function getList() {

  axios.get(endpoint)
    .then((res) => {
      const data = res.data
      console.log(data)

      const filteredPizza = data.filter(element => element.category === select.value || select.value === "")

      const elements = filteredPizza.map(item => `<li> 

    <div class="card">

      <div class="description-box">
      <h2>${item.pizzaName}</h2>
       prezzo: ${item.price.toFixed(2)}
      </div>

      <div class="image-box">
        <img src="${item.imageUrl}">
      </div>

    </div>
      </li>`)

      list.innerHTML = elements.join("")

      // const listItem = `<li> ciao </li>`
      // list.innerHTML = listItem


    })

    .catch((error) => {
      console.log(error)
    })

}