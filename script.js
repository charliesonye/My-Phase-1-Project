document.addEventListener('DOMContentLoaded', () => {
    fetchAllHubs()
})




function renderHub( hub){
const locationDiv = document.createElement('div')
const structureDiv = document.createElement('div')
const imgDiv = document.createElement('div')
const dropdownDiv = document.createElement('div')
const dropdownDivInfo = document.createElement('div')
const dropdownSpan = document.createElement('span')
const infoInDropdown = document.createElement('p')
const h1 = document.createElement('h1')
const h2 = document.createElement('h2')
const img = document.createElement('img')
const likeButtton = document.createElement('button')
const numOfLikes = document.createElement('h3')
const likesText = document.createElement('h3')
const deleteButton = document.createElement('button')

    dropdownDiv.className = 'dropdown'
    dropdownDivInfo.className = 'dropdown-info'
    dropdownSpan.textContent = 'Hub Description'
    infoInDropdown.textContent = hub.Description
    locationDiv.className = 'hub-card'
    structureDiv.className = "hub-structure"
    h1.className = 'Top-country'
    h1.textContent = `Country: ${hub.Country}`
    h2.className = 'Bottom-city'
    h2.textContent = `City: ${hub.City}`
    img.src = hub.Image 
    likeButtton.textContent = "<3"
    likeButtton.className = "like-button"
    deleteButton.textContent = "Delete"
    deleteButton.className = "delete-button"
    numOfLikes.textContent = hub.Likes
    numOfLikes.className = "Likes-Counter"
    likesText.textContent = "Hub Likes"
    likesText.className = "Hub-Likes"
   
   

dropdownDiv.append(dropdownSpan)
dropdownDivInfo.append(infoInDropdown)
dropdownDiv.append(dropdownDivInfo)
imgDiv.append(img)
structureDiv.append(h1,h2,imgDiv,numOfLikes,likesText, likeButtton, deleteButton, dropdownDiv)
locationDiv.append(structureDiv)
document.querySelector('#hub-container').append(locationDiv)

likeButtton.addEventListener('click', ()=> {likeAHub(hub,numOfLikes)})
deleteButton.addEventListener('click', ()=> {deleteAHub(locationDiv)})
locationDiv.addEventListener('mouseenter', (event)=> {
    if(hub.id % 2 == 0){event.target.style.color = 'green'}else(event.target.style.color = 'red')
})



}

function likeAHub(hub, numOfLikes) {
     numOfLikes.textContent = hub.Likes += 1;
    //  a second paramater must be used...numOfLikes.textContent += 1 isn't sufficient
}

function deleteAHub(locationDiv){
    locationDiv.remove();
    // locationDiv.textContent = ''
}


function fetchAllHubs(){
    fetch(" http://localhost:3000/hubs")
    .then(res => res.json())
    .then(hubs => (hubs.forEach(renderHub)))

}


    


// function createAHub(e){
//         e.preventDefault()
        
    
//         let hubCountry = document.querySelector('#Country').value
//         let hubCity = document.querySelector('#City').value
//         let hubImg = document.querySelector('#new-Image').value
//         let hubDescription = document.querySelector('#new-Description').value
        
//       let newHub = {
        
          
//           Country: hubCountry,
//           City: hubCity,
//           Image: hubImg,
//           Description: hubDescription,
//       }
    
//       hub.push(newHub);
//       renderHub(newHub)
        
//     }
    
//     let hubForm = document.querySelector("form")
//     hubForm.addEventListener('submit', createAHub)
    
    // function init(){
    //     hubs.forEach(renderHub)
    //     hubForm.addEventListener("submit", createAHub)
    // }
    
    // init();

// likeButtton.addEventListener('click', ()=> {likeAHub(numOfLikes)})