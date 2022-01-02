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
const likeButtton = document.createElement('button')
const numOfLikes = document.createElement('h3')
const likesText = document.createElement('h3')

    
    locationDiv.className = 'hub-card'
    structureDiv.className = "hub-structure"
    h1.className = 'Top-country'
    h1.textContent = `Country: ${hub.Country}`
    h2.className = 'Bottom-city'
    h2.textContent = `City: ${hub.City}`
    img.src = hub.Image 
    likeButtton.textContent = "<3"
    likeButtton.className = "like-button"
    numOfLikes.textContent = hub.Likes
    numOfLikes.className = "Likes-Counter"
    likesText.textContent = "Hub Likes"
    likesText.className = "Hub-Likes"
   


imgDiv.append(img, likeButtton, numOfLikes, likesText)
structureDiv.append(h1,h2,imgDiv)
locationDiv.append(structureDiv)
document.querySelector('#hub-container').append(locationDiv)

likeButtton.addEventListener('click', ()=> {likeAHub(hub,numOfLikes)})
}



function likeAHub(hub, numOfLikes) {
    hub.Likes += 1;
    numOfLikes.textContent = hub.Likes;


}






function fetchAllHubs(){
    fetch(" http://localhost:3000/hubs")
    .then(res => res.json())
    .then(data => (data.forEach(renderHub)))

}


    




// likeButtton.addEventListener('click', ()=> {likeAHub(numOfLikes)})