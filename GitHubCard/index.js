/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios
  .get("https://api.github.com/users/angela-laien")
  .then(response => {
  console.log(response);
  cardPoint.append(userCard(response.data));
})
  .catch(error => {
  console.log("the data was not returned", error);
});

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/
axios
  .get("https://api.github.com/users/angela-laien/followers")
  .then(response => {
  //console.log(response);  
  const followersArray = response.data;
  followersArray.forEach(follower => {
    //console.log(follower.login);
  axios
    .get(`https://api.github.com/users/${follower.login}`)
    .then(response => {
      cardPoint.append(userCard(response.data))
    })
  })
})
  .catch(error => {
  console.log("the data was not returned", error);
});

/*const followersArray = [
  "Pergamene",
  "ReBarrington",
  "fbzr",
  "adriannasaruk",
  "Michael-B1764",
  "afialydia"
]; */

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function userCard(obj) {
  const card = document.createElement('div');
  const image = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p');
  const address = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  
  card.appendChild(image);
  card.appendChild(cardInfo);
  cardInfo.appendChild(name);
  cardInfo.appendChild(username);
  cardInfo.appendChild(location);
  cardInfo.appendChild(profile);
  profile.appendChild(address);
  cardInfo.appendChild(followers);
  cardInfo.appendChild(following);
  cardInfo.appendChild(bio);

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');
  
  image.src = obj.avatar_url;
  name.textContent = obj.name;
  username.textContent = obj.login;
  location.textContent = `Location: ${obj.location}`;
  profile.textContent = `Profile: ${obj.url}`;
  address.textContent = obj.url;
  followers.textContent = `Followers: ${obj.followers}`;
  following.textContent = `Folllowing: ${obj.following}`;
  bio.textContent = `Bio: ${obj.bio}`;

   return card;
 }
 
const cardPoint = document.querySelector('.cards');