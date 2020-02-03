
import {  loginGoogle, loginFacebook, } from '../lib/controllerAuth.js';
import { register, passIn, observer, closeSession} from '../lib/view-controller.js';
import {sendingPost} from '../lib/initPost.js';
//template inicio
export const templateLanding = () => {
  window.location.hash = '#/inicio';
const containerLanding = document.getElementById ('root');
const contentLanding = `

  <div class="time-service">
    <img src="./img/time-service1.jpg" style="width: 100%; opacity: 70%;">
  </div>
  <div class="logo">
    <a href="#muro" id="logo" alt=""> <img src="./img/logo-weservice.png" style="cursor: pointer;"> </a>
  </div>

  <span class="text" >¿Andas buscando un servicio?</span>

    <button class='btns' id="btnSignUp">Regístrate</button>
    <button class='btns' id="btnSignIn">ya tengo una cuenta</button>

  `;
  containerLanding.innerHTML = contentLanding;

  const btnSignUp = document.getElementById("btnSignUp");
  const btnSignIn=document.getElementById("btnSignIn");
  
  btnSignUp.addEventListener ('click', () => {
   
    location.hash='#/registro'
  });
  
  btnSignIn.addEventListener ('click', () => {
   
    location.hash='#/ingreso'
  });
  return containerLanding;
};

// template registro
export const templateRegisterUser = () =>{
  window.location.hash = '#/registro';
const containerRegisterUser = document.getElementById ('root');
const contentRegisterUser =`
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
containerRegisterUser.innerHTML=contentRegisterUser;

const btnSignUpUser= document.getElementById('btnSignUpUser');
btnSignUpUser.addEventListener ('click', () => {
const name = document.getElementById('name').value
const lastName = document.getElementById('lastName').value
const email = document.getElementById('email').value
const password = document.getElementById('password').value
  register(name, lastName, email, password);
});

const btnLoginGoogle = document.getElementById('btnLoginGoogle');
btnLoginGoogle.addEventListener ('click', () => {
  loginGoogle();
  
});
const btnLoginFacebook = document.getElementById('btnLoginFacebook');

btnLoginFacebook.addEventListener ('click', () => {
  loginFacebook();
});
return containerRegisterUser;
}
observer();
  //template acceso usuario
export const templateAccessUser = () =>{
  window.location.hash = '#/ingreso';
 const containerAccessUser =  document.getElementById ('root');
 const contenAccessUser =  `
  
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

  containerAccessUser.innerHTML = contenAccessUser;
  const btnSignInUser = document.getElementById("btnSignInUser");

  btnSignInUser.addEventListener ('click', () => {
  const email2 = document.getElementById('email2').value;
  const password2 = document.getElementById('password2').value;
  
  passIn(email2, password2);
});

return  containerAccessUser;
}
  
//template muro

export const  templateWallPublications = () => {
  window.location.hash ='#/muro';
const containerWallPublications = document.getElementById ('root');
const contenWallPublications = `
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
  <form class="formulario-post" action="javascript:void(0)">
    <div class="imagen-post"></div>
      <div class="fondo-avatar">
        <img class="imagen-tamaño" src="./img/user.png" alt="avatar">
      
      </div>
      <textarea  class="textarea" name="post" id="post"placeholder="¡Publica tus novedades!">
      </textarea>
    
    <div class="imagen-post">
        <button class="botones-post" id="publicar">Publicar</button>
    </div>
    </form>
  </div>
</main>
    <section class="lista-publicaciones" id="lista-publicaciones"></section>
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

containerWallPublications.innerHTML = contenWallPublications;

const btnCloseSession = document.getElementById('btnCloseSession');
const textAreaPost = document.getElementById('post').value;
const btnPublicar =document.getElementById('publicar');


btnPublicar.addEventListener('click', () =>{
  const textToPosted = textAreaPost.value;
  sendingPost(textToPosted);
  
});

btnCloseSession.addEventListener ('click', () => {
  closeSession();
});
return containerWallPublications;
};

//funcion traer post
 export const getingPost = (textToPosted) => {
  console.log('esta guardando' + textToPosted + 'to Firestore');
  const contentMessage = document.getElementById('lista-publicaciones');
  const collectionPost = database.collection('post')
  const collectionPostForTime = collectionPost.orderBy("timePost","desc")
  collectionPostForTime.onSnapshot((querySnapshot) =>{
    querySnapshot.forEach((doc) =>{
      console.log (doc.data());
      contentMessage.innerHTML = `

      <p id="postMessage">${doc.data().message}</p>
      <h1>${doc. timePost} </h1>
      
      `
  })
})
}  
