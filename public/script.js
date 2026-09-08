const items=document.querySelectorAll('.benefit-grid article,.steps li,.price-card,.guide-image,.note-section');
items.forEach(i=>i.classList.add('reveal'));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
items.forEach(i=>observer.observe(i));
