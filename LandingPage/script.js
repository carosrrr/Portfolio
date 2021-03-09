const toggle = document.getElementById('toggle');
const close = document.getElementById('close');
const open = document.getElementById('open');
const modal = document.getElementById('modal');

// Ligar o Nav
toggle.addEventListener('click', () => 
document.body.classList.toggle('show-nav')
);

// Demonstrar o Modal
open.addEventListener('click', () => modal.classList.add ('show-modal'));

// Esconder o Modal
close.addEventListener('click', () => modal.classList.remove ('show-modal'));

// Esconder o Modal ao clicar fora
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);