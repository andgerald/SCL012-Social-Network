/*import { templateLanding, templateRegisterUser, templateWallPublications, templateAccessUser } from '../iu/vistas.js/index.js';
import { getPostRouter } from '../lib/view-controller';


export const initRouter = () => {
  const showTemp = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const section = document.getElementById('container');
    section.innerHTML = '';
    if (router === 'inicio') {
      const elem =  templateLanding ();
      section.appendChild(elem);
    } else if (router === 'registro') {
      section.appendChild(templateRegisterUser());
    } else if (router === 'ingreso') {
        section.appendChild(templateAccessUser ());
    }else if (router === 'muro')
      getPostRouter((posts) => {
        section.innerHTML = '';        
        section.appendChild(templateWallPublications(posts));
      });
    }
    
    const switchTemp = (hash) => {
        if (hash === '#/inicio' || hash === '#/registro' || hash === '#/ingreso'|| hash === '#/muro' ) {
            return showTemp(hash);
        }
        
        return showTemp('#/inicio');
    };
    
    window.addEventListener('load', switchTemp(window.location.hash));
    window.addEventListener('hashchange', () => switchTemp(window.location.hash));
};
*/