// DOM Elements
const btnHamburger = document.querySelector('.nav__hamburger');
const navList = document.querySelector('.nav__list');
const scrollButton = document.querySelector('.scroll-top');
const dynamicText = document.getElementById('dynamic-text');

// Toggle Mobile Navigation
btnHamburger.addEventListener('click', () => {
  navList.classList.toggle('display-nav-list');
  btnHamburger.firstElementChild.classList.toggle('fa-bars');
  btnHamburger.firstElementChild.classList.toggle('fa-times');
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
  scrollButton.style.display = window.scrollY > 500 ? 'block' : 'none';
});

scrollButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// =======================
// Letter-by-Letter Typing
// =======================
const messages = ['Building...', 'Learning...', 'Growing...'];
let messageIndex = 0;   // Which message (word/phrase) we're on
let charIndex = 0;      // Which character of the message we're on
let isDeleting = false; // State: typing or deleting?

// The main function that types and deletes characters
function typeEffect() {
  const currentMessage = messages[messageIndex];

  // If not deleting, type next character
  if (!isDeleting) {
    dynamicText.textContent = currentMessage.slice(0, charIndex + 1);
    charIndex++;

    // Once we've typed the entire word...
    if (charIndex === currentMessage.length) {
      // Pause before deleting
      isDeleting = true;
      setTimeout(typeEffect, 2000); // 2-second pause, then start deleting
      return;
    }
  }
  // If deleting, remove characters one by one
  else {
    dynamicText.textContent = currentMessage.slice(0, charIndex - 1);
    charIndex--;

    // Once we've deleted everything, move to next message
    if (charIndex === 0) {
      isDeleting = false;
      messageIndex = (messageIndex + 1) % messages.length;
    }
  }

  // Adjust typing speed
  const speed = isDeleting ? 50 : 100; // e.g., slower typing, faster deleting
  setTimeout(typeEffect, speed);
}

// Immediately start the typing effect on page load
typeEffect();
