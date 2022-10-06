### SLACK ICON BUTTONS ###
<button><i class="c-icon c-icon--play" type="play" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--pause" type="pause" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--volume-up" type="volume-up" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--volume-off-alt" type="volume-off-alt" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--volume-medium" type="volume-medium" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--volume-down" type="volume-down" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--cc" type="cc" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--cc-filled" type="cc-filled" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--new-window" type="new-window" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--ellipsis" type="ellipsis" aria-hidden="true"></i></button>
<button><i class="c-icon c-icon--times" type="times" aria-hidden="true"></i></button>
<button><svg aria-hidden="true" viewBox="0 0 20 20"><path fill="currentColor" fill-rule="evenodd" d="M5.72 7.47a.75.75 0 0 1 1.06 0L10 10.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-3.75 3.75a.75.75 0 0 1-1.06 0L5.72 8.53a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd"></path></svg></button>

button:not(:last-of-type) {
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    position: relative;
    width: 36px;
    height: 36px;
    background-color: initial;
    border-width: 0;
    cursor: pointer;
    padding: 0;
    color: #ffffffb3;
}

button:last-of-type {
    align-items: center;
    border-radius: 4px;
    display: inline-flex;
    justify-content: center;
    position: relative;
    width: 16px;
    height: 16px;
    font-size: 14px;
    background-color: initial;
    border-width: 0;
    cursor: pointer;
    padding: 0;
    color: #ffffffb3;
}

button:last-of-type svg {
    width: 1em;
    height: 1em;
    align-items: center;
    display: inline-flex;
    justify-content: center;
    position: relative;
}

@font-face {
    font-family: Slack v2;
    font-style: normal;
    font-weight: 400;
    src: url(https://a.slack-edge.com/bv1-10/slack-icons-v2-fe043a5.woff2) format('woff2');
}

.c-icon {
    align-items: center;
    display: inline-flex;
    height: 20px;
    justify-content: center;
    position: relative;
    width: 20px
}

.c-icon:before {
    display: inline-block;
    font-family: Slack v2;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 1
}

.c-icon--cc-filled:before {
    content: "\E5B1"
}

.c-icon--cc:before {
    content: "\E5B2"
}

.c-icon--ellipsis:before {
    content: "\E067"
}

.c-icon--ellipsis-baseline:before {
    content: "\E068"
}

.c-icon--ellipsis-o:before {
    content: "\E117"
}

.c-icon--new-window:before {
    content: "\E153"
}

.c-icon--pause:before {
    content: "\E132"
}

.c-icon--pause-bold:before {
    content: "\EA32"
}

.c-icon--play:before {
    content: "\E134"
}

.c-icon--play-filled:before {
    content: "\E539"
}

.c-icon--times-circle:before {
    content: "\E214"
}

.c-icon--times-circle-medium:before {
    content: "\E229"
}

.c-icon--times:before {
    content: "\E278"
}

.c-icon--times-small:before {
    content: "\E294"
}

.c-icon--times-medium:before {
    content: "\E321"
}

.c-icon--times-large:before {
    content: "\E328"
}

.c-icon--times-circle-small-filled:before,
.c-icon--times-circle-small:before {
    content: "\E520"
}

.c-icon--volume-off:before {
    content: "\E051"
}

.c-icon--volume-down:before {
    content: "\E052"
}

.c-icon--volume-medium:before {
    content: "\E053"
}

.c-icon--volume-up:before {
    content: "\E054"
}

.c-icon--volume-off-alt:before {
    content: "\E055"
}



### SLACK SPEED OPTIONS MENU ###
<ul class="speed-options" id="speed-options">
    <li data-speed="0.25">0.25x</li>
    <li data-speed="0.5">0.5x</li>
    <li data-speed="0.75">0.75x</li>
    <li data-speed="1" class="active">1x</li>
    <li data-speed="1.25">1.25x</li>
    <li data-speed="1.5">1.5x</li>
    <li data-speed="2">2x</li>
</ul>



### SLACK MORE BUTTON MENU ###
<ul class="overflow-options" id="overflow-options">
    <li>View thread</li>
    <li>View transcript</li>
    <li>View details</li>
    <li><hr></li>
    <li>Download</li>
    <li>Share file...</li>
    <li>Copy link to file</li>
    <li>Add to saved items</li>
    <li>Edit thumbnail...</li>
    <li><hr></li>
    <li>Delete file</li>
</ul>



### SRC VOLUME CONTROLS ###
<li>
    <button class="volume-btn" id="volume-btn" aria-label="Volume button" type="button"><i class="google-icons">volume_up</i></button>
    <label>
        <input type="range" class="volume-slider" id="volume-slider" min="0" max="1" step="any">
    </label>
</li>

.controls li label {
   display: flex;
   align-items: center;
   justify-content: center;
   max-width: 4.75em;
   border-radius: .5em;
}

.controls li .volume-slider {
   height: .25em;
   max-width: 100%;
   border-radius: .5em;
   accent-color: #0078ff;
}

const volumeSlider = document.querySelector('#volume-slider');

volumeBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    if (!video.muted) {
        video.volume = 0.5;
        volumeBtn.querySelector('i').innerText = 'volume_up';
    } else {
        video.volume = 0.0;
        volumeBtn.querySelector('i').innerText = 'volume_off';
    }
    volumeSlider.value = video.volume;
})

