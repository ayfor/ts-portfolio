const HOME_SECTION_CUTOFF = 500;
const PROJECTS_SECTION_CUTOFF = 2000;
const ABOUT_SECTION_CUTOFF = 2550;

const homeIcon = document.querySelector('#home-icon svg');
const projectsIcon = document.querySelector('#projects-icon svg');
const aboutIcon = document.querySelector('#about-icon svg');
const contactIcon = document.querySelector('#contact-icon svg');

const homeMobileIcon = document.querySelector('#mobile-home-icon svg');
const projectsMobileIcon = document.querySelector('#mobile-projects-icon svg');
const aboutMobileIcon = document.querySelector('#mobile-about-icon svg');
const contactMobileIcon = document.querySelector('#mobile-contact-icon svg');

const homeMobileSection = document.querySelector('#mobile-home-icon');
const projectsMobileSection = document.querySelector('#mobile-projects-icon');
const aboutMobileSection = document.querySelector('#mobile-about-icon');
const contactMobileSection = document.querySelector('#mobile-contact-icon');



const activateIcon = (icon) =>  {
  const iconsMap = new Map([
    ['home', homeIcon],
    ['projects', projectsIcon],
    ['about', aboutIcon],
    ['contact', contactIcon],
  ]);

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

    if (key === 'contact') {
      if(icon === 'contact'){
        value.classList.add('text-blue-highlight');

        value.classList.remove('text-off-black');
      } else {
        value.classList.remove('text-blue-highlight');
        
        value.classList.add('text-off-black');
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

const activateMobileIcon = (icon) => {
  const mobileIconsMap = new Map([
    ['home', homeMobileIcon],
    ['projects', projectsMobileIcon],
    ['about', aboutMobileIcon],
    ['contact', contactMobileIcon],
  ]);

  mobileIconsMap.forEach((value, key) => {
    if (value == null) {
      console.error(`Sidebar element ${key} is null`);
      return;
    }

    if (key === 'projects') {
      if(icon === 'projects'){
        value.classList.add('text-blue-highlight');

        value.classList.remove('text-off-black');
      } else {
        value.classList.remove('text-blue-highlight');
        
        value.classList.add('text-off-black');
      }
      return;
    }

    if (key === 'contact') {
      if(icon === 'contact'){
        value.classList.add('text-blue-highlight');

        value.classList.remove('text-off-black');
      } else {
        value.classList.remove('text-blue-highlight');
        
        value.classList.add('text-off-black');
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

const activateMobileSection = (section) => {
  const mobileSectionsMap = new Map([
    ['home', homeMobileSection],
    ['projects', projectsMobileSection],
    ['about', aboutMobileSection],
    ['contact', contactMobileSection],
  ]);

  mobileSectionsMap.forEach((value, key) => {
    if (value == null) {
      console.error(`Sidebar element ${key} is null`);
      return;
    }

    if (key === section) {
      value.classList.add('border-blue-highlight');
      value.classList.add('bg-blue-highlight/10');
      value.classList.remove('border-transparent');
      
    } else {
      value.classList.remove('border-blue-highlight');
      value.classList.remove('bg-blue-highlight/10');
      value.classList.add('border-transparent');
    }
  });
}

const setIconDisplay = () => {
  const scrollPosition = Number(window.scrollY);
  switch (true) {
    case (scrollPosition < HOME_SECTION_CUTOFF):
      activateIcon('home');
      activateMobileIcon('home');
      activateMobileSection('home');
      break;
    case (scrollPosition >= HOME_SECTION_CUTOFF && scrollPosition < PROJECTS_SECTION_CUTOFF):
      activateIcon('projects');
      activateMobileIcon('projects');
      activateMobileSection('projects');
      break;
    case (scrollPosition >= PROJECTS_SECTION_CUTOFF && scrollPosition < ABOUT_SECTION_CUTOFF):
      activateIcon('about');
      activateMobileIcon('about');
      activateMobileSection('about');
      break;
    case (scrollPosition >= ABOUT_SECTION_CUTOFF):
      activateIcon('contact');
      activateMobileIcon('contact');
      activateMobileSection('contact');
      break;
  }
}

document.addEventListener('scroll', () => setIconDisplay() );


setIconDisplay();