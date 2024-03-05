const handleSubmit = async (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  const form = event.target;
  const formData = new FormData(form);
  console.log(formData);
  const data = Object.fromEntries(formData.entries());
  console.log('FORM: Submitted data', Object.fromEntries(formData.entries()));

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
    console.log('FORM: Submission successful', result);
    // Optionally, reset the form or redirect the user
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
