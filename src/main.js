import { register, passIn, closeSession } from './lib/index.js';

// eslint-disable-next-line spaced-comment
/*PAGINA DE INICIO*/
const loadLanding = () => {
  window.location.hash = '/inicio';
const landing = document.getElementById ('root');
landing.innerHTML = `

  <div class="time-service">
    <img src="./img/time-service1.jpg" style="width: 100%; opacity: 70%;">
  </div>
  <div class="logo">
    <a href="#muro" id="logo" alt=""> <img src="./img/logo-weservice.png" style="cursor: pointer;"> </a>
  </div>

  <span class="text" >¿Andas buscando un servicio?</span>

    <button class='btns' id='btnSignUp'>Regístrate</button>
    <button class='btns' id='btnSignIn'>ya tengo una cuenta</button>

  `;
const btnSignUp= landing.querySelector('#btnSignUp');
const btnSignIn= landing.querySelector('#btnSignIn');
const logo=landing.querySelector('#logo')
logo.addEventListener('click',()=>{
  landing.innerHTML = '';
  loadWallPublications();
});

btnSignUp.addEventListener ('click', () => {
  landing.innerHTML = '';
  loadRegisterUser();
});

btnSignIn.addEventListener ('click', () => {
  landing.innerHTML = '';
  loadAccessUser();
});


  btnSignUp.addEventListener('click', () => {
    landing.innerHTML = '';
    loadRegisterUser();
  });
  btnSignIn.addEventListener('click', () => {
    landing.innerHTML = '';
    loadAccessUser();
  });
};

loadLanding();


//PAGINA PARA CREAR CUENTA


const loadRegisterUser = () => {
  window.location.hash = '/registro';
  const registerUser = document.getElementById('root');
  registerUser.innerHTML = `
    <div class="logo">
      <a href="#muro" id="logo" alt=""> <img src="./img/logo-weservice.png"> </a>
    </div>
  <form class= 'formulario'>
      <p class='leter-form'>Registro</p>
      <p class='leter-form'>Nombre:<input type='name' class='forms'id='name' placeholder='Ingresa tu Nombre'></p>
      <p class='leter-form'>Apellido:<input type='lastName' class='forms' id='lastName' placeholder='Ingresa tu Apellido'></p>
      <p class='leter-form'>Email:<input type='email' id='email'class='forms' placeholder='Ingresa email'></p>
      <p class='leter-form'>Contraseña:<input type='password'class='forms' id='password' placeholder='Ingresa contraseña'></p>
      <button  class='btn-send' id='btnSignUpUser'>Enviar</button>
      <button class='redes' id='btnLoginGoogle'> <img class='red-img' src="./img/google.png" >ingresa con Google</button>
      <button class='redes' id='btnLoginFacebook'> <img class='red-img' src="./img/ll.png" >ingresa con Facebook</button>   
  </form>`;

  const btnLoginGoogle = registerUser.querySelector('#btnLoginGoogle');
  btnLoginGoogle.addEventListener('click', () => {
    loginGoogle ();
  });
  const btnLoginFacebook = registerUser.querySelector('#btnLoginFacebook');

  btnLoginFacebook.addEventListener('click', () => {
    loginFacebook();
  });
};

//LOGIN CON GOOGLE

