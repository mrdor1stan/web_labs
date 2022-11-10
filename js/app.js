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

        var favorite = ("favorite" in randomUserMock[i]) ? randomUserMock[i].favorite : rand([false, true]);
        var bg_color = ("bg_color" in randomUserMock[i]) ? randomUserMock[i].bg_color : "#" + Math.floor(Math.random() * 16777215).toString(16);
        var course = ("course" in randomUserMock[i]) ? randomUserMock[i].course : randomCourse();
        var note = ("note" in randomUserMock[i]) ? randomUserMock[i].note : randomNote(randomUserMock[i].name.first + ' ' + randomUserMock[i].name.last, course);

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
    var addUsers = additionalUsers.filter((ar => !users.find(rm => (ar.phone === rm.phone&& ar.email === rm.email))));


    let withAdditionalUsers = users.concat(addUsers);
    return withAdditionalUsers;
}


function isValid(teacher) {

    var firstCapitalLetter = new RegExp("^([A-Z].*)$");

    if (firstCapitalLetter.test(teacher.note))
        if (firstCapitalLetter.test(teacher.full_name))
            //  if (firstCapitalLetter.test(teacher.gender))
            if (firstCapitalLetter.test(teacher.state))
                if (firstCapitalLetter.test(teacher.city))
                    if (firstCapitalLetter.test(teacher.country))
                        if (!isNaN(teacher.age))
                            //+1-3
                            if (/^\+(\([0-9]{3}\))|([0-9]{3})[\-\s\.]?[0-9]{3}[\-\s\.]?[0-9]{4,6}$/.test(teacher.phone)) {
                                if (/^(.*\@.*)$/.test(teacher.email)){
                                    console.log(teacher.phone);
                                    return true;
                                }
                            } else {
                                console.log(teacher.phone);
                            }
    return false;
}

function filterUsers(users, country, age, gender, favorite) {
    let filteredUsers = users;
    if (country != undefined && country != null) {
        filteredUsers = filteredUsers.filter(function (item) {
            return country === item.country;
        });
    }
    if (age != undefined && age != null) {
        filteredUsers = filteredUsers.filter(function (item) {
            return age === item.age;
        });
    }
    if (gender != undefined && gender != null) {
        filteredUsers = filteredUsers.filter(function (item) {
            return gender === item.gender;
        });
    }
    if (favorite != undefined && favorite != null) {
        filteredUsers = filteredUsers.filter(function (item) {
            return favorite === item.favorite;
        });
    }
    return filteredUsers;

}


function task6(array, func) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (func(array[i]))
        count++;
    }
    return Math.round(count / array.length * 100);
}

function task5(array, search){
    var element = array.find(ar=>(ar.full_name==search||ar.note==search||ar.age==search));
    return element;
}

function main() {
    let users = task1();
  console.log(users);
    console.log(task5(users, '32'));

    console.log(task5(users, 'Jordan Vidal'));

    function ageMoreThan30(element){
        return element.age>30;
    }
    function ageNotMoreThan30(element){
        return element.age<=30;
    }

    console.log(task6(users, ageMoreThan30));
    console.log(task6(users, ageNotMoreThan30));


 /*   console.log(filterUsers(users, "Finland", null, null, null));
    console.log(filterUsers(users, "Finland", null, "female", null));
    console.log(filterUsers(users, "Finland", 26, "female", null));
    console.log(filterUsers(users, "Finland", 26, "female", true));
*/
    /*for (var i = 0; i < users.length; i++)
        console.log(isValid(users[i]));
*/
}

main();