// גלילה עם אפקטים
const animatedElements = document.querySelectorAll('.animate');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

animatedElements.forEach(el => observer.observe(el));

// ולידציה לטופס
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if (name.length < 2 || !email.includes('@') || message.length < 10) {
    status.textContent = 'נא למלא את כל השדות בצורה תקינה';
    status.style.color = 'red';
  } else {
    status.textContent = 'ההודעה נשלחה בהצלחה!';
    status.style.color = 'green';
    this.reset();
  }
});


document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
  
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });

  const cards = document.querySelectorAll('.card');

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => cardObserver.observe(card));

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.lightbox').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';

      const img = document.createElement('img');
      img.src = link.href;
      overlay.appendChild(img);

      overlay.addEventListener('click', () => {
        overlay.remove();
      });

      document.body.appendChild(overlay);
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".nav");

  navToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});



