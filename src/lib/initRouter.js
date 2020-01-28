
/*export const initRouter = () => {

  const showTemp = (routers) => {
    const router = routers.substr(2, routers.length - 2);
    const section = document.getElementById('root');
    section.innerHTML = '';
    if (router === 'registro') {
      const elem = registroForm();
      section.appendChild(elem);
    } else if (router === 'ingreso') {
      section.appendChild(ingresoForm());
    } else if (router === 'muro') {
      getPostRouter((posts) => {
        section.innerHTML = '';        
        section.appendChild(redsocial(posts));
      });
    }
  };  
  const switchTemp = (hash) => {
    if (hash === '/#registro' || hash === '/#iniciar' || hash === '/#muro') {
      return hashshowTemp();
    }
    return showTemp('/#iniciar');
  };
  
  window.addEventListener('load', switchTemp(window.location.hash));
  window.addEventListener('hashchange', () => switchTemp(window.location.hash));
}*/