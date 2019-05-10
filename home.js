function handleAuthChanges() {

  firebase.auth().onAuthStateChanged(function (user) {
    if (!user) {
      window.location = "index.html";
    }
  });
}

function signOut() {

  firebase.auth().signOut().then(function () {
    // Sign-out successful.
  }).catch(function (error) {
    console.log(error)
    alert("An error has occoured")
  });

}

window.onload = function () {
  handleAuthChanges()
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      var email = user.email;
      var uid = user.uid;
      document.getElementById("emailDis").innerHTML = email
      document.getElementById("uidDis").innerHTML = uid
    } else {
      // User is signed out.
      window.location = "index.html"
    }
  });
}