import { templates} from '../settings.js';

class Home {
  constructor(element){
    const thisHome = this;

    thisHome.render(element);
    //thisHome.Flickity();

  }

  render(element) {
    const thisHome = this;
    const generatedHTML = templates.home();

    console.log (generatedHTML);

    thisHome.dom = {};
    thisHome.dom.wrapper= element;
    thisHome.dom.wrapper.innerHTML = generatedHTML;
  }
  
  // Flickity(){
  //const element = document.querySelector(select.widgets.carousel);

  //new Flickity (element, {
  // options
  //cellAlign: 'left',
  //contain: true
  // });
  //}
 
}

export default Home; 