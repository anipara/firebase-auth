function handleAuthChanges() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location = "home.html";
    } else {
      firebase.auth().signOut().then(function () {
        // Sign-out successful.
      }).catch(function (error) {
        console.log(error)
        alert("An error has occoured")
      });
    }
  });

}


function handleSignIn() {
  const email = document.getElementById("email").value
  const pass = document.getElementById("password").value
  console.log("Sign in" + email)
  firebase.auth().signInWithEmailAndPassword(email, pass).catch(function (error) {
    const errorcode = error.code
    const errormsg = error.message
    alert(errormsg)
  });
}

function handleSignUp() {
  const email = document.getElementById("email").value
  const pass = document.getElementById("password").value
  console.log("Sign up" + email)
  firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function (error) {
    const errorcode = error.code
    const errormsg = error.message
    alert(errormsg)
  });
}

window.onload = () => {
  handleAuthChanges()
}