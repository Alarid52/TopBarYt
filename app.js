const btnAvatar = document.querySelector('#avatar');
const avatarMenu = document.querySelector('.avatar-menu');

const btnVideo = document.querySelector('#video');
const videoMenu = document.querySelector('.video-menu');

const btnNotification = document.querySelector('#notifi');
const notificationMenu = document.querySelector('.notification-menu');

document.addEventListener('click', (e) => {
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
});