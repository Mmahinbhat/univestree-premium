// FIREBASE IMPORTS

import { initializeApp }

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getAuth,

createUserWithEmailAndPassword,

signInWithEmailAndPassword,

onAuthStateChanged,

signOut

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


import {

getFirestore,

collection,

addDoc,

getDocs

}

from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";


// FIREBASE CONFIG

const firebaseConfig = {

apiKey: "AIzaSyDcip3y4gAC85mrs0T0ky9k4gy3f2PWBcI",

authDomain: "univestree.firebaseapp.com",

projectId: "univestree",

storageBucket: "univestree.firebasestorage.app",

messagingSenderId: "139818048792",

appId: "1:139818048792:web:c9e273e0a15597d87b126d",

measurementId: "G-NQY3C8T7JR"

};


// INITIALIZE

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);


// SIGNUP

window.signupUser = function(){

const email =
document.getElementById("signup-email").value;

const password =
document.getElementById("signup-password").value;


createUserWithEmailAndPassword(auth,email,password)

.then(()=>{

alert("Account Created Successfully 🔥");

window.location.href = "login.html";

})

.catch((error)=>{

alert(error.message);

});

};


// LOGIN

window.loginUser = function(){

const email =
document.getElementById("login-email").value;

const password =
document.getElementById("login-password").value;


signInWithEmailAndPassword(auth,email,password)

.then(()=>{

alert("Login Successful 🔥");

window.location.href = "dashboard.html";

})

.catch((error)=>{

alert(error.message);

});

};


// LOGOUT

window.logoutUser = function(){

signOut(auth)

.then(()=>{

alert("Logged Out");

window.location.href = "../index.html";

})

.catch((error)=>{

alert(error.message);

});

};


// SAVE APPLICATION

window.submitApplication = async function(){

const name =
document.getElementById("student-name").value;

const email =
document.getElementById("student-email").value;

const university =
document.getElementById("student-university").value;

const course =
document.getElementById("student-course").value;

const goals =
document.getElementById("student-goals").value;


try{

await addDoc(collection(db,"applications"),{

name,
email,
university,
course,
goals,
createdAt:new Date()

});

alert("Application Submitted Successfully 🔥");

}
catch(error){

alert(error.message);

}

};


// LOAD APPLICATIONS

window.loadApplications = async function(){

const applicationsContainer =
document.getElementById("applications-container");

if(!applicationsContainer) return;


applicationsContainer.innerHTML =
"<p>Loading applications...</p>";


const querySnapshot =
await getDocs(collection(db,"applications"));


applicationsContainer.innerHTML = "";


querySnapshot.forEach((doc)=>{

const data = doc.data();

applicationsContainer.innerHTML += `

<div class="card">

<h3>${data.university}</h3>

<p><strong>Name:</strong> ${data.name}</p>

<p><strong>Email:</strong> ${data.email}</p>

<p><strong>Course:</strong> ${data.course}</p>

<p><strong>Goals:</strong> ${data.goals}</p>

</div>

`;

});

};


// SESSION CHECK

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged In:",user.email);

}else{

console.log("No User");

}

});