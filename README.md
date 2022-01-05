
- *Introduction**

There has been a recent change in how and more importantly, where professionals work. This project aims to serve these remote-workers that have the flexibility to choose where they would like to live and work.

When the application is fully functional, users will be able to see a list of 5  locations for digitial nomads which are described as hubs. Users will be able to view these locations and choose their favorite of the 5 by clicking the like button on their location of choice . They will also be able to learn about these locations.

Html:
To create this application we started off by giving the page a title with the use of the h1 tag. Hard-coding within html was limited so that was one of 3 tags used to complete this project.

![Screen Shot 2022-01-05 at 3 22 27 PM](https://user-images.githubusercontent.com/90803892/148283892-bdb806b8-0d9d-4190-b083-598d8bfd2eaf.png)

![Screen Shot 2022-01-05 at 3 21 43 PM](https://user-images.githubusercontent.com/90803892/148283809-c1a92197-b210-4297-9321-23c5c2e4195d.png)

Creating our JSON File:

First we start off by creating an object that will operate as our server. This object will have a variable that saves this information within an array of objects and with 5 sets of 6 key-value pairs in total.

![Screen Shot 2022-01-05 at 3 25 49 PM](https://user-images.githubusercontent.com/90803892/148284294-ca684a67-419f-4923-93cb-eca87126d36a.png)

Fetching Our Information:

Now to use the information in our database, we need to run a fetch by running the Json server in a terminal.

json-server --watch db.json

We should receive a resources link in our terminal which we can use for our fetch to access the data in the db.json file. 

![Screen Shot 2022-01-05 at 3 27 36 PM](https://user-images.githubusercontent.com/90803892/148284498-91572e7f-c771-4599-bd08-3f03d4ca264c.png)

*Confirm that your resource link works by entering it in your browser and seeing the data rendered

Run a fetch followed by the .then method which provides a promise for you receive a response in the form of a Json-formatted version of the stored data. We must then use the same method once more to re-format the data once more so that we can use it for rendering features in our application.

![Screen Shot 2022-01-05 at 3 29 09 PM](https://user-images.githubusercontent.com/90803892/148284724-b3c77827-b20e-4832-857a-313127c8f8df.png)

    *A good practice is to log the data being returned to make sure you’re receiving the right data

We will use this data quite a bit and we also want to ensure that we are able to access a fully functioning page and fast as well. So we can wrap these lines in a function and use it as a callback function for our DOMContentLoaded event listener.

function fetchAllHubs(){
    fetch(" http://localhost:3000/hubs")
    .then(res => res.json())
    .then(hubs => (hubs.forEach(renderHub)))

}

document.addEventListener('DOMContentLoaded', () => {
    fetchAllHubs()
})





Use the data we've received by passing our data through the renderHub() function to create each element that should be displayed in association with each Hub.

![Screen Shot 2022-01-05 at 3 32 21 PM](https://user-images.githubusercontent.com/90803892/148285148-733f075a-23ef-42b9-bfbb-463e95ecd5d4.png)


Even before the CSS code has been applied, each element should be able to see each country, city, image of location, description and a like button on the page.

![Screen Shot 2022-01-05 at 3 11 28 PM](https://user-images.githubusercontent.com/90803892/148282557-a68a8f26-6540-4595-a855-cb9043b0625d.png)

Once our Css styling is applied then we want our containers to be structured for users to see everything about the location, which will look similar to the image below.

![Screen Shot 2022-01-05 at 3 36 08 PM](https://user-images.githubusercontent.com/90803892/148285622-6bceace5-a45a-4556-a4eb-e11424c2bba6.png)


We won't be able to see these elements on our without a couple more steps.
Our LocationDiv variable will serve as a container so after all the data from the db.json file is appended there then it needs to be appended to the body of the html document where the parent container resides. This element was hard-coded in my html file and was grabbed in order to append LocationDiv within it.


LocationDiv.append(structureDiv)
document.querySelector('#hub-container').append(locationDiv)

Event Listeners:

This app wouldn’t be complete without the ability for users to utilize a like button to show which location liked most. That is why after we create the like button, we will attach it to a click event listener.

The callback function should include two parameters. One that represents the innerText or textContent of the element and the other that will display the changes in the Json file.

function likeAHub(hub, numOfLikes) {
     numOfLikes.textContent = hub.Likes += 1;
}

The callback function for the delete function only required for the initial container to passed through as an argument and for the remove() method to be applied it within the block of code.
![Screen Shot 2022-01-05 at 3 38 37 PM](https://user-images.githubusercontent.com/90803892/148285964-90204f17-18d3-4f0a-a024-71582d8c0de2.png)

```jsx
likeButtton.addEventListener('click', ()=> {likeAHub(hub,numOfLikes)})
deleteButton.addEventListener('click', ()=> {deleteAHub(locationDiv)})
```

The last event listeners is introduced to bring holiday colors to the application by using the mouse event listeners. Making it so that even id numbers color their text in green and red for odd numbers.
