
const accountNew = document.getElementById('registry');
accountNew.addEventListener('click', () => {
  const next = document.getElementById('root');
  next.innerHTML = `
    <div class="logo">
      <a href="#muro" id="logo" alt=""> <img src="logo-weservice.png" style="cursor: pointer;"> </a>
    </div>
    <form class= 'formulario'>
      <p class='leter-form'>Registro</p>
      <p class='leter-form'>Nombre:<input type='name' class='forms'id='name' placeholder='Ingresa tu Nombre'></p>
      <p class='leter-form'>Apellido:<input type='lastName' class='forms' id='lastName' placeholder='Ingresa tu Apellido'></p>
      <p class='leter-form'>Email:<input type='email' id='email'class='forms' placeholder='Ingresa email'></p>
      <p class='leter-form'>Contraseña:<input type='password'class='forms' id='password' placeholder='Ingresa contraseña'></p>
      <button  class='btn-send' id='send'>Enviar</button>
      <button class='redes' id='google'> <img class='red-img' src="google.png" >ingresa con Google</button>
      <button class='redes' id='facebook'> <img class='red-img' src="ll.png" >ingresa con Facebook</button>   
      </form>`;
});
const registeredAccount = document.getElementById('access');
registeredAccount.addEventListener('click', () => {
  const nexTwo = document.getElementById('root');
  nexTwo.innerHTML = `
  <div class="time-service">
    <img src="time-service1.jpg" style="width: 100%; opacity: 70%;">
  </div>
  <div class="logo">
    <a href="#muro" id="logo" alt=""> <img src="logo-weservice.png" style="cursor: pointer;"> </a>
  </div>
  <div class='mostrar'
    <div class='containerEnter'>
     <p class='leter'>Email: <input type='email' class='email2' id='email2' placeholder='Ingresa email'></p>
      <p class='leter'>Contraseña: <input type='password' class='password2'  id='password2' placeholder='Ingresa contraseña'></p>
   </div>
  <div >
  <button class='btnes' id='accesso'>Ingresar</button>`;
});

/*import {register} from './lib/index.js';
import {passIn} from './lib/index.js';
import {observer} from './lib/index.js';
import {signOff} from './lib/index.js';
import {showUp} from './lib/index.js';
*/
let logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  console.log("sirve");
  let next = document.getElementById("root");
  next.innerHTML = `
<header class="header-position">
  <div class="marca-header">

    <div class="encabezado" style="margin-left:35%"><img src="./img/logo-weservice.png" style="cursor: pointer; width:50%" alt="logo">
    <a class="" id="cerrar-sesion" href=""><img class="img-header" src="./img/close.png" alt="cerrar-sesión"></a>

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
<br>

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

    `;
    const div = document.createElement('div');
    div.innerHTML = temp;
    const btnLogOut = div.querySelector('#cerrar-sesion');
    const btnPost = div.querySelector('#publicar');
    const tagDiv = div.querySelector('#lista-publicaciones');
    posts.forEach(post => {
      tagDiv.appendChild(
        cadaPost(post, firebase.auth().currentUser.uid));
    });
    btnPost.addEventListener('click', addPostOnSubmit);
    btnLogOut.addEventListener('click', logOutOnClick);
    return div;
})
