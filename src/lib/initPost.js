// agregar post con data del usuario
export const sendingPost= (textToPosted) =>
  firebase.firestore().collection('posts').add({
    content: textToPosted,
    UID: firebase.auth().currentUser.uid,
    name: firebase.auth().currentUser.name,
   timePost: new Date()
  })
  .then(docRef => {
    console.log("Status Saved");
    console.log("Document written with ID: ", docRef.id);
  })
  .catch(error => {
    console.error("Error adding document: ", error);
  })


// Eliminar Publicacion
export const deletePost = (idPost) =>
  firebase.firestore().collection('posts').doc(idPost).delete();

