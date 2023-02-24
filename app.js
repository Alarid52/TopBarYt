const btnAvatar = document.querySelector('#avatar');
const avatarMenu = document.querySelector('.avatar-menu');

const btnVideo = document.querySelector('#video');
const videoMenu = document.querySelector('.video-menu');

const btnNotification = document.querySelector('#notifi');
const notificationMenu = document.querySelector('.notification-menu');

const btnChannel = document.querySelector('#menu-channel')
const modalChannel = document.querySelector('.modal-container')
const btnCloseModal = document.querySelector('#cancel');


const menu = e => {
    switch (e.target) {
        case btnAvatar:
            avatarMenu.classList.toggle('active');
            notificationMenu.classList.remove('active');
            videoMenu.classList.remove('active');
            break;

        case btnVideo:
            videoMenu.classList.toggle('active');
            avatarMenu.classList.remove('active');
            notificationMenu.classList.remove('active');
            break;

        case btnNotification:
            notificationMenu.classList.toggle('active');
            videoMenu.classList.remove('active');
            avatarMenu.classList.remove('active');
            break;

        default:
            notificationMenu.classList.remove('active');
            videoMenu.classList.remove('active');
            avatarMenu.classList.remove('active');
    }
}

const modal = e => {
    switch (e.target) {
        case btnChannel:
            modalChannel.classList.toggle('active');
            avatarMenu.classList.remove('active');
            break;

        case btnCloseModal:
            modalChannel.classList.remove('active');
            break;
    }
}

document.addEventListener('click', menu);
document.addEventListener('click', modal);


const multiplicar = (a, b) => !a ? 0 : new Array(a).fill(b).reduce((prev, next) => prev + next);

// console.log(multiplicar(6,5));


// const navBar = document.querySelector('#nav-bar'); 

// const userMenu = navBar.querySelector('.avatar-menu')
// const btnMenu = navBar.querySelector('.avatar')

// const notificationMenu = navBar.querySelector('.notification-menu');
// const btnNotification = navBar.querySelector('#notifi');

// console.log(btnNotification);
// console.log(notificationMenu);

// const menuNotifi = (e) => {
//     if (notificationMenu.style.visibility === 'hidden') {
//         notificationMenu.style.visibility = 'visible';
//         console.log('se ve');
//     }else {
//         notificationMenu.style.visibility = 'hidden';
//         console.log('no se ve');
//     }
// }

// const menuAvatar = (e) => {
//     if (e.target === btnMenu) {
//         userMenu.style.visibility = 'visible';
//         console.log('se ve');
//     }else {
//         userMenu.style.visibility = 'hidden'
//         console.log('no se ve');
//     }
// }

// btnMenu.addEventListener('click',menuAvatar);

// btnNotification.addEventListener('click', menuNotifi);


const randomUser = async ()=>{
    try {
        const response = await fetch(`https://randomuser.me/api/`);
        let {results} = await response.json();
        console.log(results);
        const user = results.find((result)=> result.gender === "male");
        console.log(user);
    } catch (error) {
        console.log('no conecta');
    }
}

randomUser();