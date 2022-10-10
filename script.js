const container = document.querySelector('.container');
const video = document.querySelector('video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const cur = document.querySelector('#current-time');
const dur = document.querySelector('#duration-time');
const volumeBtn = document.querySelector('#volume-btn');
const volumeSlider = document.querySelector('#volume-slider');
const playBtn = document.querySelector('#play-btn');
const pipBtn = document.querySelector('#pip-btn');
const fullscreenBtn = document.querySelector('#fullscreen-btn');
const speedBtn = document.querySelector('#speed-btn');
const speedOptions = document.querySelector('#speed-options');
const speedOption = document.querySelectorAll('#speed-options li');
const currentSpeed = document.querySelector('#current-speed');

let timer;

const hideControls = () => {
    if (video.paused) return;
    timer = setTimeout(() => {
        container.classList.remove('visible');
    }, 2000);
}

const formatTime = time => {
    let sec = Math.floor(time % 60);
    let min = Math.floor(time / 60) % 60;
    let hrs = Math.floor(time / 3600);
    sec = sec < 10 ? `0${sec}` : sec;
    min = min < 10 ? `0${min}` : min;
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    if (hrs == 0) {
        return `${min}:${sec}`;
    }
    return `${hrs}:${min}:${sec}`;
}

const seekVideo = e => {
    let width = progress.clientWidth;
    progressBar.style.width = `${e.offsetX}px`;
    video.currentTime = (e.offsetX / width) * video.duration;
    cur.innerText = formatTime(video.currentTime);
}

hideControls();

container.addEventListener('mousemove', () => {
    container.classList.add('visible');
    clearTimeout(timer);
    hideControls();
})

progress.addEventListener('mousemove', e => {
    let tooltip = document.querySelector('#tooltip');
    let width = progress.clientWidth;
    let offsetX = e.offsetX;
    let percent = Math.floor((offsetX / width) * video.duration);
    offsetX = offsetX < 20 ? 20 : (offsetX > width - 20) ? width - 20 : offsetX;
    tooltip.style.left = `${offsetX}px`;
    tooltip.innerText = formatTime(percent);
})

progress.addEventListener('click', e => {
    let width = progress.clientWidth;
    video.currentTime = (e.offsetX / width) * video.duration;
})

video.addEventListener('timeupdate', e => {
    let { currentTime, duration } = e.target;
    let percent = (currentTime / duration) * 100;
    progressBar.style.width = `${percent}%`;
    cur.innerText = formatTime(currentTime);
})

volumeBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    if (!video.muted) {
        video.volume = 1.0;
        volumeBtn.querySelector('i').classList.replace('c-icon--volume-off-alt', 'c-icon--volume-up');
    } else {
        video.volume = 0.0;
        volumeBtn.querySelector('i').classList.replace('c-icon--volume-up', 'c-icon--volume-off-alt');
    }
    volumeSlider.value = video.volume;
})

volumeSlider.addEventListener('input', e => {
    video.volume = e.target.value;
    if (e.target.value == 0) {
        return volumeBtn.querySelector('i').classList.replace('c-icon--volume-up', 'c-icon--volume-off-alt');
    }
    volumeBtn.querySelector('i').classList.replace('c-icon--volume-off-alt', 'c-icon--volume-up');
})

fullscreenBtn.addEventListener('click', () => {
    container.classList.toggle('fullscreen');
    if (document.fullscreenElement) {
        fullscreenBtn.querySelector('i').classList.replace('c-icon--minimize', 'c-icon--full-screen');
        return document.exitFullscreen();
    }
    fullscreenBtn.querySelector('i').classList.replace('c-icon--full-screen', 'c-icon--minimize');
    container.requestFullscreen();
})

speedOption.forEach(option => {
    option.addEventListener('click', () => {
        video.playbackRate = option.dataset.speed;
        speedOptions.querySelector('.selected').classList.remove('selected');
        option.classList.add('selected');
        speedOptions.classList.remove('visible');
        let speed = speedOptions.querySelector('.selected').getAttribute('data-speed');
        currentSpeed.innerText = `${speed}x`;
    })
})

video.addEventListener('loadeddata', () => {
    dur.innerText = formatTime(video.duration);
})

video.addEventListener('play', () => {
    playBtn.querySelector('i').classList.replace('c-icon--play', 'c-icon--pause');
})

video.addEventListener('pause', () => {
    playBtn.querySelector('i').classList.replace('c-icon--pause', 'c-icon--play');
})

video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
})

playBtn.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
})

speedBtn.addEventListener('click', () => {
    speedOptions.classList.toggle('visible');
})

pipBtn.addEventListener('click', () => {
    video.requestPictureInPicture();
})

progress.addEventListener('mousedown', () => {
    progress.addEventListener('mousemove', seekVideo);
})

document.addEventListener('mouseup', () => {
    progress.removeEventListener('mousemove', seekVideo);
})