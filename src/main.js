
import { templateLanding, templateRegisterUser, templateAccessUser, templateWallPublications } from '../iu/vistas.js';

window.addEventListener('load', templateLanding());

//MANEJANDO LAS RUTAS
window.addEventListener('hashchange', () => {

  if(window.location.hash === '#/inicio'){ 
    templateLanding();
  }else if(window.location.hash === '#/registro'){ 
    templateRegisterUser();
  }else if(window.location.hash === '#/ingreso'){
    templateAccessUser();
  }else if(window.location.hash==='#/muro'){
    templateWallPublications(posts)
  }

});
