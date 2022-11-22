import {randomUserMock} from './FE4U-Lab3-mock.js';
import {additionalUsers} from './FE4U-Lab3-mock.js';

function randomCourse() {
    var courses = ['Mathematics', 'Physics', 'English', 'Computer Science', 'Dancing', 'Chess', 'Biology', 'Chemistry',
        'Law', 'Art', 'Medicine', 'Statistics'];
    return rand(courses);
}

function rand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomNote(full_name, course) {
    let phrases = ["Choose me because of my unique teaching strategy", "Good morning!", "Excited about our further partnership", "Email me if you have any questions", "I'm " + full_name + " and I'm certified " + course + " Teacher of The Year " + Number(Number(Math.floor(Math.random() * 10)) + Number(2012))];
    return rand(phrases);
}


function getUsersArray() {
    let users = [];
    let id = 12206461;
    for (let i = 0; i < randomUserMock.length; i++) {

        var favorite =   randomUserMock[i].favorite===false ? false : randomUserMock[i].favorite || rand([false, true]);
        var bg_color = randomUserMock[i].bg_color || "#" + Math.floor(Math.random() * 16777215).toString(16);
        var course = randomUserMock[i].course || randomCourse();
        var note = randomUserMock[i].note || randomNote(randomUserMock[i].name.first + ' ' + randomUserMock[i].name.last, course);

        users.push({
                "id": id++,
                "favorite": favorite,
                "bg_color": bg_color,
                "course": course,
                "note": note,

                "gender": randomUserMock[i].gender,
                "title": randomUserMock[i].name.title,
                "full_name": randomUserMock[i].name.first + ' ' + randomUserMock[i].name.last,
                "city": randomUserMock[i].location.city,
                "state": randomUserMock[i].location.state,
                "country": randomUserMock[i].location.country,
                "postcode": randomUserMock[i].location.postcode,
                "coordinates": {
                    "latitude": randomUserMock[i].location.coordinates.latitude,
                    "longitude": randomUserMock[i].location.coordinates.longitude
                },
                "timezone": {
                    "offset": randomUserMock[i].location.timezone.offset,
                    "description": randomUserMock[i].location.timezone.description
                },
                "email": randomUserMock[i].email,
                "b_date": randomUserMock[i].dob.date,
                "age": randomUserMock[i].dob.age,
                "phone": randomUserMock[i].phone,
                "picture_large": randomUserMock[i].picture.large,
                "picture_thumbnail": randomUserMock[i].picture.thumbnail
            }
        )
    }
    return users;
}

function task1() {
    var users = getUsersArray();
    var addUsers = additionalUsers.filter((ar => !users.find(rm => (ar.phone === rm.phone && ar.email === rm.email))));
    let withAdditionalUsers = [...users, ...addUsers];
    return withAdditionalUsers;
}


function isValid(teacher) {

    var firstCapitalLetter = new RegExp("^([A-Z].*)$");
    if (firstCapitalLetter.test(teacher.note) && firstCapitalLetter.test(teacher.full_name) && firstCapitalLetter.test(teacher.state)
        && firstCapitalLetter.test(teacher.city) && firstCapitalLetter.test(teacher.country) && typeof (teacher.age) === 'number' &&
        (/^\+(\([0-9]{3}\))|([0-9]{3})[\-\s\.]?[0-9]{3}[\-\s\.]?[0-9]{4,6}$/.test(teacher.phone)) && teacher.email.includes('@'))
        return true;
    return false;
}

function filterUsers(users, country, age, gender, favorite) {
    let filteredUsers = users;
    if (country) {
        filteredUsers = filteredUsers.filter(function (item) {
            return country === item.country;
        });
    }
    if (age) {
        filteredUsers = filteredUsers.filter(function (item) {
            return age === item.age;
        });
    }
    if (gender) {
        filteredUsers = filteredUsers.filter(function (item) {
            return gender === item.gender;
        });
    }
    if (favorite) {
        filteredUsers = filteredUsers.filter(function (item) {
            return favorite === item.favorite;
        });
    }
    return filteredUsers;

}

function task3(users, field, ascendingOrder) {
    if (field == "age" || field == "country" || field == "b_date" || field == "full_name") {
        users = users.sort((a, b) => ascendingOrder ? compare(a, b, field) : compare(b, a, field));
    }

    return users;

}

function compare(el1, el2, field) {
    if (el1[field] === el2[field])
        return 0;
    if (el1[field] > el2[field])
        return 1;
    else return -1;
}


function task6(array, func) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]))
            count++;
    }
    return Math.round(count / array.length * 100);
}

function task5(array, search) {
    var element = array.find(ar => (ar.full_name == search || ar.note == search || ar.age == search));
    return element;
}

function main() {
    let users = task1();
    //let sortedUsers = task3(users, "b_date", true);
    //console.log(sortedUsers);
 //  console.log(task5(users, '32'));

  //  console.log(task5(users, 'Jordan Vidal'));

      /* function ageMoreThan30(element){
           return element.age>30;
       }
       function ageNotMoreThan30(element){
           return !ageMoreThan30(element);
       }
       function ageLessThanOrEqualTo30(element){
           return element.age<=30;
       }

       console.log(task6(users, ageMoreThan30));
       console.log(task6(users, ageNotMoreThan30));
       console.log(task6(users, ageLessThanOrEqualTo30));*/

  /*     console.log(filterUsers(users, "Finland", null, null, null));
       console.log(filterUsers(users, "Finland", null, "female", null));
       console.log(filterUsers(users, "Finland", 26, "female", null));
       console.log(filterUsers(users, "Finland", 26, "female", true));
*/  /*  for (var i = 0; i < users.length; i++)
        console.log(isValid(users[i]));*/
}

main();

function addTeacher(teacher){
    /*let charPFP = [];
    if(!teacher.picture_large){
        for(let i=0;i<teacher.full_name.length;i++){
      teacher.full_name.charAt(i);
        }
    }*/

    let article = document.createElement("article");
    article.className='teacher-entity';
    let teacherPfp = document.createElement("div");
    teacherPfp.className='teacher-pfp';
    let image = document.createElement("img");
    image.setAttribute(src, teacher.picture_large);
    image.setAttribute(alt, teacher.full_name+"'s profile picture");
    let name = document.createElement("p");
    name.className = 'name';
    let speciality = document.createElement("p");
    speciality.className = 'speciality';
    let country = document.createElement("p");
    country.className = 'country';

    teacherPfp.appendChild(image);
    article.appendChild(teacherPfp);
    article.appendChild(name);
    article.appendChild(speciality);
    article.appendChild(country);

document.getElementById(teachers-list).appendChild(article);
}