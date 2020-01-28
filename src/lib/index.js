let database = firebase.firestore();
 
 export function register(name, lastName, email, password){ //PARA REGISTRAR
    firebase.auth().createUserWithEmailAndPassword(email,password)  
    .then(function(){
      saveCollectionUser(name, lastName, email, password);
    })
    .then(()=> {
      emailVerification();
    })
    .catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert ('La contraseña es débil');
      }
      else {
        alert (errorMessage)
      }
    });
  };

  export function passIn(email2,password2){ // PARA INGRESAR
      firebase.auth().signInWithEmailAndPassword(email2, password2).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });  
    }
    
 function saveCollectionUser(name, lastName, email, password){
  database.collection('RegisteredUsers').add({
      name:name,
      lastName:lastName,
      email:email,
      password:password,
  })
  .then(docRef => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(error => {
    console.error("Error adding document: ", error);
  })
}
// ENVIAR EMAIL DE VERIFICACION 

const emailVerification = () => {
  const user = firebase.auth().currentUser;

  user.sendEmailVerification()
  .then(()=>{
    // Email sent.
    console.log ('Enviando correo...');
  }).catch(function(error) {
    // An error happened.
    console.log (error);
  });
}


 //LOGIN CON GOOGLE

 export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}

export const loginFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const token = result.credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  }).catch(function(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    const credential = error.credential;
    // ...
  });
}


export function closeSession() {
  firebase.auth().signOut()  
    .then(() => {
      console.log('Saliendo...');
    })
    .catch((error) => {
      console.log(error);
    });
  };

