### CLOSE SPEED MENU ###
document.addEventListener('click', e => {
    if (e.target.tagName !== 'I' || e.target.className !== 'google-icons') {
        speedOptions.classList.remove('show');
    }
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