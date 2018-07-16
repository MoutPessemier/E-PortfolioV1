const form = document.getElementById('followerForm');
const followersUl = document.getElementById('followers');

class Follower {
    constructor(gender, name, email, interests) {
        this.gender = gender;
        this.name = name;
        this.email = email;
        this.interests = interests;
    }

    get gender() {
        return this._gender;
    }

    set gender(value) {
        this._gender = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get email() {
        return this._email;
    }

    set email(value) {
        this._email = value;
    }

    get interests() {
        return this._interests;
    }

    set interests(value) {
        this._interests = value;
    }
}

class FollowerRepository {
    constructor() {
        this.flollowers = [];
    }

    get followers() {
        return this._followers;
    }

    set followers(value) {
        this._followers = value;
    }

    getFollowersFromDB() {
        db.collection('followers').get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                const follower = new Follower(doc.gender, doc.name, doc.email, doc.interests);
                this.followers.push(follower);
            });
        });
    }

    addFollower(gender, name, email, interests) {
        this.followers.push(new Follower(gender, name, email, interests));
        // add follower also in the db!
    }
}

function init() {
    const followersRepo = new FollowerRepository
    // function getNewFollower {
    //     form.addEventListener('submit', (e) => {
    //         e.defaultPrevented();

    //     });
    // }

}
//basic toHtml 
// function followersToHtml(doc) {
//     let followerLi = document.createElement('li');
//     followerLi.style.border = 'black 3px solid';
//     followerLi.style.backgroundColor = '#aaaaaa';

//     const nameTitle = document.createElement('h3');
//     nameTitle.textContent = 'Name:'

//     const br = document.createElement('br');

//     const nameH4 = document.createElement('h4');
//     const name = document.createTextNode(doc.data().name);
//     nameH4.appendChild(name);

//     const interestTitle = document.createElement('h3');
//     interestTitle.textContent = 'Interests:'


//     const interestUl = document.createElement('ul');

//     const interests = doc.data().interests.forEach(el => {
//         const li = document.createElement('li');
//         li.textContent = `${el}`;
//         interestUl.appendChild(li);
//     });

//     followerLi.appendChild(nameTitle);
//     followerLi.appendChild(br);
//     followerLi.appendChild(nameH4);
//     followerLi.appendChild(br);
//     followerLi.appendChild(interestTitle);
//     followerLi.appendChild(br);
//     followerLi.appendChild(interestUl);

//     followersUl.appendChild(followerLi);
// }

window.onload = () => init();