const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result){
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


 //LOGIN CON FACEBOOK
const loginFacebook = () => {
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



// PAGINA PARA INICIAR SESION


const loadAccessUser = ()=> {
  window.location.hash = '/ingreso';
  const accessUser = document.getElementById ('root');
  accessUser.innerHTML =  `
  
  <div class="time-service">
    <img src="./img/time-service1.jpg" style="width: 100%; opacity: 70%;">
  </div>
  <div class="logo">
    <a href="#muro" id="logo" alt=""> <img src="./img/logo-weservice.png" style="cursor: pointer;"> </a>
  </div>
  <div class="mostrar">
    <div class="containerEnter">
     <p class="leter">Email: </p><input type="email" class="inputForm" id="email2" placeholder="Ingresa email">
     <p class="leter">Contraseña: </p><input type="password" class="inputForm"  id="password2" placeholder="Ingresa contraseña">
    </div>
  <div >
  <button class='btns' id='btnSignInUser'>Ingresar</button>`;
  


const btnSignInUser = accessUser.querySelector('#btnSignInUser');

btnSignInUser.addEventListener ('click', () => {
  const email2 = document.getElementById('email2').value
  const password2 = document.getElementById('password2').value
  
  passIn(email2, password2);
});


  const btnSignInUser = accessUser.querySelector('#btnSignInUser');

  btnSignInUser.addEventListener('click', () => {
    const email2 = document.getElementById('email2').value;
    const password2 = document.getElementById('password2').value;
    passIn(email2, password2);
  });
};
// OBSERVADOR PARA IDENTIFICAR SI EL USUARIO ESTA LOGUEADO

export function observer() {
  firebase.auth().onAuthStateChanged(function(user){
  if(user){ 
        console.log('Existe usuario activo');
        loadWallPublications();
        //loadRegisterUser.innerHTML = '';
         accessUser.innerHTML ='';
        // User is signed in.
        let displayName = user.displayName;
        let email = user.email;
        let emailVerified = user.emailVerified;
        let photoURL = user.photoURL;
        let isAnonymous = user.isAnonymous;
        let uid = user.uid;
        let providerData = user.providerData;
        // ...
      } else {
        console.log('No existe usuario activo');
        //alert('inicia sesion');
        //wallPublications.innerHTML = '';
        loadLanding();
         // User is signed out.
        }
     });
}

observer();

//PAGINA DEL MURO


const loadWallPublications = () => {
  const wallPublications = document.getElementById('root');
  window.location.hash = '/muro';
  wallPublications.innerHTML = `
<div class="muro">
<header class="header-position">
  <div class="marca-header">
    <div class="encabezado" style="margin-left:35%">
      <img src="./img/logo-weservice.png" style="cursor: pointer; width:50%" alt="logo">
      <a class="btnCloseSession" id="btnCloseSession" href="">
        <img class="img-header" src="./img/close.png" alt="cerrar-sesión">
      </a>
    </div>
  </div>
  <div class="barra">
    <input type="search" class="search" placeholder="Search...">
  </div>
</header>
<main>
 <div id="ingreso-post">
    <form class="formulario-post">
      <div class="imagen-post">
        <div class="fondo-avatar">
          <img class="imagen-tamaño" src="./img/user.png" alt="avatar">
        </div>
        <textarea  class="textarea" name="post" id="post"placeholder="¡Publica tus novedades!">
        </textarea>
      </div>
    </div>
    <div class="barra">
      <input type="search" class="search" placeholder="Search...">
    </div>
  </header>
  <main>
    <br>
      <div id="ingreso-post">
        <form class="formulario-post">
          <div class="imagen-post">
            <div class="fondo-avatar">
              <img class="imagen-tamaño" src="./img/user.png" alt="avatar">
            </div>
            <textarea  class="textarea" name="post" id="post"placeholder="¡Publica tus novedades!"></textarea>
          </div>
          <div class="imagen-post">
              <button class="botones-post" id="publicar">Publicar</button>
              <section class="lista-publicaciones"></section>
          </div>
        </form>
      </div>
    </form>
  </div>
</main>
<footer>
  <footer class="footer-color">
    <div class = "footer-opciones">
      <a class="nav" href=""><img class="img-header"  src="./img/like.png" alt="Publicaciones"></a>  
      <a class="nav" href=""><img class="img-header"  src="./img/chat-bubble.png" alt="Noticias"></a>  
      <a class="nav" href=""><img class="img-header"  src="./img/user.png" alt="Perfil"></a> 
    </div>
  </footer>
</footer>
</div>
    `;


const btnCloseSession = wallPublications.querySelector('#btnCloseSession');

btnCloseSession.addEventListener ('click', () => {
  closeSession();
});


};

// MANEJANDO LAS RUTAS
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#/inicio') {
    loadLanding();
  } else if (window.location.hash === '#/registro') {
    loadRegisterUser();
  } else if (window.location.hash === '#/ingreso') {
    loadAccessUser();
  } else if (window.location.hash === '#/muro') {
    loadWallPublications();
  }
});
  
  window.addEventListener('load',  loadLanding ());
