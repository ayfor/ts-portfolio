const homeIcon = document.querySelector('#home-icon svg');
const projectsIcon = document.querySelector('#projects-icon svg');
const aboutIcon = document.querySelector('#about-icon svg');
const contactIcon = document.querySelector('#contact-icon svg');

const iconsMap = new Map([
  ['home', homeIcon],
  ['projects', projectsIcon],
  ['about', aboutIcon],
  ['contact', contactIcon],
]);

const activateIcon = (icon) =>  {
  iconsMap.forEach((value, key) => {
    if (value == null) {
      console.error(`Sidebar element ${key} is null`);
      return;
    }

    if (key === 'projects') {
      if(icon === 'projects'){
        value.classList.add('text-blue-highlight');
      } else {
        value.classList.remove('text-blue-highlight');
      }
      return;
    }
    
    if (key === icon) {
      value.classList.add('fill-blue-highlight');
    } else {
      value.classList.remove('fill-blue-highlight');
    }
  });
}

document.addEventListener('scroll', () => {
  const scrollPosition = Number(window.scrollY);
  switch (true) {
    case (scrollPosition < 500):
      activateIcon('home');
      break;
    case (scrollPosition >= 500 && scrollPosition < 2000):
      activateIcon('projects');
      break;
    case (scrollPosition >= 2000 && scrollPosition < 3000):
      activateIcon('about');
      break;
    case (scrollPosition >= 3000):
      activateIcon('contact');
      break;
  }
});