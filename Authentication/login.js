import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
const firebaseConfig = {
    apiKey: "AIzaSyCH_CMHghSvkqTtIZvt_1MEWPlaHWSSNSU",
    authDomain: "rvu-inhouse-project.firebaseapp.com",
    databaseURL: "https://rvu-inhouse-project-default-rtdb.firebaseio.com",
    projectId: "rvu-inhouse-project",
    storageBucket: "rvu-inhouse-project.appspot.com",
    messagingSenderId: "293811528567",
    appId: "1:293811528567:web:9a11cbead2d840b765b772",
    measurementId: "G-B4R015QNZC"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
console.log(app);

document.getElementById("login").addEventListener("click", function() {
	var email =  document.getElementById("login_email").value;
	var password = document.getElementById("login_password").value;

	signInWithEmailAndPassword(auth, email, password)
	.then((userCredential) => {
		const user = userCredential.user;
		console.log(user);
		alert(user.email+" Login successfull!!!");
        window.location.href = "Project.html";
		})
	.catch((error) => {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(errorMessage);
		alert(errorMessage);
		});		  		  
	  });
