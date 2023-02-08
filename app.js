const btnAvatar = document.querySelector('#avatar');
const menu = document.querySelector('.avatar-menu');

btnAvatar.addEventListener('click', ()=>{
    menu.classList.toggle('active');
});