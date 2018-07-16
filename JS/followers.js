// const validations = {
//     email: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
// }

// class Follower {
//     constructor(gender, name, email, interests) {
//         this.gender = gender;
//         this.name = name;
//         this.email = email;
//         this.interests = interests;
//     }

//     get gender() {
//         return this._gender;
//     }

//     set gender(value) {
//         this._gender = value;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         this._name = value;
//     }

//     get email() {
//         return this._email;
//     }

//     set email(value) {
//         this._email = value;
//     }

//     get interests() {
//         return this._interests;
//     }

//     set interests(value) {
//         this._interests = value;
//     }
// }

// class FollowerRepo {
//     constructor() {
//         this.followers = [];
//     }

//     get followers() {
//         return this._followers;
//     }

//     set followers(value) {
//         this._followers = value;
//     }

//     loadFollowers(url) {
//         const request = new XMLHttpRequest();

//         request.open('GET', url);

//         request.onreadystatechange = () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 const JSONFollowers = JSON.parse(request.responseText);
//                 this.followers = JSONFollowers.map(f => {
//                     return new Follower(f.gender, f.name, f.email, f.interests);
//                 });
//             }
//         }
//         request.send();

//     }

//     //research doen!
//     safeFollowers(url) {
//         const request = new XMLHttpRequest();

//         request.open('POST', url);

//         request.onreadystatechange = () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 JSON.parse('followers', this.followers);
//             }

//         }
//     }
// }


// function init() {
//     const repo = new FollowerRepo();
//     const btnSub = document.getElementById('btnSub');
//     const followerSet = new Set(repo.followers);
//     btnSub.onload = () => {
//         const follower = new Follower();

//         if (followerSet.has(follower)) { //weet niet zeker of dat zo kan of je elk attribuut moet gaan controlleren.
//             alert(`The follower with name ${follower.name}, gender ${follower.gender} and email ${follower.email} has already been registered.`);
//         } else {
//             followerSet.add(follower);
//             repo.safeFollowers("../DATA/followers.json");
//         }


//     }
// }

// window.onload = () => init();