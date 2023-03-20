if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}

const container = document.querySelector(".container")
const coffees = [
  { name: "Perspiciatis", image: "images/coffee1.jpg" },
  { name: "Voluptatem", image: "images/coffee2.jpg" },
  { name: "Explicabo", image: "images/coffee3.jpg" },
  { name: "Rchitecto", image: "images/coffee4.jpg" },
  { name: " Beatae", image: "images/coffee5.jpg" },
  { name: " Vitae", image: "images/coffee6.jpg" },
  { name: "Inventore", image: "images/coffee7.jpg" },
  { name: "Veritatis", image: "images/coffee8.jpg" },
  { name: "Accusantium", image: "images/coffee9.jpg" },
]

const showCoffees = () => {
  let output = "<div class='row text-center'>"
  coffees.forEach(
    ({ name, image }) =>
    (output += `
              <div class="col-12 col-md-6 col-lg-4">
                <div class="card flex-fill m-2 shadow mb-5 bg-body rounded" >
                  <img class="card-img-top object-fit-cover" src=${image} />
                  <div class="card-body">
                  <h1 class="card-title mt-1">${name}</h1>
                  <a class="card-link px-3 py-1 rounded-4" href="#">Taste</a>
                  </div>
                </div>
              </div>
              `)
  )
  output += "</div>\n"
  container.innerHTML = output
}

document.addEventListener("DOMContentLoaded", showCoffees)