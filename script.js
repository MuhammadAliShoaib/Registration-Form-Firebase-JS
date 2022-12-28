// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase,ref,set,onChildAdded } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA8BPa3oJE9j15APkd1OUoon2qQcGvn1LQ",
    authDomain: "database-class-50352.firebaseapp.com",
    projectId: "database-class-50352",
    storageBucket: "database-class-50352.appspot.com",
    messagingSenderId: "791515371126",
    appId: "1:791515371126:web:a06e35d627d70feffeb157",
    measurementId: "G-L15PCM85JD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const database = getDatabase();

var firstName = document.getElementById('firstName');
var lastName = document.getElementById('lastName');
var cnic = document.getElementById('cnic');
var email = document.getElementById('email');
var password = document.getElementById('password');
var qualify = document.getElementById('qualify');
var contact = document.getElementById('contact');

var retrieve =document.getElementById('retrieve');

window.saveData = function () {
    var obj = {
        firstName:firstName.value,
        lastName:lastName.value,
        cnic:cnic.value,
        email:email.value,
        password:password.value,
        qualify:qualify.value,
        contact:contact.value,
        course:course.value
    }
    obj.id=Math.random().toString(                                                                                                                                                                                                                                                                                                                                                                                                                                                                             ).slice(2);


    let reference = ref(database,`info/${obj.id}/`);
    set(reference,obj);
    console.log(obj);
}

function getData(){
    let reference = ref(database,"info/")
    // console.log(data.value)
    let arr = [];
    onChildAdded(reference,function(data){
        // console.log(data.val())
        arr.push(data.val())
        retrieve.innerHTML=`<tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>CNIC</th>
        <th>Email</th>
        <th>Password</th>
        <th>Last Qualification</th>
        <th>Contact Number</th>
        <th>Course</th>
    </tr>`;
        for(var i =0;i<arr.length;i++){
            // retrieve.innerHTML+=`<li>${arr[i].task}</li>`
            retrieve.innerHTML+=`<tr><td>${arr[i].firstName}</td><td>${arr[i].lastName}</td><td>${arr[i].cnic}</td><td>${arr[i].email}</td><td>${arr[i].password}</td><td>${arr[i].qualify}</td><td>${arr[i].contact}</td><td>${arr[i].course}</td></tr>`
        }
    })
}

getData();