// Mobile nav toggle (works with header menu)
const navToggle = document.getElementById('nav-toggle');
const mobileMenu = document.getElementById('mobile-menu');
navToggle?.addEventListener('click', ()=>{
  mobileMenu?.classList.toggle('hidden');
  mobileMenu?.classList.toggle('open');
});

// Close mobile menu when link clicked
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  mobileMenu.classList.add('hidden');
  mobileMenu.classList.remove('open');
}));

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href && href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth',block:'start'});
    }
  })
});

// Simple contact form handler (demo only)
const form = document.getElementById('contact-form');
form?.addEventListener('submit', e=>{
  e.preventDefault();
  // In a real site, replace with real submission logic (fetch/ajax)
  alert('Thanks — simulated message (demo).');
  form.reset();
});

// Accessibility: close mobile menu on Escape
document.addEventListener('keydown', e=>{
  if(e.key==='Escape' && mobileMenu?.classList.contains('open')){
    mobileMenu.classList.add('hidden');
    mobileMenu.classList.remove('open');
  }
});
