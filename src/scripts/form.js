const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  try {
    //TODO: CHECK IF ID CAN BE INCLUDED IN ENV FILE
    const response = await fetch('https://fabform.io/f/d7alKbW', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    // Handle response
    const result = await response.json();
    const submitButton = document.getElementById('contact-submit-button');
    
    if (Boolean(result.success)) {
      showToast(); 

      if (!submitButton) {
        console.error('Form Error: Submit button not found');
        return;
      }
      
      submitButton.classList.add('pointer-events-none');
      submitButton.classList.add('cursor-not-allowed');
      submitButton.innerText = 'Thanks for reaching out!';

      setTimeout(() => {

        submitButton.classList.remove('pointer-events-none');
        submitButton.classList.remove('cursor-not-allowed');
        submitButton.innerText = "Send Message";
      }, 30000);
    }
  } catch (error) {
    console.error('FORM: Submission failed', error);
  }
};


//Attach the event listener to the form
const contactForm = document.getElementById('contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', handleSubmit);
} else {
  console.error('Init Error: Form not found');
} 

const toastElement = document.getElementById('toast');
const toastCloseButton = document.getElementById('toast-close-button');

if (toastCloseButton) {
  toastCloseButton.addEventListener('click', hideToast);
}

function hideToast() {
  toastElement.classList.add('hidden');
}

function showToast() {
  toastElement.classList.remove('hidden');
}