volumeSlider.addEventListener('input', e => {
    video.volume = e.target.value;
    if (e.target.value == 0) {
        return volumeBtn.querySelector('i').innerText = 'volume_off';
    }
    volumeBtn.querySelector('i').innerText = 'volume_up';
})



### SRC SPEED OPTIONS ###
<div class="playback-speed" id="playback-speed">
    <button class="speed-btn" id="speed-btn" aria-label="Playback speed button" type="button"><i class="google-icons">slow_motion_video</i></button>
    <ul class="speed-options" id="speed-options">
        <li data-speed="2">2x</li>
        <li data-speed="1.5">1.5x</li>
        <li data-speed="1" class="active">Normal</li>
        <li data-speed="0.75">0.75x</li>
        <li data-speed="0.5">0.5x</li>
    </ul>
</div>

const speedBtn = document.querySelector('#speed-btn');
const speedOptions = document.querySelector('#speed-options');
const speedOption = document.querySelectorAll('#speed-options li');

speedOption.forEach(option => {
    option.addEventListener('click', () => {
        video.playbackRate = option.dataset.speed;
        speedOptions.querySelector('.active').classList.remove('active');
        option.classList.add('active');
    })
})

document.addEventListener('click', e => {
    if (e.target.tagName !== 'I' || e.target.className !== 'google-icons') {
        speedOptions.classList.remove('show');
    }
})

speedBtn.addEventListener('click', () => {
    speedOptions.classList.toggle('show');
})



### SRC PIP BTN ###
<button class="pip-btn" id="pip-btn" aria-label="Picture in picture button" type="button"><i class="google-icons">picture_in_picture_alt</i></button>

const pipBtn = document.querySelector('#pip-btn');

pipBtn.addEventListener('click', () => {
    video.requestPictureInPicture();
})



### SRC FULLSCREEN BTN ###
<button class="fullscreen-btn" id="fullscreen-btn" aria-label="Fullscreen button" type="button"><i class="google-icons">fullscreen</i></button>

const fullscreenBtn = document.querySelector('#fullscreen-btn');

fullscreenBtn.addEventListener('click', () => {
    container.classList.toggle('fullscreen');
    if (document.fullscreenElement) {
        fullscreenBtn.querySelector('i').innerText = 'fullscreen_exit';
        return document.exitFullscreen();
    }
    fullscreenBtn.querySelector('i').innerText = 'fullscreen';
    container.requestFullscreen();
})



### SRC BACKWARDS BTN ###
<button class="backwards-btn" id="backwards-btn" aria-label="Backwards button" type="button"><i class="google-icons">replay_5</i></button>

const backwardsBtn = document.querySelector('#backwards-btn');

backwardsBtn.addEventListener('click', () => {
    video.currentTime -= 5;
})



### SRC FORWARDS BTN ###
<button class="forwards-btn" id="forwards-btn" aria-label="Forwards button" type="button"><i class="google-icons">forward_5</i></button>

const forwardsBtn = document.querySelector('#forwards-btn');

forwardsBtn.addEventListener('click', () => {
    video.currentTime += 5;
})