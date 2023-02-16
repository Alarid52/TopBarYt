const btnAvatar = document.querySelector('#avatar');
const avatarMenu = document.querySelector('.avatar-menu');

const btnVideo = document.querySelector('#video');
const videoMenu = document.querySelector('.video-menu');

const btnNotification = document.querySelector('#notifi');
const notificationMenu = document.querySelector('.notification-menu');

const btnChannel = document.querySelector('#menu-channel')
const modalChannel = document.querySelector('.modal-container')
const btnCloseModal = document.querySelector('#cancel');


function menu(e) {
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

function modal(e) {
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
