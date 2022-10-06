const container = document.querySelector('.container');
const video = document.querySelector('video');
const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress-bar');
const cur = document.querySelector('#current-time');
const dur = document.querySelector('#duration-time');
const volumeBtn = document.querySelector('#volume-btn');
const playBtn = document.querySelector('#play-btn');

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

const dragProgressBar = e => {
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
    let offsetX = e.offsestX;
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

video.addEventListener('loadeddata', () => {
    dur.innerText = formatTime(video.duration);
})

volumeBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    if (!video.muted) {
        video.volume = 0.5;
        volumeBtn.innerHTML = '<i class="c-icon c-icon--volume-up" type="volume-up" aria-hidden="true"></i>';
    } else {
        video.volume = 0.0;
        volumeBtn.innerHTML = '<i class="c-icon c-icon--volume-off-alt" type="volume-off-alt" aria-hidden="true"></i>';
    }
})

video.addEventListener('play', () => {
    playBtn.innerHTML = '<i class="c-icon c-icon--pause" type="pause" aria-hidden="true"></i>';
})

video.addEventListener('pause', () => {
    playBtn.innerHTML = '<i class="c-icon c-icon--play" type="play" aria-hidden="true"></i>';
})

video.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
})

playBtn.addEventListener('click', () => {
    video.paused ? video.play() : video.pause();
})

progress.addEventListener('mousedown', () => {
    progress.addEventListener('mousemove', dragProgressBar);
})

document.addEventListener('mouseup', () => {
    progress.removeEventListener('mousemove', dragProgressBar);
})