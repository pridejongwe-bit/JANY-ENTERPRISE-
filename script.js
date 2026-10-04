const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});

document.querySelectorAll('.nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('quoteForm').addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const message = document.getElementById('message').value.trim();

  const subject = encodeURIComponent('JANY ENTERPRISE - Project Enquiry');

  const body = encodeURIComponent(
    `Name: ${name}\nPhone / WhatsApp: ${phone}\n\nProject details:\n${message}`
  );

  window.location.href =
    `mailto:janyenterprise2@gmail.com?subject=${subject}&body=${body}`;
});
