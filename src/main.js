const logo = document.getElementById('logo');
logo.addEventListener('click', () => {
});
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
