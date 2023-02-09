const btnAvatar = document.querySelector('#avatar');
const avatarMenu = document.querySelector('.avatar-menu');

const btnVideo = document.querySelector('#btn-yt');
const videoMenu = document.querySelector('.video-menu');

const btnNotification = document.querySelector('#btn-notification');
const notificationMenu = document.querySelector('.notification-menu');

btnAvatar.addEventListener('click', () => {
    avatarMenu.classList.toggle('active');
});

btnVideo.addEventListener('click', () => {
    videoMenu.classList.toggle('active');
});

btnNotification.addEventListener('click', () => {
    notificationMenu.classList.toggle('active');
});