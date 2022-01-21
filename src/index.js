// write your code here

const baseUrl = "http://localhost:3000/ramens"
const ramenMenu = document.querySelector("#ramen-menu")

fetch(baseUrl) 
.then(rsp => rsp.json())
.then(data => getRamenObjects(data))

function getRamenObjects(ramen) {
    ramen.forEach(singleRamen => {
    renderRamen(singleRamen)    
})
}


function renderRamen (ramen) {
    let img = document.createElement('img')

    img.src = ramen.image
    
    ramenMenu.appendChild(img)

    img.addEventListener('click', () => {
        renderDetails(ramen)
})
}

function renderDetails(ramen) {
    const ramenDetails = document.querySelector("#ramen-detail")

    let h2 = ramenDetails.querySelector("h2")
    h2.innerText = ramen.name

    let h3 = ramenDetails.querySelector("h3")
    h3.innerText = ramen.restaurant

    let img = ramenDetails.querySelector("img")
    img.src = ramen.image

    let rating = document.querySelector("#rating-display")
    rating.innerText = ramen.rating

    let comment = document.querySelector("#comment-display")
    comment.innerText = ramen.comment
    
}



const form = document.querySelector("#new-ramen")

    form.addEventListener("submit", (e) => {
    e.preventDefault()
    const ramen = {}

    ramen.name = e.target.name.value

    ramen.restaurant = e.target.restaurant.value

    ramen.image = e.target.image.value
    
    ramen.rating = e.target.rating.value

    ramen.comment = e.target["new-comment"].value
    
    renderDetails(ramen)

    form.reset()
    })
