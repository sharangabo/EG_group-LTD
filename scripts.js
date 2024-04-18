document.addEventListener('DOMContentLoaded', () => {
  const homeButton = document.querySelector('.div-6');
  const homeSection = document.querySelector('.home-section');
  const aboutButton = document.querySelector('.div-7');
  const aboutSection = document.querySelector('.div-23');
  const projectsButton = document.querySelector('.div-8');
  const projectsSection = document.querySelector('.div-68');
  const contactButton = document.querySelector('.div-9');
  const contactSection = document.querySelector('.div-88');

  // Home Button
  homeButton.addEventListener('mouseover', () => {
    homeButton.style.color = 'yellow';
  });
  homeButton.addEventListener('mouseout', () => {
    homeButton.style.color = '';
  });
  homeButton.addEventListener('click', () => {
    homeSection.scrollIntoView({ behavior: 'smooth' });
  });

  // About Button
  aboutButton.addEventListener('mouseover', () => {
    aboutButton.style.color = 'yellow';
  });
  aboutButton.addEventListener('mouseout', () => {
    aboutButton.style.color = '';
  });
  aboutButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Projects Button
  projectsButton.addEventListener('mouseover', () => {
    projectsButton.style.color = 'yellow';
  });
  projectsButton.addEventListener('mouseout', () => {
    projectsButton.style.color = '';
  });
  projectsButton.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Contact Button
  contactButton.addEventListener('mouseover', () => {
    contactButton.style.color = 'yellow';
  });
  contactButton.addEventListener('mouseout', () => {
    contactButton.style.color = '';
  });
  contactButton.addEventListener('click', () => {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });

  // About Us Button (within content area)
  const aboutUsButton = document.querySelector('.div-74');
  aboutUsButton.addEventListener('mouseover', () => {
    aboutUsButton.style.color = 'yellow';
  });
  aboutUsButton.addEventListener('mouseout', () => {
    aboutUsButton.style.color = '';
  });
  aboutUsButton.addEventListener('click', () => {
    aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Projects Button (within content area)
  const projectsButtonInContent = document.querySelector('.div-86');
  projectsButtonInContent.addEventListener('mouseover', () => {
    projectsButtonInContent.style.color = 'yellow';
  });
  projectsButtonInContent.addEventListener('mouseout', () => {
    projectsButtonInContent.style.color = '';
  });
  projectsButtonInContent.addEventListener('click', () => {
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  });
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutUsDiv = document.querySelector('.div-19');
    const projectsDiv = document.querySelector('.div-21');
  
    aboutUsDiv.addEventListener('mouseover', () => {
      aboutUsDiv.style.color = 'yellow';
    });
  
    aboutUsDiv.addEventListener('mouseout', () => {
      aboutUsDiv.style.color = ''; // Reset to default color
    });
  
    projectsDiv.addEventListener('mouseover', () => {
      projectsDiv.style.color = 'yellow';
    });
  
    projectsDiv.addEventListener('mouseout', () => {
      projectsDiv.style.color = ''; // Reset to default color
    });
  });

  // Get all the card elements
const cards = document.querySelectorAll('.div-33, .div-36, .div-39, .div-42');

// Loop through each card element and add event listeners
cards.forEach(card => {
  const cardText = card.querySelector('div');
  const cardImage = card.querySelector('img');

  card.addEventListener('mouseover', () => {
    // Scale up the text and image, and change the text color on hover
    cardText.style.transform = 'scale(1.1)';
    cardImage.style.transform = 'scale(1.1)';
    cardText.style.color = 'yellow';
    cardText.style.transition = 'all 0.3s ease'; // Add a smooth transition
    cardImage.style.transition = 'all 0.3s ease'; // Add a smooth transition
  });

  card.addEventListener('mouseout', () => {
    // Reset the text and image to their original size and color when the mouse leaves
    cardText.style.transform = 'scale(1)';
    cardImage.style.transform = 'scale(1)';
    cardText.style.color = 'initial';
    cardText.style.transition = 'all 0.3s ease'; // Add a smooth transition
    cardImage.style.transition = 'all 0.3s ease'; // Add a smooth transition
  });
});