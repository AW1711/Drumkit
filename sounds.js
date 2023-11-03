document.addEventListener('DOMContentLoaded', function() {
    const soundButtons = {};

    for (let i = 1; i <= 9; i++) {
        const soundName = [
            'boom', 'clap', 'hihat', 'kick', 'openhat', 'ride', 'snare', 'tink', 'tom'
        ][i - 1];
        soundButtons[soundName] = document.getElementById(`soundButton${i}`);
        soundButtons[soundName].addEventListener('click', function() {
            playSound(`${soundName}.wav`);
        });
    }

    function playSound(soundFile) {
        const audio = new Audio(soundFile);
        audio.play();
    }
    window.addEventListener('keydown', function(event) {
        const keySoundMap = {
            'b': 'boom.wav',
            'c': 'clap.wav',
            'h': 'hihat.wav',
            'k': 'kick.wav',
            'o': 'openhat.wav',
            'r': 'ride.wav',
            's': 'snare.wav',
            't': 'tink.wav',
            'y': 'tom.wav',
        };
        if (keySoundMap[event.key]) {
            playSound(keySoundMap[event.key]);
        }
    });
});