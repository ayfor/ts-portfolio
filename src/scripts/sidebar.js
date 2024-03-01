const HOME_SECTION_CUTOFF = 500;
const PROJECTS_SECTION_CUTOFF = 2000;
const ABOUT_SECTION_CUTOFF = 3000;

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

        value.classList.remove('text-off-white');
      } else {
        value.classList.remove('text-blue-highlight');
        
        value.classList.add('text-off-white');
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

const setIconDisplay = () => {
  const scrollPosition = Number(window.scrollY);
  switch (true) {
    case (scrollPosition < HOME_SECTION_CUTOFF):
      activateIcon('home');
      break;
    case (scrollPosition >= HOME_SECTION_CUTOFF && scrollPosition < PROJECTS_SECTION_CUTOFF):
      activateIcon('projects');
      break;
    case (scrollPosition >= PROJECTS_SECTION_CUTOFF && scrollPosition < ABOUT_SECTION_CUTOFF):
      activateIcon('about');
      break;
    case (scrollPosition >= ABOUT_SECTION_CUTOFF):
      activateIcon('contact');
      break;
  }
}

document.addEventListener('scroll', () => setIconDisplay() );


setIconDisplay();