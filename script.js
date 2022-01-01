document.addEventListener('DOMContentLoaded', () => {
    fetchAllHubs()
})




function renderHub( hub){
const locationDiv = document.createElement('div')
const structureDiv = document.createElement('div')
const imgDiv = document.createElement('div')

const h1 = document.createElement('h1')
const h2 = document.createElement('h2')
const img = document.createElement('img')
    h1.className = 'Top-position'
    h1.textContent = `Country: ${hub.Country}`
    h2.className = 'Bottom-position'
    h2.textContent = `City: ${hub.City}`
    img.src = hub.Image 
    

locationDiv.className = 'hub-card'
structureDiv.className = "hub-structure"
imgDiv.append(img)
structureDiv.append(h1,h2,imgDiv)
locationDiv.append(structureDiv)

document.querySelector('#hub-container').append(locationDiv)
}





function fetchAllHubs(){
    fetch(" http://localhost:3000/hubs")
    .then(res => res.json())
    .then(data => (data.forEach(renderHub)))

}


    

